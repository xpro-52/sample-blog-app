import type { Post } from "@/types/types";
import { usePosts } from "../contexts/PostProvider";
import Button from "@/components/Button";
import useEditMode from "../hooks/useEditMode";

export default function Post({ id, title, content, datetime }: Post) {
  const { editPost, removePost } = usePosts();

  const {
    isEditing,
    tempTitle,
    setTempTitle,
    tempContent,
    setTempContent,
    switchEditMode,
  } = useEditMode(title, content);

  const handleSave = () => {
    editPost(id, tempTitle, tempContent);
    switchEditMode();
  };

  return (
    <section>
      {isEditing ? (
        <>
          <div>
            <input
              type="text"
              value={tempTitle}
              onChange={(e) => setTempTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              value={tempContent}
              onChange={(e) => setTempContent(e.target.value)}
            />
          </div>
          <Button
            onClick={() => {
              setTempTitle(title);
              setTempContent(content);
              switchEditMode();
            }}
          >
            Back
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{content}</p>
          <Button onClick={() => removePost(id)}>X</Button>
          <Button onClick={switchEditMode}>Edit</Button>
        </>
      )}
      <small>{datetime}</small>
    </section>
  );
}
