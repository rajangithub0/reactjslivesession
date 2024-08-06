import { useState } from "react";

function Comments({ postId }) {
    const [comments, setComments] = useState([])
    const fetchData = async () => {
        try {

            const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            const json = await resp.json();
            console.log(json);
            setComments(json)
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="row">
            <button onClick={fetchData}>load comments</button>
            {
                comments.map(comment => (
                    <div key={comment.id} className="col-12 my-2 p-2">
                        <h4>@{comment.email}</h4>
                        <p>massage{comment.body}</p>
                    </div>
                ))
            }

        </div>
    );
}

export default Comments;