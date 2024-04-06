// なんか上手くいってなさそう
import { useState } from "react";

const useRefCallBack = <T>() => {
  const [node, setNode] = useState<T | null>(null);

  const updateNode = (newNode: T | null) => {
    console.log(node, newNode);
    if (node !== newNode) {
      setNode(newNode);
    }
  };

  return {
    node,
    updateNode,
  };
};

export default useRefCallBack;
