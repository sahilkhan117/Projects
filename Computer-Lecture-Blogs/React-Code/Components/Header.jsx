import { useContext } from "react";
import GetBlogData from "./UseContext.js";

import CLB_Logo from "./clb.png";
import { SetVal } from "./CardContainer.jsx";

export default function Header() {
	const blogData = useContext(GetBlogData);
	const uniqueAuthor = Array.from(
		new Set(blogData.map((blog) => blog.author))
	);

	const selectAuthor = (e) => {
		SetVal(e.target.value)
	}

	return (
		<nav className="flex p-1 pt-2 px-6 gap-8 text-lg items-center ps-4 max-lg:ps-2 max-lg:pe-2 bg-green-200 justify-between">
			<div>
				<img className=" h-16 max-lg:h-8" src={CLB_Logo} alt="img" onClick={()=> SetVal(false)}/>
			</div>
			<div className="flex gap-2   p-1 px-2 pe-1 rounded-xl max-lg:text-sm">
				<label className="font-semibold " htmlFor="" >Select: </label>
				<select className="flex gap-4 w-auto justify-center bg-teal-200 border rounded-lg " onChange={selectAuthor}>
					<option className="bg-gray-300" value="select"> Author</option>
					{uniqueAuthor.map((author, idx) => (
						<option key={idx} value={author}>
							{author}
						</option>
					))}
				</select>
			</div>
		</nav>
	);
}
