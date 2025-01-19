import Image from 'next/image';
import Link from 'next/link';

export default function page() {

  return (<>
    <div className="d-grid p-2 p-sm-3 p-md-4 text-center text-sm-start">
      <div className="row justify-content-center fw-light fs-6">
        <div className="col-sm-11 col-md-10 col-xl-9">
          {/* INTRO */}
          <div className="row align-items-center pt-4">
            {/* Intro text */}
            <div className="col-sm-10 col-lg-9" >
              <h1
                className="fs-6 orange-55 fw-normal"
                style={{ letterSpacing: "0.1rem" }}>
                Data Visualization
              </h1>
              <p>
                <code className="fs-5 blue-green-45">
                  I enjoy creating visualizations to make data more understandable and potentially uncover complex relationships. I also use visualization tools to structure data in a way that provides a clear and systematic overview.
                </code>
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="row justify-content-center pt-4 ms-4*">
            <hr className='ms-5 me-5 pt-3' />
            <div className='card card-body pt-4'>
              <div className='row align-items-center'>
                {/* Image */}
                <div className="col-md text-center">
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
                <div className='col-md text-sm-center text-md-start pt-3'>
                  <h4>
                    <Link href='/projects/visualize/graphs' className="text-decoration-none blue-green-45">
                      Visualization of hierarchies
                    </Link>
                  </h4>
                  <i className='text-end'><code className='text-secondary'>Published 2025-01-19</code></i>
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