"use client"
import Iframe from 'react-iframe';
// import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';
// import python from 'highlight.js/lib/languages/python';
import React from 'react';
// // Then register the languages you need
// hljs.registerLanguage('python', python);


export default function page() {
  // useEffect(() => {
  //   hljs.highlightAll();
  // });

  // const CodeBlock = ({ code }: { code: string }) => {
  //   useEffect(() => {
  //     hljs.highlightAll();
  //   }, [code]);
  //   return <pre>
  //     <code>
  //       {code}
  //       {/* <div dangerouslySetInnerHTML={{ __html: code }} />; */}
  //     </code>
  //   </pre>
  // };

  return (
    <div className="d-grid p-2 p-sm-3 p-md-4 text-center text-sm-start">

      {/* <CodeBlock code="def fib(n): a, b = 0, 1" />
      <pre>
        <code className='p-0 m-0'>
          def fib(n):
        </code>
        <code className='p-0 mx-4'>
          a, b = 0, 1
          while a = n:
          print(a, end=' ')
          a, b = b, a+b
          print()
          fib(1000)
        </code>
      </pre> */}

      <div className="row justify-content-center fw-light fs-6">
        <div className="col-sm-11 col-md-10 col-xl-9 text-start">

          <h1>Visualization of hierarchies</h1>
          <h2>XML/JSON files are trees</h2>
          <p className='lead'>
            When working with complex data structures with a lot of nesting, it is useful to visualize the structures to get an overview of the data hierarchy.
            Here, I&apos;ll explore eForms&apos; XML-structure by visualizing it in a few different ways (tree-, graph and sunburst charts).
          </p>

          <h3>A few words on eForms</h3>
          <p className='fs-6'>
            When the public sector in the EU/EEA buys goods or services for a value above a certain threshold, they must publish information about the procurement processes on Tenders Electronic Daily (<a href="https://ted.europa.eu/en/" target="_blank" rel="noopener noreferrer">TED</a>), which is a website (online journal) for public procurement notices. To publish procurement notices on TED, public bodies fills out standardized digital forms made by the EU, called <i>eForms</i>. Completed eForms are stored in XML-format and are publicly available on TED. The metadata in <code>fields.json</code> describes how these XML documents are structured. (Read more about eForms at the European Commission&apos;s <a target="_blank" rel="noopener noreferrer" href="https://single-market-economy.ec.europa.eu/single-market/public-procurement/digital-procurement/eforms_en">site about eForms</a>).
          </p>
          <p>
            You don&apos;t need to understand what eForms or XML is to understand the creation of the visualizations. The required data format for the visualizations are shown in the notebook below.
          </p>
          <p>
            I chose the dataset because I worked with the old version of eForms in my previous job, and wished I had detailed visualizations to show how the data was structured. For the tree and sunburst charts, you can use any hierarchical data where each child element has one (and only one) parent. For graphs, each element can have one or many parents. If you know XML, JSON (or HTML), then you know that the elements in these files compose a tree structure.
          </p>
          {/* <p>
            If you want to dive into graph theory instead of just visualizing the data, I recommend the video <a href='https://www.youtube.com/watch?v=09_LlHjoEiY&t=1945s' rel='noopener noreferrer' target='_blank'>Algorithms Course - Graph Theory Tutorial from a Google Engineer</a> posted by freeCodeCamp.org on YouTube.
          </p> */}
          <p>
            Note that the visualizations show the structure/hierarchy of the XML files (the forms) and not of the actual data stored in eForms. One piece of data (in one part of the form) may be related to several other pieces of data (in other parts of the form). Therefore the visualizations will not necessarily work as a map for how the data should be modelled in a database.
          </p>

          <h3>Dataset an d3blocks</h3>
          <p>
            The file <a href="https://github.com/OP-TED/eForms-SDK/blob/develop/fields/fields.json" target="_blank" rel="noopener noreferrer">fields.json</a> from OP-TED&apos;s <a href="https://github.com/OP-TED/eForms-SDK" target="_blank" rel="noopener noreferrer">eForms-SDK</a> contains metadata for eForms.
            The property <code>xmlStructure</code> is an array of objects that describe the XML elements in eForms. I&apos;ll use this to visualize the hierarchical structure as a graph, tree and sunburst chart.
          </p>
          <p>
            <a href="https://d3blocks.org/" target="_blank" rel="noopener noreferrer">d3blocks</a> can be used to create a graph and tree visualization. In the notebook below, <i>fields.json</i> is loaded and the array <code>xmlStructure</code> is converted to a Pandas DataFrame. The DataFrame is then used to create the graph and tree visualization. The actual creation of the visualizations is done in the last two cells of the notebook.
          </p>
        </div>
      </div>

      <br />

      {/* GRAPH AND TREE */}
      {/* Graph and tree notebook */}
      <div className="row justify-content-center">
        <div className="col-sm-11 col-md-10 col-xl-9">
          <details>
            <summary>
              <span className='fw-bold'>Show code </span>
              - Graph and tree with <code> d3blocks</code>
            </summary>
            <Iframe
              url="/projects/visualize/eForm-fields/notebooks/vis-eForms-fields-01-clean.html"
              width="100%"
              height="3900px"
              id="eForm-fields-notebook"
              className="border" />
          </details>
          <p className='pt-3'>We see the resulting graph and tree charts below.</p>

          
          <h3 className='pt-3 fs-5'>Graph chart</h3>
          <ul className='list-unstyled fw-light ms-3'>
            <li>💡 Click and drag to navigate the graph</li>
            <li>💡 Scroll wheel to zoom in/out</li>
          </ul>
        </div>
      </div>
      {/* Graph chart */}
      <div className="row justify-content-center">
        <div className="col-sm-11 col-md-10">
          <Iframe 
            url="/projects/visualize/eForm-fields/charts/eForm-fields-graph-2024-11-08.html"
            width="100%"
            height="800px"
            id="eForm-fields-graph"
            scrolling="no"
            className="embed-responsive-item border"/>
        </div>
      </div>

      {/* Tree chart */}
      <div className="row justify-content-center">
        <div className="col-sm-11 col-md-10 col-xl-9">
          <h3 className='pt-3 fs-5'>Tree chart</h3>
          <ul className='list-unstyled fw-light ms-3'>
            <li>💡 Click and drag to navigate the graph</li>
            <li>💡 Scroll wheel to zoom in/out</li>
            <li>💡 Click on a node to collapse its sub-branches</li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-11 col-md-10">
          <Iframe url="/projects/visualize/eForm-fields/charts/eForm-fields-tree-2024-11-08.html"
            width="100%"
            height="1000px"
            id="eForm-fields-tree"
            className="embed-responsive-item border"
            scrolling="no"
          />
        </div>
      </div>

      {/* --- SUNBURST CHART --- */}
      <div className="row justify-content-center pt-5">
        <div className="col-sm-11 col-md-10 col-xl-9 text-start">
          <h3>Sunburst chart</h3>
          <p className='fw-light fs-5'>
            Another way to visualize hierarchies is to create a sunburst chart, e.g. <a href="https://plotly.com/python/sunburst-charts/" target="_blank" rel="noopener noreferrer">this one from plotly</a>.
          </p>
          {/* Sunburst notebook */}
          <details><summary>Show code</summary>
            {/* Sunburst notebook */}
            <Iframe url="/projects/visualize/eForm-fields/notebooks/eForm-fields-sunburst.html"
              width="100%"
              height="550px"
              id="eForm-fields-tree"
              position="relative"
              className="embed-responsive-item border"
            />
          </details>

          <ul className='list-unstyled fw-light pt-4'>
            <li>💡 Click on an element, and the chart will update to show only the selected element and its children.</li>
            <li>💡 Click on the center element to go back one step.</li>
          </ul>
        </div>
      </div>
      {/* Sunburst chart */}
      <div className="row justify-content-center">
        <div className="col-12">
          <Iframe
            url="/projects/visualize/eForm-fields/charts/eForm-fields-sunburst-2024-11-09.html"
            width="100%"
            height="1000"
            id="eForm-fields-tree"
            scrolling="no"
            className="embed-responsive-item border"
          />
        </div>
      </div>

    </div>
  )
}