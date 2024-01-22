import Link from "next/link";
export default function PostsPage() {
  return (
    <>
      <div>
        <h2>Posts</h2>
        <div className="posts-list">
          <Link href="/posts/1">Post 1</Link>
          <Link href="/posts/2">Post 2</Link>
          <Link href="/posts/3">Post 3</Link>
        </div>
      </div>
    </>
  );
}
//links to page.js in [id] folder with that id
