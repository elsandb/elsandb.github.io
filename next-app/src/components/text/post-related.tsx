
function PostDate({ date }: { date: string }) {
  return (
    <time className='text-light-emphasis fs-6'>
      {date}
    </time>
  )
}

const PostHeader = ({ title, publishedDate }:
  { title: string, publishedDate: string }) => {
  return (
    <>
      {/* <div className="row align-items-center pb-2">
        <div className="col-md *-10">
          <h1 className="mb-0 fs-2">{title}&nbsp;</h1>
        </div>
        <div className="col-3">
          <PostDate date={publishedDate} />
        </div>
      </div> */}

      <div className="row pb-2">
        <div className="col-sm">
          <h1 className="mb-0 fs-2">{title}&nbsp;</h1>
          <i>Published <PostDate date={publishedDate} /></i>
        </div>
      </div>
    </>
  )
}

export default PostDate;
export { PostHeader };