import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const SinglePost = () => {
    const { id } = useParams()
    const [SingPosts, SingSetPosts] = useState({});
    function fetchPost() {
        // fetch fa una chiamata al server tra partentesi  in questo caso al nostro server node
        fetch(`http://localhost:3000/posts/${id}`)
            // la prima concatenazione gestisce la richiesta e ci da una risposta che convenzionalmente viene nominata
            // =>response.json converte la risposta in json
            .then((res) => res.json())
            //NOTE - diamo a setPosts il valore della response
            .then(SingSetPosts)
            .catch((error) => {
                console.error("Errore:", error);
            });
    }
    useEffect(fetchPost, [])
    const { title, image, content, tags } = SingPosts
    return (
        <>
            <ul key={id}>
                <li>
                    <h1>{title}</h1>
                </li>
                <li>
                    <img
                        className="table_image"
                        src={`http://localhost:3000/public${image}`}
                        alt=""
                    />
                </li>
                <li>
                    <p>{content}</p>
                </li>
                <li>
                    <p>{tags}</p>
                </li>
            </ul>
        </>
    )
}
export default SinglePost