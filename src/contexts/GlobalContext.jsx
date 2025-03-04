import {createContext,useContext,useState } from "react";


const GlobalContext = createContext();

const GlobalProvider =({children})=>{

const [posts, setPosts] = useState([]);
const [SingPosts, SingSetPosts] = useState({}); 
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

    
    function SinglePost(id) {
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
    const value ={
    posts,
    SingPosts,
    fetchPost,
    SinglePost
}
return(<GlobalContext.Provider value={value}>
                {children}
        </GlobalContext.Provider>
)
}
const useGlobalContext = () => useContext(GlobalContext)

export default {GlobalProvider,useGlobalContext}