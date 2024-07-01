import { VNode } from "preact";
import { useEffect, useState } from 'preact/hooks';

interface Props {
  children: VNode[]
};

export function TextsAlternatingAnimation({ children }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [children]);

  return children[currentIndex];
};

export default TextsAlternatingAnimation;