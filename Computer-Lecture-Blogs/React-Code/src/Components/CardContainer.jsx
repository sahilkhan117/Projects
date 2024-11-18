import Card from "./Card";
import { useContext, useState } from "react";
import GetBlogData from "./UseContext.js";
import clb from "./clb.png"; //

let SetVal;

export default function CardContainer() {
	const blogData = useContext(GetBlogData);
	const [cardVal, setCardVel] = useState();

	SetVal = setCardVel;

	if (!cardVal)
		return (
			<>
				<div className="h-full max-lg:mt-40 w-full max-lg:w-screen  flex justify-center items-center flex-col pe-10 max-lg:pe-0 ">
					<img className="h-44 max-lg:h-16 " src={clb} alt="" />
					<h1 className="mt-4 text-4xl max-lg:text-3xl font-bold">Welcome to My Blogs</h1>
					<p className="mb-20 max-lg:mb-0 ">The <span className="text-yellow-500 font-semibold">Goldmine</span> of <span className="text-green-500 font-semibold max-lg:text-sm">Programming Concepts</span> & <span className="text-blue-500 font-semibold">Community</span></p>
				</div>
			</>
		);

	return (
		<>
			<div className="grid grid-cols-2 max-lg:grid-cols-1 pe-4 gap-4 pt-3 max-lg:ps-2 max-lg:ms-2 items-start justify-center">
				{blogData
					.filter(
						(bgdata) =>
							bgdata.category == cardVal ||
							bgdata.author == cardVal
					)
					.map((blog) => (
						<Card key={blog.id} blog={blog} />
					))}
			</div>
		</>
	);
}

export { SetVal };
