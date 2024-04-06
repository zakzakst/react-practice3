// なんか上手くいってなさそう
import { useState, useRef } from "react";

const useCheckRefHeight = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  // const isInitialized = useRef(false);

  const updateNode = (node: HTMLDivElement | null) => {
    console.log("updateNode");
    if (node && node.clientHeight > 0) {
      console.log(node.clientHeight);
      // isInitialized.current = true;
      setIsInitialized(true);
    }
  };

  return {
    isInitialized,
    updateNode,
  };
};

export default useCheckRefHeight;
