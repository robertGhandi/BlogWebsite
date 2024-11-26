/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link"

async function fetchPosts() {
	const res = await fetch("https://dev.to/api/articles");
	return res.json();
}

export default async function Home() {
	const posts = await fetchPosts();

	return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post: any) => (
                <Link key={post.id} href={`/post/${post.id}`} className="border rounded-lg p-4 bg-white shadow">
                    <h2 className="text-xl text-black font-bold">
                        {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        By {post.user.name}
                    </p>
                </Link>
            ))}
        </div>
    )
}
