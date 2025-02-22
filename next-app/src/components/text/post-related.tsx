
function PostDate({ date }: { date: string }) {
  return (
    <i className='fs-6 text-muted'>
      Published <time>{date}</time>
    </i>
  )
}

const PostHeader = ({ title, publishedDate }:
  { title: string, publishedDate: string }) => {
  return (
      <div className="row pb-2">
        <div className="col-sm">
          <h1 className="mb-0 fs-2">{title}&nbsp;</h1>
          <PostDate date={publishedDate} />
        </div>
      </div>
  )
}

export default PostDate;
export { PostHeader };