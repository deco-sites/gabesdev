import { useEffect, useRef } from "preact/hooks";
import gsap, { TextPlugin } from "gsap";

gsap.registerPlugin(TextPlugin);

type Props = {
  text: string;
  restart?: boolean;
  className?: string;
};

export function TextTypingAnimation({
  text,
  restart = true,
  className,
}: Props) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (restart) {
      gsap.to(elementRef.current, {
        speed: 0.5,
        text: text,
        ease: "power1.out",
        oldClass: "opacity-0",
        newClass: "opacity-1",
      });
    }
  }, [text, restart]);

  return <span ref={elementRef} class={className} />;
}

export default TextTypingAnimation;
