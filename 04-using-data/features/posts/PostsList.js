import { useSelector } from "react-redux"
import { selectPosts } from "./postsSlice"
import './postsList.css'
import { Link } from "react-router-dom"
import { PostAuthor } from "./PostAuthor"
import { TimeAgo } from "./TimeAgo"
import { ReactionButtons } from "./ReactionButtons"

export const PostsList = () => {
  const posts = useSelector(selectPosts)
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">View Post</Link>
      <br />
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}