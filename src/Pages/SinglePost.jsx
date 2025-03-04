import { useParams } from "react-router-dom"
import { useEffect } from "react";
import {useGlobalContext} from "../contexts/GlobalContext"
const SinglePost = () => {
    const { id } = useParams()
    const {SinglePost,SingPosts} = useGlobalContext ()
    
    useEffect(SinglePost (id), [])
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