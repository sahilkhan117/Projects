import { useState } from "react";
import CardContent from "./CardContent";

export default function Card({ blog, setIsThisVisible }) {
	const [isVisible, setIsVisible] = useState(false);

	const MoreContent = (e) => {
		// 	if (e.target.textContent == "Read More") {
		setIsThisVisible(e.target.parentElement.parentElement.id);
		// 		console.log(e.target.parentElement);
		// 		// e.target.parentElement.parentElement.className.add = "bg-black";

		// 		e.target.textContent = "Hide This";
		// 	} else {
		// 		setIsVisible(false);
		// 		e.target.textContent = "Read More";
		// 	}
	};

	return (
		<>
			<div
				id={blog.id}
				className="Card flex flex-col bg-white dark:bg-gray-950  dark:border dark:border-gray-600 dark:shadow-sm p-3 max-md:p-1 max-md:pb-2 rounded-xl items-stretch shadow-lg max-lg:w-[47%] max-md:w-full transition-all w-[31%] ms-2 content-stretch cursor-pointer md:hover:scale-95 max-md:me-2"
				onClick={MoreContent}
				>
				<div className="">
					<img
						className="rounded-xl shadow m-auto w-full"
						src={blog.coverImg}
						alt=""
					/>
				</div>
				<div className="px-2">

				<h4 className="mt-4 text-2xl font-semibold">{blog.title}</h4>

				<div className="flex text-sm justify-between gap-4 mb-3 items-center ">
					<span className="flex items-center ">
						by{" "}
						<span className="font-serif ps-1 pt-1">
							{blog.author}
						</span>
					</span>
					<span className="text-gray-600">{blog.date} </span>
				</div>
				<div className="flex mt-auto text-xs items-end w-full overflow-x-visible flex-wrap">
					<span className=" overflow-scroll flex gap-1">
						{blog.tags.map((tag, idx) => (
							<span
								className="p-0.5 px-1.5 pb-1 bg-teal-200 dark:bg-teal-900 rounded-full"
								key={idx}>
								{tag}
							</span>
						))}
					</span>
					<span className="ms-auto text-blue-400 dark:text-blue-700 dark:hover:text-blue-400 text-sm  w-fit" onClick={MoreContent}>
						Read More
					</span>
				</div>
				</div>
				{/* <CardContent
					content={blog.content}
					comments={blog.comments}
					isVisible={isVisible}
				/> */}
			</div>
		</>
	);
}
