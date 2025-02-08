import H1 from "./h1";

function PostDate({ date }: { date: string }) {
  return (
    <time
      className='text-light-emphasis fs-6'
      // style={{ fontSize: '0.75rem' }}
      >
      {date}
    </time>
  )
}

const PostHeader = ({ title, publishedDate }:
  { title: string, publishedDate: string }) => {
  return (
    <>
      <div className="row align-items-center pb-2">
        <div className="col-md *-10">
          <H1 extraClasses="mb-0">{title}&nbsp;</H1>
        </div>
        <div className="col-3">
          <PostDate date={publishedDate} />
        </div>
      </div>

      {/* <div className="row align-items-center pb-2">
        <div className="col-sm">
          <H1>
            {title}&nbsp;
            <PostDate date={publishedDate} />
          </H1>
        </div>
      </div> */}
    </>
  )
}

export default PostDate;
export { PostHeader };