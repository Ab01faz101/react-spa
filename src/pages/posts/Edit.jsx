import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';


function Edit() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const {id} = useParams();
    const notify = () => toast.success("post created successfully !", {
        position: "top-right",
    });


    useEffect(()=>{
        console.log(id);
    } , []);


    function store() {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                 title,
                 body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                notify();
            });

    }


    return (
        <>
            <ToastContainer />

            <h1 className="text-white text-2xl px-4 font-bold mt-5 underline">Create Post</h1>
            <div className="w-full max-w-xl mt-5 flex flex-col gap-y-3">
                <input onChange={(e) => setTitle(e.target.value)} className="w-full p-2 rounded border text-white border-white" placeholder="title" type="text" />
                <textarea onChange={(e) => setBody(e.target.value)} className="w-full p-2 rounded border text-white border-white" rows="5" placeholder="body"></textarea>
                <p className={`text-red-500  ${title || body ? "hidden" : ""}`}>title and body required</p>
            </div>

            <button onClick={store} disabled={!title || !body} className={`text-xl mt-4 px-4 py-1 rounded-md bg-blue-500 text-white ${!title || !body ? "cursor-no-drop opacity-50" : "cursor-pointer"
                }`}
            >
                submit
            </button>
        </>
    )
}


export default Edit;