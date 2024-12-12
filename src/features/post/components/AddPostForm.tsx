import { useInput, useTextArea } from "@/hooks/useFormField";
import { usePosts } from "../contexts/PostProvider";
import Button from "@/components/Button";

export default function AddPostForm() {
  const [titleProps, resetTitle] = useInput("");
  const [contentProps, resetContent] = useTextArea("");

  const { addPost } = usePosts();

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addPost(titleProps.value, contentProps.value);
    resetTitle();
    resetContent();
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" {...titleProps} required />
        <textarea {...contentProps} />
        <Button type="submit">投稿する</Button>
      </form>
    </div>
  );
}
