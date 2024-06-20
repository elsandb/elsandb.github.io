// Create an object with a patient history.
"use client";
import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";

/* 
useRef Hook
The useRef hook allows you to store a reference to a DOM element. You’ll use this hook to store a reference to the D3.js visualization, allowing you to access and manipulate it from within the component.  https://www.influxdata.com/blog/guide-d3js-react/ 

useState Hook
You can use this hook to store data related to the visualization, such as the data being visualized, and update the visualization when the state changes.

useEffect Hook
You can use the useEffect hook to perform side effects on a React component. You can do this by setting the position and size of the elements in the component. It can also create a D3.js visualization that shows the changes in the component’s state.
*/

import {
  select,
  line,
  curveCardinal,
  scaleLinear,
  axisBottom,
  axisLeft,
} from "d3";


// ###############################################################

//chart component
export function LineChart() {

  //refs
  const svgRef = useRef();

  //draws chart
  useEffect(() => {
    const width = 640;
    const height = 200;
    const margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40,
      };
      //data
      const data = [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
        { x: 2, y: 15 },
        { x: 3, y: 25 },
        { x: 4, y: 30 },
      ];
    const svg = select(svgRef.current).attr("viewBox", [0, 0, width, height]);

    //scales
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width - margin.left - margin.right]);

    const yScale = scaleLinear()
      .domain([0, d3.max(data.map((d) => d.y))])
      .range([height - margin.bottom, margin.top]);

    //axes
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg
      .append("g")
      .attr("transform", `translate(0, ${width - margin.left - margin.right})`)
      .call(xAxis)
      .style("color", "red");

    const yAxis = axisLeft(yScale);
    svg
      .append("g")
      // .attr("transform", `translate(${marginLeft},0)`)
      .call(yAxis);

    // // Add the x-axis.
    // svg.append("g")
    //     .attr("transform", `translate(0,${height - margin.bottom})`)
    //     .style("color", "red")
    //     .call(xAxis
    //         .ticks(d3.timeMonth.every(6))
    //         .tickFormat(d => d <= d3.timeYear(d) ? d.getFullYear() : null)
    //     );

    // // Add the y-axis.
    // svg.append("g")
    //     .attr("transform", `translate(${marginLeft},0)`)
    //     .call(d3.axisLeft(yScale))
    //     ;

    //line generator
    const myLine = line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d.y))
      .curve(curveCardinal);

    //drawing the line
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "#00bfa6");
    //   .attr("transform", `translate(${marginLeft}),${marginBottom}`)
  }, []);

  return <svg ref={svgRef}></svg>;
}



// ###############################################################
export const BarChart = () => {
  const [data, setData] = useState([
    {
      name: "A",
      value: 50,
    },
    {
      name: "B",
      value: 20,
    },
    {
      name: "C",
      value: 40,
    },
    {
      name: "D",
      value: 70,
    },
  ]);

  const svgRef = useRef();

  useEffect(() => {
    // Decalre chart dimensions and margins
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Declare x- and y- scale and range
    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    const svg = select(svgRef.current);
    svg
      .select(".bar-chart") // Select a div with className="bar-chart".
      .append("svg") // Add an SVG element.
      .attr("width", width + margin.left + margin.right) // Set width
      .attr("height", height + margin.top + margin.bottom) // Set height
      .append("g") // Legger til et g-element som et barn av SVG-elementet. Vil fungere som en gruppe for andre SVG-elementer.
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // Bruker en transformasjon på g-elementet for å flytte det til posisjonen spesifisert av margin.left og margin.top. Dette sikrer at alt innhold i g-elementet blir forskjøvet med de angitte marginene, noe som gir plass til akser, etiketter og andre elementer utenfor grafområdet.

    // Ved å bruke et g-element med en transformasjon, kan du sikre at alle barn-elementene (som søyler i et søylediagram, akser, etiketter osv.) blir plassert riktig innenfor diagrammets tegneområde, samtidig som du tar hensyn til marginene som er spesifisert. Dette er en vanlig praksis i D3 for å organisere og strukturere SVG-grafene på en ryddig og effektiv måte.

    // Declare domain for the x scaleBand and y linear scale.
    x.domain(
      data.map(function (d) {
        return d.name; // The x values are the names in each object in data.
      })
    );
    y.domain([
      0,
      d3.max(data, function (d) {
        return d.value;
      }),
    ]);

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return x(d.name);
      })
      .attr("width", x.bandwidth())
      .attr("y", function (d) {
        return y(d.value);
      })
      .attr("height", function (d) {
        return height - y(d.value);
      });

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

/**
 * @argument dob (Date object) - Day of birth local time. Ex: "2024-06-15T00:00:00.000Z".
 * @end (Date object) - DateTime for the end of the timeline. Defaults to today's date at 23.59.
 * @returns d3 scaleTime object.
 */
// const TimeScale = (dob, range) => {
//     const domain = [dob, endDT];
//     const scale = d3.scaleTime()
//         .domain(domain)
//         .range(range)
// }



// ###############################################################
export function TimeLine() {

  const svgRef = useRef();

  useEffect(() => {
    const width = 640;
    const height = 200;
    const margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40,
    };

    const mal = [
    {
        title: "",
        timeInterval: null,
        dateStart: "",
        dateEnd: "",
        descr: "",
    },
    ];
    const pashist = {
        name: "Olly",
        dob: "1990-01-01",
        events: [
            {
            type: "Livshendelse",
            title: "Birth",
            timeInterval: null,
            date: "1990-01-01",
            descr: "Normal fødsel. 3,8 kg, 51 cm, APGAR 9",
            },
            {
            type: "diagnose",
            title: "Appendicitt",
            timeInterval: null,
            date: "2005-05-12",
            descr: "",
            },
            {
            type: "Innleggelse",
            title: "Appendektomi",
            timeInterval: ["2005-05-12", "2005-05-15"],
            dateStart: null,
            descr: "Appendektomi utført uten komplikasjoner.",
            },
        ],
    };
    // const da = [
      //     {
      //       "date": "2024-06-12",
      //       "conditions": "sunny",
      //       "chanceOfPrecipitation": 0.3,
      //       "humidity": 0.7
      //     },
      //     {
      //       "date": "2024-06-13",
      //       "conditions": "cloudy",
      //       "chanceOfPrecipitation": 0.3,
      //       "humidity": 0.3
      //     },
      //     {
      //       "date": "2024-06-14",
      //       "conditions": "cloudy",
      //       "chanceOfPrecipitation": 0.6,
      //       "humidity": 0.5
      //     },
      //     {
      //       "date": "2024-06-15",
      //       "conditions": "sunny",
      //       "chanceOfPrecipitation": 0.7,
      //       "humidity": 0.1
      //     }
      // ];
    
    const svg = select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .style("background-color", "lightgrey");

    //scales
    const xScale = d3
      .scaleTime()
      .domain([new Date(pashist.dob), Date.now()])
      .range([0, width - margin.left - margin.right]); // The Possible x values.
    // .nice()  // use scale.nice to extend the domain so that it starts and ends on round.
    // .clamp();  // The scale will return a value within range, even if the input is outside the domain. Date 2025.12.31 will be 960.
    const yScale = d3
      .scaleBand()
      .domain([1, 4])
      .range([height - margin.bottom, margin.top]);
    // //axes
    const xAxis = axisBottom(xScale);

    // Add the x-axis.
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},${height - margin.bottom})`)
      .style("color", "red")
      .call(xAxis.ticks(d3.timeYear.every(2)));

    // Add the y-axis.
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

  }, []);

  function zoomed({ transform }) {
    view.attr("transform", transform);
    gX.call(xAxis.scale(transform.rescaleX(x)));
    gY.call(yAxis.scale(transform.rescaleY(y)));
  }
  function reset() {
    svg.transition()
      .duration(750)
      .call(zoom.transform, d3.zoomIdentity);
  }
  // prevent scrolling then apply the default filter
  function filter(event) {
    event.preventDefault();
    return (!event.ctrlKey || event.type === "wheel") && !event.button;
  }
  const zoom = d3
    .zoom()
    .scaleExtent([1, 40])
    .translateExtent([
      [-100, -100],
      [width + 90, height + 100],
    ])
    .filter(filter)
    .on("zoom", zoomed);
  return <svg ref={svgRef}></svg>;
}





// ###############################################################
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

export function SwimLane() {
    const svgRef = useRef();

    useEffect (() => {
        const lanes = ["A", "B"];
        const events = [
            { lane: "A", start: "1990-01-15", end: "1991-01-15", name: "Hendelse 1" },
            { lane: "A", start: "2000-01-10", end: "2010-07-05", name: "Hendelse 2" },
            { lane: "B", start: "2000-01-10", end: "2010-02-05", name: "Hendelse 3" }
        ];
        const svgWidth = 600;
        const svgHeight = 300;
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
    }, []);

    return(
        <svg ref={svgRef} width="800" height="300"></svg>

    );

}


// ###############################################################
const DIMS = {
    marginTop: 15,
    marginRight: 15,
    marginBottom: 40,
    marginLeft: 60,
    innerPadding: 10
  };

export function TestZoom() {
    const svgRef = useRef();

    useEffect (() => {
        // DIMENSIONS
        const width = 600;  // Total bredde på SVG-elementet
        const height = 200; // Total høyde på SVG-elementet
        const margin = { top: 20, right: 20, bottom: 40, left: 50 };
        const boundedWidth = width - margin.left - margin.right;
        const boundedHeight = height - margin.top - margin.bottom;
        // ZOOM & PAN
        function zoomHandle(e) {
            // d3.select('svg g')
            //     .attr('transform', e.transform);
            d3.select('g')
                .attr('transform', e.transform);

            // const newX = e.transform.rescaleX(xAxis);
            // xAxis.call(xAxis.scale(newX));

            g.selectAll(".e rect")
                .attr("x", d => newX(new Date(d.start)))
                .attr("width", d => newX(new Date(d.end)) - newX(new Date(d.start)));
            g.selectAll(".label")
                .attr("x", d => (newX(new Date(d.start)) + newX(new Date(d.end))) / 2);
        }
        let zoom = d3.zoom()
            .on('zoom', zoomHandle);

        // EXAMPLE DATA
        const data = [25, 50, 75, 100, 125, 150, 175, 200]; 

        // SCALES
        const xScale = d3.scaleBand()
            .domain(data.map((d, i) => i))
            .range([0, boundedWidth])
            .padding(0.5);
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([boundedHeight, 0]);

        // ELEMENTS
        const svg = d3.select(svgRef.current)
            // .attr("viewBox", [0, 0, width, height])
            .attr("width", width)
            .attr("height", height)
            .call(zoom)
            ;

        /* g til selve graf-området, forskjøvet med margin.left og margin.top. */
        const gMain = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        
        const xAxis = svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(${margin.left},${margin.top + boundedHeight})`)
            .call(
                d3.axisBottom(xScale)
                    // .tickFormat((d, i) => `${d}`)  // No change if I switch between i and d. Same as commenting out this line.
            )
        
        const yAxis = svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${margin.left},${margin.top})`)
            .call(
                d3.axisLeft(yScale)
                    .tickFormat((d, i) => `${d}`)  // Set index as tick label
            )

        gMain.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", (d, i) => xScale(i))
            .attr("y", d => yScale(d))
            .attr("width", xScale.bandwidth())
            .attr("height", d => boundedHeight - yScale(d))
            .attr("fill", "steelblue");
    
        const gOverlay = gMain.append("g")
            .attr("width", width)
            .attr("height", height)
            .attr("fill", "none")
            .attr("class", "overlay")
            .call(zoom)
            ;
    
        // gMain.append("g")
        //     .attr("class", "y axis")
        //     .call(d3.axisLeft(yScale));

    }, []);

    return (
        <svg ref={svgRef}>
            {/* <g ref={g1Ref}>
                <rect height="50" width="100"></rect>
            </g> */}
        </svg>
    )
}

export function LinePlot({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40,
}) {
  const gx = useRef();
  const gy = useRef();
  const x = d3.scaleLinear(
    [0, data.length - 1],
    [marginLeft, width - marginRight]
  );
  const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
  const line = d3.line((d, i) => x(i), y);
  useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
  useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);

  return (
    <svg width={width} height={height}>
      <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
      <g ref={gy} transform={`translate(${marginLeft},0)`} />

      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d={line(data)}
      />
      <g fill="green" stroke="currentColor" strokeWidth="1.5">
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
        ))}
      </g>
    </svg>
  );
}
