"use client";

import ListItem from "./ListItem";

type ListProps = {
  items: React.ReactNode[];
  onItemClick?: (index: number) => void;
};

export default function List({ items, onItemClick }: ListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem
          key={index}
          children={item}
          onClick={onItemClick ? () => onItemClick(index) : undefined}
        />
      ))}
    </ul>
  );
}
