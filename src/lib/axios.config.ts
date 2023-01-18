import axios from "axios";

// have to use an enviroment variable for your ip address instead of localhost bc imgur doesn't like localhost
export default axios.create({
    baseURL: "http://192.168.1.6:8080"
})

