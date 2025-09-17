
function PostDate({ date }: { date: string }) {
  return (
    <i className='text-muted'>
      Published <time>{date}</time>
    </i>
  )
}

const PostHeader = ({ title, publishedDate }:
  { title: string, publishedDate?: string }) => {
  return (
    <div className="row pb-2">
      <div className="col-sm">
        <h1 className="display-4">{title}&nbsp;</h1>
        {publishedDate &&
          <PostDate date={publishedDate} />
        }
      </div>
    </div>
  )
}

export { PostDate, PostHeader };