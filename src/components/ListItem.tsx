type ListItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function ListItem({ children, onClick }: ListItemProps) {
  return <li onClick={onClick}>{children}</li>;
}

ListItem.displayName = "ListItem";
