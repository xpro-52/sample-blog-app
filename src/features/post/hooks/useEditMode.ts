import { useState } from "react";

export default function useEditMode(initialTitle = "", initialContent = "") {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(initialTitle);
  const [tempContent, setTempContent] = useState(initialContent);

  const switchEditMode = () => setIsEditing((prev) => !prev);

  return {
    isEditing,
    tempTitle,
    setTempTitle,
    tempContent,
    setTempContent,
    switchEditMode,
  };
}
