export default function Eachcard({ currrentObj, setIsThisVisible }) {
	return (
		<>
			<div className="w-full bg-gray-50 dark:bg-gray-950 m-4 max-md:m-0 p-4 max-md:px-1  rounded-lg">
				<button
					className="border-gray-500 border-2 rounded-full p-1 px-3 pt-0.5 bg-gray-100 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-gray-600 flex"
					onClick={() => setIsThisVisible(false)}>
						<img className="h-6 pr-2 dark:text-white" src="./src/components/back-arrow.svg" alt="" />
					Back
				</button>
				<div className="w-full flex flex-col ">
					<img
						className="rounded-lg m-auto w-1/2 max-lg:w-3/4 my-4 shadow-lg"
						src={currrentObj.coverImg}
					/>
					<h2 className="font-bold m-auto text-4xl max-lg:text-2xl max-md:text-xl  my-4">
						{currrentObj.title}
					</h2>
					<div className=" flex justify-center text-lg max-md:text-sm font-serif font-extraligh">
						{/* <span>{currrentObj.date}</span> */}
						<span>{currrentObj.author}</span>
					</div>
					<p className=" text-xl px-16 max-lg:px-8 max-md:px-4 max-md:text-sm pt-10 pb-4">
						{currrentObj.content}
					</p>
					<div className="px-16 max-lg:px-8 max-md:text-sm max-md:px-4">

						{currrentObj.tags.map((tag, idx) => (
							<span
							className="p-1 px-2 pb-1.5 bg-teal-200 dark:bg-teal-900 rounded-full me-2 w-fit"
							key={idx}>
								{tag}
							</span>
						))}
						
					</div>
				</div>
			</div>
		</>
	);
}
