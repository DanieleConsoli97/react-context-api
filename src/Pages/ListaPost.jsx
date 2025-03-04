import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {useGlobalContext} from "../contexts/GlobalContext"
const ListaPost = () => {
    const {posts,fetchPost} = useGlobalContext()
    useEffect(() =>{
        fetchPost()
        console.log(posts)
    }, []);
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
