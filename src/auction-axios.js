import axios from "axios";

const instance=axios.create(
    {
        baseURL:"https://web-auction-4000c-default-rtdb.firebaseio.com/"
    }
)
export default instance;