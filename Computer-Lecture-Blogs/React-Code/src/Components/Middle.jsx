import { useContext } from "react";
import GetBlogData from "./UseContext.js";
import CardContainer, { SetVal } from "./CardContainer.jsx";
import { SetIsThisVisible } from "./CardContainer.jsx"; 


export default function Main() {
	const blogData = useContext(GetBlogData);
	const uniqueCategory = Array.from(
		new Set(blogData.map((blog) => blog.category))
	);

	let prev;
	const Selectcategory = (e) => {
		SetVal(e.target.textContent)
		SetIsThisVisible(false)
		// if(prev) prev.style.backgroundColor = "rgb(125, 211, 252)"
		prev = e.target
		// prev.style.backgroundColor = "rgb(255, 160, 160)"
	}

	return (
		<>
			<div id="middle" className="pb-4 flex  max-xl:block gap-2 h-fit">
				<div className=" rounded-e-3xl max-xl:rounded-none bg-sky-200 dark:bg-sky-950 dark:max-xl:bg-transparent max-xl:bg-transparent py-2">
					<ol className="flex flex-col max-xl:flex-row w-48 max-xl:w-full max-xl:overflow-scroll max-xl:px-1">
						{uniqueCategory.map((cat, idx) => (
							<li
								key={idx}
								className="text-lg max-xl:text-sm max-xl max-lg:text-sm p-2 px-4 font-semibold rounded-e-full max-xl:rounded-full  lg:overflow-hidden max-xl:bg-sky-200 dark:bg-sky-950 hover:bg-rose-300 dark:hover:bg-rose-900 me-2 min-w-fit cursor-pointer "
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
