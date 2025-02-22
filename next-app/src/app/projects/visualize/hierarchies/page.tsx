"use client"
import Iframe from 'react-iframe';
import 'highlight.js/styles/github.css';
import React from 'react';
import Lead from '@/components/text/lead';
import { PostHeader } from '@/components/text/post-related';

export default function page() {
  return (
    <div className="d-grid p-2 p-sm-3 p-md-4 text-center text-sm-start">
      <div className="row justify-content-center fw-light fs-6 pt-4">
        <div className="col-sm-11 col-md-10 col-xl-8 text-start pt-2">
          <PostHeader
            title={'Visualization of hierarchies'}
            publishedDate={'2025-01-19'} />

          <Lead>
            When working with complex data structures with a lot of nesting, visualizations can help you get an overview of the data hierarchy. Here, I&apos;ll show how I created a tree, graph, and sunburst chart to explore the XML-structure of eForms. You don&apos;t need prior knowledge of eForms or XML to understand the process of creating the visualizations. 
            {/* I chose this dataset because I worked with the old version of eForms in my previous job, and wished I had detailed visualizations to get a better overview. */}
          </Lead>
          <p className='fs-6 pt-3'>
            eForms are standardized digital forms used by public bodies in the EU/EEA for publishing procurement notices on Tenders Electronic Daily (<a href="https://ted.europa.eu/en/" target="_blank" rel="noopener noreferrer">TED</a>). The notices are available on TED as XML documents.
            The metadata in <a href="https://github.com/OP-TED/eForms-SDK/blob/develop/fields/fields.json" target="_blank" rel="noopener noreferrer">fields.json</a> (from OP-TED&apos;s <a href="https://github.com/OP-TED/eForms-SDK" target="_blank" rel="noopener noreferrer">eForms-SDK</a>) contains the array <code>xmlStructure</code> describing each of the XML elements in these documents. In the two notebooks below, this array is used to create the visualizations.
          </p>

          <details className='ms-4'>
            <summary><i>More about eForms</i></summary>
            <p className='pt-2'>
              When the public sector in the EU/EEA buys goods or services for a value above a certain threshold, they must publish information about the procurement (buying) process on Tenders Electronic Daily (<a href="https://ted.europa.eu/en/" target="_blank" rel="noopener noreferrer">TED</a>), which is a website (online journal) for public procurement notices. To publish procurement notices on TED, public bodies fills out standardized digital forms made by the EU, called <i>eForms</i>. Notices (completed eForms) are stored in XML-format and are publicly available on TED.
            </p>
            <p>
              Read more about eForms at the European Commission&apos;s <a target="_blank" rel="noopener noreferrer" href="https://single-market-economy.ec.europa.eu/single-market/public-procurement/digital-procurement/eforms_en">site about eForms</a>.
            </p>
          </details>
          {/* <p>            
              For the tree and sunburst charts, you can use any hierarchical data where each child element has one (and only one) parent. For graphs, each element can have one or many parents.
            </p> */}

          <h3 className='fs-5 pt-4'>Graph and tree with d3blocks</h3>
          <p>
            Here, I use <a href="https://d3blocks.org/" target="_blank" rel="noopener noreferrer">d3blocks</a> to create a graph and tree chart:
          </p>
        </div>
      </div>

      {/* GRAPH AND TREE */}
      {/* Graph and tree notebook */}
      <div className="row justify-content-center">
        <div className="col-sm-11 col-md-10 col-xl-8">
          <details>
            <summary>
              <span>Show notebook </span>
            </summary>
            <Iframe
              url="/projects/visualize/eForm-fields/notebooks/vis-eForms-fields-01-clean.html"
              width="100%"
              height="3900px"
              id="eForm-fields-notebook" />
          </details>

          <ul className='list-unstyled fw-light pt-3'>
            <li>💡 Click and drag to navigate the graph</li>
            <li>💡 Hover over and scroll to zoom</li>
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
            className="embed-responsive-item border" />
        </div>
      </div>

      {/* Tree chart */}
      <div className="row justify-content-center">
        <div className="col-sm-11 col-md-10 col-xl-8">
          <ul className='list-unstyled fw-light pt-4'>
            <li>💡 Click and drag to navigate the tree</li>
            <li>💡 Hover over and scroll to zoom</li>
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
        <div className="col-sm-11 col-md-10 col-xl-8 text-start">
          <h3 className='fs-5'>Sunburst Chart with Plotly</h3>
          <p className='fw-light'>
            An alternative approach to visualizing hierarchies is by creating a sunburst chart. Here, I have done just that using { }
            <a href="https://plotly.com/python/sunburst-charts/" target="_blank" rel="noopener noreferrer">Plotly&apos;s sunburst chart</a>.
          </p>
          {/* Sunburst notebook */}
          <details><summary>Show notebook</summary>
            <Iframe url="/projects/visualize/eForm-fields/notebooks/eForm-fields-sunburst.html"
              width="100%"
              height="550px"
              id="eForm-fields-tree"
              position="relative"
              className="embed-responsive-item border"
            />
          </details>

          <ul className='list-unstyled fw-light pt-4'>
            <li>💡 Click on an element, and the chart will update - showing only the selected element and its children.</li>
            <li>💡 Click on the central element to navigate back one level.</li>
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