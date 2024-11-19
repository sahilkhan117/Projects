import { useContext, useState } from "react";
import GetBlogData from "./UseContext.js";

import CLB_Logo from "./clb.png";
import { SetIsThisVisible, SetVal } from "./CardContainer.jsx";

export default function Header() {
	const blogData = useContext(GetBlogData);
	const uniqueAuthor = Array.from(
		new Set(blogData.map((blog) => blog.author))
	);

	const selectAuthor = (e) => {
		SetVal(e.target.value);
		SetIsThisVisible(false);
	};

	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		if (darkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	};

	return (
		<nav className="flex p-1 pt-2 px-6 gap-2 text-lg items-center ps-4 max-lg:ps-2 max-lg:pe-2 bg-blue-0 pb-4">
			<div>
				<img
					className="lg:ps-4 h-16 max-lg:h-8"
					src={CLB_Logo}
					alt="img"
					onClick={() => SetVal(false)}
				/>
			</div>
			<div className="flex gap-2 p-1 px-2 pe-1 rounded-xl max-lg:text-sm ms-auto">
				<label className="font-semibold " htmlFor="">
					Select:{" "}
				</label>
				<select
					className="flex gap-4 w-auto justify-center bg-teal-100 dark:bg-teal-950 border rounded-lg cursor-pointer font-serif font-thin"
					onChange={selectAuthor}>
					<option className="bg-gray-300" value="select">
						Author
					</option>
					{uniqueAuthor.map((author, idx) => (
						<option key={idx} value={author}>
							{author}
						</option>
					))}
				</select>
			</div>
			<div className="relative top-1">
				<label className="relative inline-block w-14 h-8">
					{/* Set input's checked state to reflect light/dark mode */}
					<input
						type="checkbox"
						className="peer hidden"
						onChange={toggleDarkMode}
						defaultChecked={false} // Start with unchecked, which means light mode
					/>
					<span
						className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#28096b] rounded-[30px] transition-all duration-500 
        peer-checked:bg-[#522ba7]"></span>

					{/* Light Mode Circle (Initially Visible) */}
					<span
						className="absolute left-[10%] top-[15%] h-6 w-6 bg-[#28096b] rounded-full transition-all duration-500 
        peer-checked:hidden"></span>

					{/* Dark Mode Moon Icon (Initially Hidden, Visible when checked) */}
					<span className="absolute left-[10%] top-[15%] text-white peer-checked:block hidden transition-all duration-500">
					</span>

					<span
						className="absolute h-6 w-6 bg-[#28096b] rounded-full left-[10%] bottom-[15%] shadow-[inset_8px_-4px_0px_0px_#fff000] transition-all duration-500 
        peer-checked:transform peer-checked:translate-x-full peer-checked:shadow-[inset_15px_-4px_0px_15px_#fff000]"></span>
				</label>
			</div>
		</nav>
	);
}
