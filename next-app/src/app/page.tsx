import H1 from "@/components/text/h1";
import Lead from "@/components/text/lead";
import Image from "next/image";

const AuthorImage = ({img_src, className}: {img_src: string, className: string}) => {
  return (
    <Image
      className={className}
      src={img_src}
      alt="Image of the website author."
      style={{ borderRadius: "50%", scale: "140%" }}
      width={90}
      height={90}
      priority
    />
  );
}

export default function Home() {
  return (<>
    <div className="d-grid p-2 p-sm-3 p-md-4 ">
      <div className="row justify-content-center fw-light fs-5">
        <div className="col-sm-11 col-md-10 col-xl-9 border*">
          {/* INTRO */}
          <div className="row align-items-center pt-4">
            {/* Profile image top (on extra small screens) */}
            <div className="profile-img text-center d-block d-sm-none p-3">
              <AuthorImage img_src="/img/e1.jpg" className="mx-auto mb-3 mt-3" />
            </div>
            {/* Intro text */}
            <div className="col-sm-9 col-lg-7 text-center text-sm-start" >
              <H1>I&apos;m Elisabeth</H1>
              <Lead>Yet another self-taught developer and data scientist, with an M.D. degree and a yellow mountain bike</Lead>
            </div>
            {/* Profile right (on sm-xl screens) */}
            <div className="profile-img col-sm-3 col-md-2 d-none d-sm-block pb-3*" >
              <AuthorImage img_src="/img/e1.jpg" className="d-sm-block mx-auto mb-3 mt-3"/>
            </div>
          </div>
          {/* BODY TEXT */}
          <div className="col-sm-9 pt-4 text-start fs-6">
            <p>
              After years of diving into anatomy and pathology I was drawn to the world of code and data, where I could use my love for problem solving to create something fun and (sometimes) useful.
            </p>
            <p>
              I am curious and enjoy exploring new tools and technologies. Over the past few years, I&apos;ve learned several programming languages and worked with various libraries and frameworks. I&apos;ve greatly benefited from studying other people&apos;s projects, and now I want to give back by sharing some of my own projects here.
            </p>
            <p>
              This site is built with Next.js and Bootstrap 5.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
