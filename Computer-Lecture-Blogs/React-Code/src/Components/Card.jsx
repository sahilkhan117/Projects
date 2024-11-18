import { useState } from "react";
import CardContent from "./CardContent";

export default function Card({ blog }) {
	const [isVisible, setIsVisible] = useState(false);

	const MoreContent = (e) => {
		if (e.target.textContent == "Read More") {
			setIsVisible(true);
			e.target.textContent = "Hide This";
		} else {
			setIsVisible(false);
			e.target.textContent = "Read More";
		}
	};

	return (
		<>
			<div
				id="Card"
				className="Card flex flex-col bg-white p-2 pb-3 px-3 rounded-lg items-stretch border shadow-lg  hover:bg-gray-50  transition-all mt-20">
				<div className="max-h-20 w-full ">
					<img
						className=" shadow-lg w-80 rounded-xl relative -top-20 mx-auto"
						src={blog.coverImg}
						alt=""
					/>
				</div>
				<h4 className="mt-10 text-2xl font-semibold">{blog.title}</h4>

				<div className="flex text-sm justify-between gap-4 mb-3 items-center ">
					<span className="flex items-center">
						by {blog.author}
					</span>
					<span className="text-gray-600">{blog.date} </span>
				</div>
				<span className="flex gap-1 mt-auto text-xs items-end w-full">
					{blog.tags.map((tag, idx) => (
						<span
							className="p-0.5 px-1.5 pb-1 bg-teal-200 rounded-full "
							key={idx}>
							{tag}
						</span>
					))}
					<span
						className="ms-auto text-blue-400 text-sm"
						onClick={MoreContent}>
						Read More
					</span>
				</span>
				<CardContent
					content={blog.content}
					comments={blog.comments}
					isVisible={isVisible}
				/>
			</div>
		</>
	);
}
