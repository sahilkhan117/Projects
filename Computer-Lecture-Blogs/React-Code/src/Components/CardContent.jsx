export default function CardContent({ content, comments, isVisible }) {
	if (isVisible) {
		return (
			<>
				<div
					id="blog-content"
					className="mt-4 transition-all rounded-lg bg-gray-50 p-2">
					<p>{content}</p>
					<CardComments comments={comments} />
				</div>
			</>
		);
	} else {
		return <></>;
	}
}

function CardComments({ comments }) {
	if (comments.length > 0) {
		return (
			<>
				<div className="mt-1 bg-gray-100  rounded-lg p-2 pt-1">
					<h5 className=" font-semibold text-gray-800 ">Comments:</h5>
					{comments.map((comment, idx) => (
						<div
							className="mt-1.5 p-2 pt-0.5 bg-gray-200 rounded-lg"
							key={idx}>
							<div className="">
                                <div className="flex">
								<h4 className="font-semibold text-gray-700">{comment.author}</h4><span className="ms-auto text-xs text-gray-500">{comment.date}</span>
                                </div>
                                <p className="text-xs text-gray-600">{comment.content}</p>
							</div>
						</div>
					))}
				</div>
			</>
		);
	} else {
		return <></>;
	}
}
