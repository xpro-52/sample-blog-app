import useModal from "@/hooks/useModal";
import AddPostForm from "./components/AddPostForm";
import PostList from "./components/PostList";
import PostsContainer from "./components/PostsContainer";
import PostProvider from "./contexts/PostProvider";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

export default function PostPage() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <h1>Welcome to My Blog App</h1>
      <PostProvider>
        <PostsContainer>
          <Button onClick={openModal}>+</Button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <AddPostForm />
          </Modal>
          <PostList />
        </PostsContainer>
      </PostProvider>
    </div>
  );
}
