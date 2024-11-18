import { createContext } from "react";
import BlogDataJson from "./../blog.json"

const blogData = createContext(BlogDataJson.blog)

export default blogData