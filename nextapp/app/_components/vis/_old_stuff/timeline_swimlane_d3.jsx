"use client";
import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";

const xScale = (width) => {
    const scale = d3.scaleTime()
        .domain([new Date("1990-01-01"), new Date("2020-12-31")])
        .range([0, width]);
    return scale
}

const yScale = (height, lanes) => {
    const scale = d3.scaleBand()
        .domain(lanes)
        .range([0, height])
        .padding(0.1);
    return scale
}

// Todo: pass events as a prop.
/**
 * 
 * @param {string[]} swimLanes - Name(s) of the swimlanes.
 * @returns Swimlane diagram showing the events.
 */
export function SwimLane({swimLanes}) {
    const svgRef = useRef();
    const [lanes, setLanes] = useState(swimLanes);
    // console.log("lanes1: ", lanes2);

    useEffect (() => {
        // const lanes = ["A", "B"];
        console.log("lanes: ", lanes);
        const events = [
            { lane: "A", start: "1990-01-15", end: "1991-01-15", name: "Hendelse 1" },
            { lane: "A", start: "2000-01-10", end: "2010-07-05", name: "Hendelse 2" },
            { lane: "B", start: "2000-01-10", end: "2010-02-05", name: "Hendelse 3" }
        ];
        // const [lanes, setLanes] = useEffect(swimLanes)

        const svgWidth = 1000;
        const svgHeight = 600;
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = svgWidth - margin.left - margin.right;
        const height = svgHeight - margin.top - margin.bottom;

        // SVG
        const svg = d3.select(svgRef.current)
            .attr("viewBox", [0, 0, svgWidth, svgHeight])
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            ;

        const g = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`)
            .attr("class", "the-g")
            ;

        // Print width and height of g element
        /**
         * Vi bruker setTimeout for å forsinke hentingen av getBBox() til 
         * etter at elementene er lagt til SVG. Dette sikrer at bounding 
         * box-verdiene er korrekte.
         */
        setTimeout(() => {
            // Hent bounding box for g, som inkluderer bredden og høyden.
            const bbox = g.node().getBBox();
            console.log("Width:", bbox.width);
            console.log("Height:", bbox.height);
        }, 0);

        // x and y scale
        const x = xScale(width);
        const y = yScale(height, lanes);
        // x and y axis
        const xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat("%Y"));
        const yAxis = d3.axisLeft(y);
        // Add x and y axis
        const xAxisGroup = g.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0,${height})`)
            .call(xAxis);
        g.append("g")
            .attr("class", "y-axis")
            .call(yAxis);

            /**
             * This is a zoom (and pan) behaviour: a function that adds event handlers (for drags, mouse wheel events and touch events etc.) to an element. It also has methods such as .on defined on it.
             * You can attach an event handler to your zoom behaviour by calling the .on method. This accepts two arguments:
             *      the event type ('zoom', 'start' or 'end')
             *      the name of your event handler function
             * The event types are 'zoom', 'start' and 'end'. 'zoom' indicates a change of transform (e.g. the user has zoomed or panned). 'start' indicates the start of the zoom or pan (e.g. the user has pressed the mouse button). 'end' indicates the end of the zoom or pan (e.g. the user has released the mouse button).
             * 
             * You attach the zoom behaviour to an element by selecting the element and passing the zoom behaviour into the .call method:
             * 
             * ```js
             * d3.select('svg')
                .call(zoom);
             * ```
             * 
             * The zoom behaviour is a function that sets up event listeners on the selected element (svg in the above example). When zoom and pan events occur, a transform is computed and passed into the event handler (inthis case "handleZoom").
             * 
             * Source: https://www.d3indepth.com/zoom-and-pan/
            */
            const zoom = d3.zoom()
                .scaleExtent([1, 8])
                .translateExtent([[0, 0], [width, height]])
                .extent([[0, 0], [width, height]])
                .on("zoom", handleZoom);
    
            /**
             * handleZoom receives a single parameter e (event) which is an object representing the zoom event. The most useful property on this object is transform. This is an object that represents the latest zoom transform and is typically applied to the chart element(s):
             * ```js
             * function handleZoom(e) {
                d3.select('g.chart')
                    .attr('transform', e.transform);
                }
             * ```
             * e.transform has three properties x, y and k. x and y specify the translate transform and k represents the scale factor. It also has a .toString method which generates a string such as "translate(38.9,-4.1) scale(1.3)". This means you can pass e.transform directly into .attr.
             * 
             * 
             * @param {*} param0 
             */
            function handleZoom(event) {
                const newX = event.transform.rescaleX(x);
                xAxisGroup.call(xAxis.scale(newX));
                g.selectAll(".event rect")
                    .attr("x", d => newX(new Date(d.start)))
                    .attr("width", d => newX(new Date(d.end)) - newX(new Date(d.start)));
                g.selectAll(".label")
                    .attr("x", d => (newX(new Date(d.start)) + newX(new Date(d.end))) / 2);
            }
            // function zoomed(event) {
            //     const newX = event.transform.rescaleX(x);
            //     g.select(".x-axis").call(xAxis.scale(newX));
            //     g.selectAll(".event rect")
            //         .attr("x", d => newX(new Date(d.start)))
            //         .attr("width", d => newX(new Date(d.end)) - newX(new Date(d.start)));
            //     g.selectAll(".label")
            //         .attr("x", d => (newX(new Date(d.start)) + newX(new Date(d.end))) / 2);
            // }

        
        // Rectangle
        // Legger til et rect til SVG-en. Dette rektangelet vil dekke hele området vi ønsker å gjøre interaktivt.
        // Interaktivt område: Dette rektangelet fungerer som en usynlig "overflate" som fanger opp musebevegelser, rulling og andre interaksjoner.
        // Zoom og Pan: Ved å binde zoom-funksjonen til rektangelet, gjør vi det mulig for brukeren å zoome inn og ut samt panorere over SVG-innholdet ved å bruke musehjulet og dra med musen.
        // Transformasjon og Skala: Transformasjonen sikrer at rektangelet dekker hele det ønskede interaktive området, mens pointer-events: all sikrer at det fanger opp alle relevante hendelser.
        svg.append("rect")
            /* Setter bredden/høyden lik den totale bredden/høyden på SVG-en, inkludert marginene. Dette sikrer at rektangelet dekker hele det synlige området. */
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("id", "r1")
            // Setter fyllfargen til none, slik at rektangelet ikke vises --> rektangelet skal fungere som et interaktivt område uten å være synlig.
            .style("fill", "none")
            // Setter pointer-events-stilen til all. --> Rektangelet kan fange opp alle museinteraksjoner, inkludert zoom- og pan-hendelser, selv om det er usynlig.
            .style("pointer-events", "all")
            // Flytter rektangelet med en transformasjon slik at det justeres riktig innenfor margene til SVG-en. Dette sikrer at rektangelet dekker det riktige området for interaksjoner.
            .attr('transform', `translate(${margin.left},${margin.top})`)
            // Kaller zoom-funksjonen på rektangelet. Dette binder zoom- og pan-adferden til rektangelet, slik at brukeren kan zoome og panorere når de interagerer med dette området.
            .call(zoom);
        
        // LANE RECT Oppretter et rektangel (rect) for hver lane i lanes-arrayet, posisjonerer dem vertikalt basert på lane-navnet og setter bredden og høyden tilsvarende den tilgjengelige plassen. Rektanglene blir gitt klassen swimlane for enkel identifikasjon og styling.
        g.selectAll(".swimlane")
            .data(lanes)
            .enter().append("rect")
                .attr("class", "swimlane")
                .attr("x", 0)
                // Setter y-posisjonen basert på verdien av d (som representerer lane-navnet) og skalaen y. Dette plasserer hvert rektangel på riktig vertikal posisjon for sin lane.
                .attr("y", d => y(d))
                // Bredden på hvert rektangel = total bredde på det synlige området.
                .attr("width", width)
                // Setter høyden på hvert rektangel lik båndbredden til y-skalaen (-> høyden som er tildelt hver lane).
                .attr("height", y.bandwidth());

        // EVENT GROUPES
        const eventGroup = g.selectAll(".event")
            .data(events)
            .enter().append("g")
            .attr("class", "event");
        // EVENT RECTS
        eventGroup.append("rect")
            .attr("x", d => x(new Date(d.start)))  // x pos
            .attr("y", d => y(d.lane))  // y pos
            .attr("width", d => x(new Date(d.end)) - x(new Date(d.start)))
            .attr("height", y.bandwidth())
            .attr("class", "event");

        eventGroup.append("text")
            .attr("x", d => (x(new Date(d.start)) + x(new Date(d.end))) / 2)
            .attr("y", d => y(d.lane) + y.bandwidth() / 2)
            .attr("dy", "-2em")
            .attr("class", "label")
            .text(d => d.name);

        return () => {
            d3.selectAll("g").remove();
        }
    }, [lanes, setLanes]);

    return(
        <svg ref={svgRef} width="800" height="300"></svg>

    );

}