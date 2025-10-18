import Link from "next/link";

const ProjectCard = (
  { projectTitle, description, imgSrc, href }: 
  { projectTitle: string, description: string, imgSrc: string, href?: string }
) => {
  return (
    <div className="card mb-4 h-100 shadow-sm">
      <div className="row g-0 align-items-center">
        <div className="col-md-auto p-3">
          <img
            src={imgSrc}
            alt={projectTitle + ' image'}
            className="img-fluid rounded-start"
            style={{ borderRadius: "5%" , objectFit: 'cover'}}
            width={200}
            height={200}
          />
        </div>
        <div className="col-md-auto">
          <div className="card-body">
            <h5 className="card-title">{projectTitle}</h5>
            <p className="card-text">{description}</p>
            {href && (
              <Link href={href} className="btn btn-success" >
                Read More
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProjectCard };

