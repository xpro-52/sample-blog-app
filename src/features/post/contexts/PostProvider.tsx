import type { Post } from "@/types/types";
import React, { createContext, useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import postData from "@/data/post-data.json";
import { currDatetime } from "@/lib/dateUtils";

interface PostContextType {
  posts: Post[];
  addPost: (title: string, content: string) => void;
  editPost: (id: string, title: string, content: string) => void;
  removePost: (id: string) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
};

interface PostProviderProps {
  children: React.ReactNode;
}

export default function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>(postData);

  const addPost = (title: string, content: string) => {
    setPosts([
      ...posts,
      {
        id: uuidV4(),
        title,
        content,
        datetime: currDatetime(),
      },
    ]);
  };

  const editPost = (id: string, title: string, content: string) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, title, content, datetime: currDatetime() }
          : post
      )
    );
  };

  const removePost = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts, addPost, editPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
}
