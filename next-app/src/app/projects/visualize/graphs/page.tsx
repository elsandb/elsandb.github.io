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

      <div className="row justify-content-center fw-light fs-5">
        <div className="col-sm-11 col-md-10 col-xl-9 text-start">
          <h1>Visualization of hierarchies</h1>
          <h2>XML-structure as a tree</h2>
          <p className='lead'>
            When working with complex data structures with a lot of nesting, it is useful to visualize the structures to get an overview of the data hierarchy and relations. Here, we&apos;ll explore eForms&apos; XML-structure by visualizing it in a few different ways.
          </p>

          <h3>Dataset</h3>
          <p>
            We&apos;ll use a json file containing metadata for <i>eForms</i> - digital forms used by public buyers in the EU/EEA to publish information about procurement processes. Completed forms are stored as XML files, and can be retrieved from <a href="https://ted.europa.eu/en/" target="_blank" rel="noopener noreferrer">Tenders Electronic Daily (TED)</a>.
          </p>
          {/* eForms what..? */}
          <div className="col-11 d-inline-block ms-4 fs-6">
            <p><strong>eForms - what..? </strong>When the public sector in the EU/EEA buys goods or services for a value above a certain threshold, they must publish information about the procurement processes on Tenders Electronic Daily (<a href="https://ted.europa.eu/en/" target="_blank" rel="noopener noreferrer">TED</a>), which is a website (online journal) for public procurement notices. To publish procurement notices on TED, public bodies fills out standardized digital forms made by the EU, called <i>eForms</i>. Completed eForms are stored in XML-format and are publicly available on TED. Read more about eForms at the European Commission&apos;s <a target="_blank" rel="noopener noreferrer" href="https://single-market-economy.ec.europa.eu/single-market/public-procurement/digital-procurement/eforms_en">site about eForms</a></p>
          </div>
          {/* Context */}
          <p>
            Imagine you want to analyze the data from eForms to answer questions like &quot;what does my government spend money on, which companies have the most contracts with the public sector, and what are the values of those contracts?&quot;. To go about this, we need to (1) understand what information the eForms data contains and how it is structured, and (2) convert the data from XML to a format that is easier to analyze and visualize, i.e. table format. Here we&apos;ll focus on the first of these tasks.
          </p>
          <p>
            Task 1 can be further devided into two parts: get an overview of (1A) the structure of the XML files, which is an hierarchical tree structure, and (1B) the structure of the actual data contained in the files - which could be organized in tables and relations between tables. Here, we&apos;ll focus on the XML-structure of eForms, and how it can be visualized.
          </p>
          {/* Summary */}
          <div className='fs-6 bg-light pt-3 pb-2 px-5'>
            <p>
              <strong>To summarize, we need to:</strong>
            </p>
            <ol className=''>
              <li>Understand what information the eForms data contains and how it is structured.
                <ol type='A'>
                  <li><span className='text-success fw-bold'>Get an overview of the hierarchical structure of the XML files, by visualizing it.</span> ⬅️ We will focus on this task.</li>
                  <li>Get an overview of the structure of the actual data contained in the XML files. Can we organize the data in tables and relations between tables?</li>
                </ol>
              </li>
              <li>Use the understanding gained from 1A and 1B to make a plan for conversion of the data from XML to table format.</li>
            </ol>
          </div>

          {/* H2 - The XML-structure */}
          <h2 className='pt-5'>(1A) The XML-structure</h2>
          <p>
            The file <a href="https://github.com/OP-TED/eForms-SDK/blob/develop/fields/fields.json" target="_blank" rel="noopener noreferrer">fields.json</a> from OP-TED&apos;s <a href="https://github.com/OP-TED/eForms-SDK" target="_blank" rel="noopener noreferrer">eForms-SDK</a> contains metadata for eForms. The property <code>xmlStructure</code> is an array of objects that describe the XML elements in eForms. We&apos;ll use this to visualize the hierarchical structure as a graph, tree and sunburst chart.
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
            {/* <h3 className='pt-3'><code>d3blocks</code> - graph and tree</h3> */}
            <summary className='fs-4'>
              <span className='text-decoration-underline* fw-bold'>Show notebook</span> - Graph and tree with <code>d3blocks</code></summary>
            <Iframe
              url="/projects/visualize/eForm-fields/notebooks/vis-eForms-fields-01-clean.html"
              width="100%"
              height="3900px"
              id="eForm-fields-notebook"
              className="border"
            />
            <p className='pt-3 fw-light* fs-5'>We see the resulting graph and tree charts below.</p>
          </details>
          <h4 className='pt-5 fs-5'>Graph chart</h4>
          <ul className='list-unstyled fw-light ms-3'>
            <li>💡 Click and drag to navigate the graph</li>
            <li>💡 Scroll wheel to zoom in/out</li>
          </ul>
        </div>
      </div>
      {/* Graph chart */}
      <div className="row justify-content-center">
        <div className="col-sm-11 col-md-10">
          <Iframe url="/projects/visualize/eForm-fields/charts/eForm-fields-graph-2024-11-08.html"
            width="100%"
            height="800px"
            id="eForm-fields-graph"
            scrolling="no"
            className="embed-responsive-item border"
          />
        </div>
      </div>

      {/* Tree chart */}
      <div className="row justify-content-center">
        <div className="col-sm-11 col-md-10 col-xl-9">
          <h4 className='pt-3 fs-5'>Tree chart</h4>
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
              display="grid"
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