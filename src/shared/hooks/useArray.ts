import { useCallback, useState } from "react";

export const useArray = <T>(initialValue: Array<T> = []) => {
  const [value, setValue] = useState(initialValue);

  const set = useCallback(
    (newValue: Array<T>) => {
      setValue(newValue);
    },
    [setValue]
  );

  const push = useCallback(
    (item: T) => {
      setValue((value) => [...value, item]);
    },
    [setValue]
  );

  const pop = useCallback(() => {
    setValue((value) => value.slice(-1));
  }, [setValue]);

  return {
    array: value,
    set,
    push,
    pop,
  };
};
