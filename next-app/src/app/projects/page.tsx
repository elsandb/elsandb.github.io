"use client";
import React from "react";
import Lead from '@/components/text/lead';
import { PostHeader } from '@/components/text/post-related';
import { ProjectCard } from '@/components/card';

export default function ProjectsPage() {
  return (
    <div className="container">
      <PostHeader title="My Projects" />
      <Lead>
        Here is one little project. More to come... maybe &#91;&#61;
      </Lead>

      {/* Projects cards */}
      <section id="projects-overview">
        <div className="row mt-5">

          {/* Card: Visualization of Hierarchies */}
          <div className="col-12 col-lg-5 mb-4">
            <ProjectCard
              projectTitle="Visualization of Hierarchies"
              description="Explore tree, graph, and sunburst visualizations of hierarchical data. Interactive charts help you understand nested relationships in public procurement forms."
              imgSrc="/my_projects/visualize/eForm-fields/my_charts/eForm-fields-project-image.png"
              href="/projects/visualize/hierarchies"
            />
          </div>

          {/* Card: XML Conversion */}
          {/* <div className="col-12 col-lg-5 mb-4">
            <ProjectCard
              projectTitle="XML Conversion"
              description="Automated conversion of XML to CSV format."
              imgSrc="/icons/xml-file-format.png"
              href="/projects/xml-to-csv-conversion"
            />
          </div> */}

          {/* Card: Statistical Report Automation*/}
          {/* <div className="col-12 col-lg-6 mb-4">
            <ProjectCard
              projectTitle="Statistical Report Automation"
              description="Developed automated pipelines for generating statistical reports from raw data, reducing manual effort and improving accuracy in recurring analytics tasks."
              imgSrc="/my_projects/statistical_report_automation/report_automation_image.png"
            />
          </div> */}

          {/* Card: Extract Data from Unstructured Text with RAG AI */}
          {/* <div className="col-12 col-lg-6 mb-4">
            <ProjectCard
              projectTitle="Extract Data from Unstructured Text with RAG AI"
              description="Leveraged Retrieval-Augmented Generation (RAG) AI models to extract structured insights from unstructured documents, enabling advanced search and analytics capabilities."
              imgSrc="/my_projects/rag_ai_extraction/rag_ai_extraction_image.png"
            />
          </div> */}

        </div>
      </section>
    </div>
  );
}
