interface PostsContainerProps {
  children: React.ReactNode;
}

export default function PostsContainer({ children }: PostsContainerProps) {
  return <div>{children}</div>;
}
