import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    Authorization: "563492ad6f917000010000017a66fa5c7ded40689b6042f1bcaba320"
  }
});
