type Post = {
	title: string;
	url: string;
	
	description: string;
	user: {
		name: string;
	};
};

async function fetchPost(id: string) {
	await new Promise((resolve) => setTimeout(resolve, 2000))
    const res = await fetch(`https://dev.to/api/articles/${id}`);
	return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
	
    const { id } = await params;
	const post: Post = await fetchPost(id);

	return (
		<div className="bg-white rounded-lg shadow p-6">
			<h1 className="text-2xl text-black font-bold mb-4">{post.title}</h1>
			<p className="text-gray-600 mb-4">{post.user.name}</p>
			<p className="text-gray-800">{post.description}</p>
			<a
				href={post.url}
				target="_blank"
				rel="noopener noreferrer"
				className="text-blue-600 underline mt-4 block"
			>
				Read full article on Dev.to
			</a>
		</div>
	);
}
