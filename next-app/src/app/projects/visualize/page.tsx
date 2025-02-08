import H1 from '@/components/text/h1';
import Lead from '@/components/text/lead';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (<>
    <div className="d-grid p-2 p-sm-3 p-md-4 text-start">
      <div className="row justify-content-center">
        <div className="col-11 col-md-10 col-xl-9">
          {/* INTRO */}
          <div className="row align-items-center pt-4">
            {/* Intro text */}
            <div className="col-sm-10 col-lg-9" >
              <H1>Data Visualization</H1>
              <Lead>I enjoy creating visualizations to make data more understandable and potentially uncover complex relationships. I also use visualization tools to structure data in a way that provides a clear and systematic overview.</Lead>
            </div>
          </div>

          {/* CONTENT */}
          <div className="row justify-content-center pt-4">
            <hr className='ms-5 me-5 pt-3' />
            <div className='pt-4'>
              <div className='row align-items-center'>
                {/* Image */}
                <div className="col-md">
                  <Image
                    className="img-fluid"
                    src="/projects/visualize/eForm-fields/charts/eForm-fields-project-image.png"
                    alt="Image of a graph diagram."
                    style={{ borderRadius: "5%" }}
                    width={300}
                    height={300}
                  />
                </div>
                {/* Text */}
                <div className='col-md pt-3'>
                  <h4>
                    <Link 
                      href='/projects/visualize/graphs' 
                      className="text-decoration-none text-secondary-emphasis">
                      Visualization of hierarchies
                    </Link>
                  </h4>
                  <i><code className='text-muted'>Published 2025-01-19</code></i>
                  <p className='fs-6 pt-4'>
                    To get an overview of the hierarchy and relations in complex data structures, we can use visualizations like tree- and graph-charts. In this noetebook I take a look at eForms&apos; XML structure by visualizing it as a graph and tree using D3Blocks, and as a sunburst chart using Plotly.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>)
}