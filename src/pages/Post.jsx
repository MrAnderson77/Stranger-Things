import {useState,useEffect} from 'react'
import {fetchPosts} from "../API";

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const posts = await fetchPosts();
            setPosts(posts);
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {
                posts.map(post => (
                    <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    <p>Created by: {post.author.username}</p>
                    <p>Location: {post.location}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Post;