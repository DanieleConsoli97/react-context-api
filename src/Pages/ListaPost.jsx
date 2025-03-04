import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const ListaPost = () => {
    const [posts, setPosts] = useState([]);
    function fetchPost() {
        // fetch fa una chiamata al server tra partentesi  in questo caso al nostro server node
        fetch("http://localhost:3000/posts/")
            // la prima concatenazione gestisce la richiesta e ci da una risposta che convenzionalmente viene nominata
            // =>response.json converte la risposta in json
            .then((res) => res.json())
            //NOTE - diamo a setPosts il valore della response
            .then(setPosts)
            .catch((error) => {
                console.error("Errore:", error);
            });
    }
    useEffect(fetchPost, []);
    return (
        <>
            {posts.map((post) => {
                //NOTE - destructuring object
                const { id, title, image, tags, content } = post;
                return (
                    <NavLink to={`/post/${id}`}>
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
                    </NavLink>
                );
            })}
        </>
    );
};

export default ListaPost;
