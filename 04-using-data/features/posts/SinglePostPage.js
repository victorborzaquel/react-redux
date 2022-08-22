import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { PostAuthor } from "./PostAuthor"
import { selectPost } from "./postsSlice"
import { ReactionButtons } from "./ReactionButtons"

export const SinglePostPage = () => {
  const { postId } = useParams()
  const post = useSelector(selectPost(postId))

  if (!post) return <PostNotFound />

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">Edit Post</Link>
        <br />
        <PostAuthor userId={post.user} />
      </article>
    </section>
  )
}

const PostNotFound = () => {
  return (
    <section>
      <h2>Post not found!</h2>
    </section>
  )
}