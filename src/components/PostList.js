import { useSelector } from "react-redux"
import Post from "./Post";


const PostList = () => {
    const posts = useSelector(state=>state.posts)
    console.log(posts);
    return (
        <div className="post-list">
            {posts.map(post=>(
               <Post key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default PostList