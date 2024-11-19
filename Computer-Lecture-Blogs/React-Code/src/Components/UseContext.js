import { createContext } from "react";
import BlogDataJson from "./../blog.json";

const blogData = createContext(
	BlogDataJson.blog.map((BlogObj) => {
        let [y, m, d] = BlogObj.date.trim().split("-")
		return {
			...BlogObj,
			date: [d, m, y].join("/"),
		};
	})
);

export default blogData;
