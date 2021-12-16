import Axios from 'axios';

export default Axios.create({
    baseURL: "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1"
})