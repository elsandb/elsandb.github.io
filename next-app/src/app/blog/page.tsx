import Image from "next/image";

// Blogg
export default function BlogPosts() {
  return (
    <div className="d-grid p-2 p-sm-3 p-md-4 text-center text-sm-start">
      <div className="row justify-content-center fw-light fs-5">
        <div className="col-sm-11 col-md-10 col-lg-9 col-xl-7">

          <h1>Blog</h1>
          <p className="lead">Here I will put my blog posts... If I have any at some point in the future...</p>
          
          {/* Create a bootstrap card for each post */}
          <div className="card card-body">
            Post 1: Lorem ipsum
            <Image src="/vercel.svg" alt="Vercel logo" width={72} height={16} />
          </div>

        </div>
      </div>
    </div>
  );
}