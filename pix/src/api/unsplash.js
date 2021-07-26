import axios from "axios"

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID iY-rexw_XiE5jnJfhkvoegrb5anpWwY6BVjxTgmxL_0",
  },
})
