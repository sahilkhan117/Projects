import Card from "./Card";
import { useContext, useState } from "react";
import GetBlogData from "./UseContext.js";
import clb from "./clb.png"; //
import Eachcard from "./EachCard.jsx";

let SetVal;
let SetIsThisVisible;

export default function CardContainer() {
	const blogData = useContext(GetBlogData);

	const [cardVal, setCardVel] = useState();
	SetVal = setCardVel;

	const [isThisVisibleID, setIsThisVisible] = useState(false);
	SetIsThisVisible = setIsThisVisible

	if (!cardVal) {
		return (
			<>
				<div className="h-full max-xl:mt-20 max-lg:mt-40 w-full max-lg:w-screen  flex justify-center items-center flex-col pe-10 max-lg:pe-0 ">
					<img className="h-44 max-lg:h-16 " src={clb} alt="" />
					<h1 className="mt-4 text-4xl max-lg:text-3xl font-bold">
						Welcome to My Blogs
					</h1>
					<p className="mb-20 max-xl:mb-0 ">
						The{" "}
						<span className="text-yellow-500 font-semibold">
							Goldmine
						</span>{" "}
						of{" "}
						<span className="text-green-500 font-semibold max-lg:text-sm">
							Programming Concepts
						</span>{" "}
						&{" "}
						<span className="text-blue-500 font-semibold">
							Community
						</span>
					</p>
				</div>
			</>
		);
	} else if (isThisVisibleID) {
		// console.log("enter");

		const currrentObj = blogData.filter(b => b.id == isThisVisibleID)[0]
		console.log(currrentObj);
		
		return (
			<>
				<Eachcard currrentObj={currrentObj} setIsThisVisible={setIsThisVisible}/>
			</>
		);
	} else {
		// console.log("all");
		return (
			<>
				<div className="flex flex-wrap max-lg:grid-cols-1 pe-2 pt-3 max-lg:ps-2 max-lg:ms-2 gap-2 justify-start w-full items-stretch">
					{blogData
						.filter(
							(bgdata) =>
								bgdata.category == cardVal ||
								bgdata.author == cardVal
						)
						.map((blog) => (
							<Card
								key={blog.id}
								blog={blog}
								setIsThisVisible={setIsThisVisible}
							/>
						))}
				</div>
			</>
		);
	}
}

export { SetVal, SetIsThisVisible };
