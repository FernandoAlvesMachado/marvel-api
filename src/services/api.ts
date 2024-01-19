import axios from "axios";
import md5 from "md5";


// const baseURL = 'http://gateway.marvel.com/v1/public/characters?'
const publicKey = 'c4b52d72b905d050ebf53ad0d3002bcf'
const privateKey = 'af78dc372f3c6b6e622cd820553856ac68d92fe9'

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        
    }
})