import React, { useEffect } from "react";
import api from "../../services/api.ts";


const Characters: React.FC = () => {
    // useEffect(() => {
    //     axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`,
    //     )
    //     .then(response => console.log(response.data.data))
    //     .catch(err => console.log(err))
    //   }, [])

    useEffect(() => {
        api.get('/characters').then(response => console.log(response.data.data)).catch(err => console.log(err))
    }, [])
    return <h1>Characters 01</h1>;
};

export default Characters;