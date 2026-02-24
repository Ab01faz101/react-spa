import { useEffect } from "react";
import { Link } from "react-router";


function All() {
    const {data : posts} = useGet("https://jsonplaceholder.typicode.com/posts")


    useEffect(() => {
        console.log(posts)
    } , []);
    



    function deletePost(id) {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
        });
        let updatePost = posts.filter((postItem) => postItem.id != id);
        setPosts(updatePost);
    }





    return (
        <>
            <Link to={"/posts/create"} className="text-xl px-4 py-1 rounded-md bg-blue-500 text-white">
                Create Post
            </Link>


            <h1 className="text-white text-2xl px-4 font-bold mt-5 underline">All Posts</h1>

            {posts && posts.map((post) => (
                <div
                    key={post.id}
                    id={"postId" + post.id}
                    className="bg-gray-800 mt-4 p-4 rounded-lg shadow">
                    <h2 className="text-lg text-gray-200 font-semibold">
                        <Link to={"/posts/" + post.id}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-200">
                        {post.body}
                    </p>

                    <div className="flex flex-row gap-2 mt-4">
                        <Link to={"/posts/edit/" + post.id} className="text-xl px-6 py-1 rounded-md bg-yellow-500 text-white">
                            Edit
                        </Link>

                        <button onClick={() => deletePost(post.id)} className="text-xl px-4 py-1 rounded-md bg-red-500 text-white">
                            Delete
                        </button>
                    </div>


                </div>
            ))}
        </>
    )
}
import useGet from "../../hooks/useGet";


export default All;