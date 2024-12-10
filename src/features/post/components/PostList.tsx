import List from "@/components/List";
import { usePosts } from "../contexts/PostProvider";
import Post from "./Post";

export default function PostList() {
  const { posts } = usePosts();
  if (!posts.length) {
    return <p>投稿がありません。</p>;
  }

  return (
    <List
      items={posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    />
  );
}
