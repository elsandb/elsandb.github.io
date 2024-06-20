"use client";
import { Timeline } from "vis-timeline/standalone";
import { DataSet } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.css";
import React, { useEffect, useRef, useState } from "react";

// Copy-paste (almost) from: https://www.npmjs.com/package/vis-timeline
export default function Visjs1() {
  const visRef = useRef();
  useEffect(() => {
    // DOM element where the Timeline will be attached
    var container = visRef.current;
    // Create a DataSet (allows two way data-binding)


    const groups = [
        {
          id: 1,
          content: "diagnose",
          className: "diagnose",
          // Optional: a field 'className', 'style', 'order', [properties]
        },
        {
            id: 2,
            content: "innleggelse",
            className: "innleggelse",

        },
        {
            id: 3,
            content: "livshendelse",
            className: "livshendelse",

        }
        
    ]

    const items = new DataSet([
      {
        id: 1,
        editable: true,
        content: "Diabetes mellitus type 2",
        start: "2000-01-10",
        group: 1,
        description:
          "Diagnostisert med diabetes mellitus type 2. Følges opp med kostholdsveiledning og medikamentell behandling (metformin).",
      },
      {
        id: 2,
        editable: true,
        content: "Hypertensjon",
        start: "2005-03-05",
        group: 1,
        description:
          "Diagnostisert med hypertensjon. Behandlet med antihypertensiva (enalapril).",
      },
      {
        id: 3,
        editable: true,
        content: "Pneumoni",
        start: "2018-11-12",
        end: "2018-11-22",
        group: 1,
        description:
          "Diagnostisert med pneumoni. Behandlet med intravenøs antibiotika under sykehusoppholdet. Full restitusjon etter to ukers behandling.",
        type: "box"
      },
      {
        id: 4,
        editable: true,
        content: "Akutt hypertensiv krise",
        start: "2010-01-25",
        end: "2010-01-28",
        group: 2,
        description:
          "Akutt innleggelse ved Oslo Universitetssykehus grunnet hypertensiv krise. Stabilisert med intravenøs antihypertensiva.",
        type: "box"
      },
      {
        id: 5,
        editable: true,
        content: "Diabetesutredning",
        start: "2015-03-15",
        end: "2015-03-17",
        group: 2,
        description:
          "Planlagt innleggelse ved Diakonhjemmet Sykehus for omfattende utredning av diabetes mellitus type 2 og kontroll av langtidsblodsukker (HbA1c).",
        type: "box"
      },
      {
        id: 6,
        editable: true,
        content: "Pneumoni",
        start: "2018-11-12",
        end: "2018-11-22",
        group: 2,
        description:
          "Akutt innleggelse ved Bærum Sykehus grunnet pneumoni. Behandlet med intravenøs antibiotika og støttebehandling.",
        type: "box"
      },
      {
        id: 7,
        editable: true,
        content: "Barn født",
        start: "1970-06-20",
        group: 3,
        description: "Fødsel av første barn. Normalt svangerskap og fødsel.",
      },
      {
        id: 8,
        editable: true,
        content: "Barn født",
        start: "1973-08-15",
        group: 3,
        description: "Fødsel av andre barn. Normalt svangerskap og fødsel.",
      },
      {
        id: 9,
        editable: true,
        content: "Barn født",
        start: "1978-09-30",
        group: 3,
        description: "Fødsel av tredje barn. Normalt svangerskap og fødsel.",
      },
      {
        id: 10,
        editable: true,
        content: "Født",
        start: "1949-03-12",
        group: 3,
        description: "Normal fødsel.",
        type: "point"
      },
    ]);

    items.add({
        id: 11,
        editable: true,
        content: '<h5>Hendelse</h5><p>En kort beskrivelse av hendelsen.</p><a href="/" target="" className="link">Link til journalnotat som beskriver hendelsen.</a>',
        start: "1955-03-12",
        group: 1,
        description: "En kort beskrivelse av hendelsen."
    })

    // Configuration for the Timeline
    var options = {
        clickToUse: true,
        configure: (function (option, path) {
            return option === 'format' || path.indexOf('format') !== -1;
        }),
        dataAttributes: "all"
    };



    // Create a Timeline
    new Timeline(container, items, options, groups);
  }, [visRef, DataSet]);

  return (<div ref={visRef} id="visualization"></div>);
}
