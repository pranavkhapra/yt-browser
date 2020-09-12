import axios from 'axios'

const KEY='AIzaSyDHzFaxaDUMs49re5LtNePr6gLmA1VgGpc';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
})