import Image from "next/image";

export default function Home() {
  return (<>
    <div className="d-grid p-2 p-sm-3 p-md-4 text-center text-sm-start">
      <div className="row justify-content-center fw-light fs-5">
        <div className="col-sm-11 col-md-10 col-xl-9 border*">
          {/* INTRO */}
          <div className="row align-items-center pt-4">
            {/* Profile image top (on extra small screens) */}
            <div className="profile-img text-center d-block d-sm-none p-3">
              <Image
                className="mx-auto mb-3 mt-3"
                src="/img/e1.jpg"
                alt="Image of the website author."
                style={{ borderRadius: "50%", scale: "140%" }}
                width={90}
                height={90}
                priority
              />
            </div>
            {/* Intro text */}
            <div className="col-sm-9 col-lg-7" >
              <h1
                className="fs-6 fw-normal orange-55"
                style={{ letterSpacing: "0.1rem" }}>
                I&apos;m Elisabeth
              </h1>
              <p>
                <code className="fs-5 blue-green-45">
                  Yet another self-taught developer and data scientist,
                  with an M.D. degree and a yellow mountain bike
                </code>
              </p>
            </div>
            {/* Profile right (on sm-xl screens) */}
            <div className="profile-img col-sm-3 col-md-2 d-none d-sm-block pb-3*" >
              <Image
                className="d-sm-block mx-auto mb-3 mt-3"
                src="/img/e1.jpg"
                alt="Image of the website author."
                style={{ borderRadius: "50%", scale: "140%" }}
                width={100}
                height={100}
                priority
              />
            </div>
          </div>
          {/* BODY TEXT */}
          <div className="col-sm-9 pt-4 text-start">
            <p>
              After years of diving into anatomy and pathology I found myself drawn to the world of code and data, where I could use my logical and analytical abilities and love for problem solving to create something fun and (sometimes) useful.
            </p>
            <p>
              I am curious and like to explore and learn new tools and technologies. The last years I have dived into several programming languages, libraries, and frameworks, including Python, JavaScript, and React (Next.js). I have also worked with data science (extracting, cleaning, transforming and visualizing data), database development (PostgreSQL) and large language models (LlamaIndex and LangChain).
            </p>
          </div>

        </div>
      </div>
    </div>
  </>
  );
}
