import AddPostForm from "./components/AddPostForm";
import PostList from "./components/PostList";
import PostsContainer from "./components/PostsContainer";
import PostProvider from "./contexts/PostProvider";

export default function PostPage() {
  return (
    <div>
      <h1>Welcome to My Blog App</h1>
      <PostProvider>
        <PostsContainer>
          <AddPostForm />
          <PostList />
        </PostsContainer>
      </PostProvider>
    </div>
  );
}
