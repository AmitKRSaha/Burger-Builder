import axios from 'axios'

const axinstance = axios.create({
    baseURL: "https://burger-builder-36b68.firebaseio.com/"
});

export default axinstance;