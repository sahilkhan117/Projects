import { useContext } from "react";
import GetBlogData from "./UseContext.js";
import CardContainer, { SetVal } from "./CardContainer.jsx";


export default function Main() {
	const blogData = useContext(GetBlogData);
	const uniqueCategory = Array.from(
		new Set(blogData.map((blog) => blog.category))
	);

	let prev;
	const Selectcategory = (e) => {
		SetVal(e.target.textContent)
		if(prev) prev.style.backgroundColor = "rgb(125, 211, 252)"
		prev = e.target
		prev.style.backgroundColor = "rgb(255, 160, 160)"
	}

	return (
		<>
			<div id="middle" className="pb-4 flex  max-lg:block gap-4 h-fit">
				<div className=" rounded-ee-xl max-lg:rounded-none bg-sky-300 max-lg:bg-transparent py-2">
					<ol className="flex flex-col max-lg:flex-row w-48 max-lg:w-full max-lg:overflow-scroll max-lg:px-1">
						{uniqueCategory.map((cat, idx) => (
							<li
								key={idx}
								className="text-lg max-lg:text-sm p-2 px-4 font-semibold rounded-e-full max-lg:rounded-full  lg:overflow-hidden max-lg:bg-sky-300 hover:bg-rose-300 me-1 min-w-fit"
								onClick={Selectcategory}>
								{cat}
							</li>
						))}
					</ol>
				</div>

				<div className="flex items-start w-full">
					<CardContainer />
				</div>
			</div>
		</>
	);
}
