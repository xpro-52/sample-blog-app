import { useState } from "react";

function baseFormField<T, E extends HTMLElement>(
  initialValue: T
): [{ value: T; onChange: (e: React.ChangeEvent<E>) => void }, () => void] {
  const [value, setValue] = useState<T>(initialValue);

  return [
    {
      value,
      onChange: (e: React.ChangeEvent<E>) => {
        if ("value" in e.target) {
          setValue(e.target.value as T);
        } else {
          throw Error(`value property is not in targe of ${e}`);
        }
      },
    },
    () => setValue(initialValue),
  ];
}

export function useInput<T>(initialValue: T) {
  return baseFormField<T, HTMLInputElement>(initialValue);
}

export function useTextArea<T>(initialValue: T) {
  return baseFormField<T, HTMLTextAreaElement>(initialValue);
}
