"use client"

import { ComponentChildren } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import gsap, { ScrollTrigger } from 'gsap';

import { getPageScroller } from "site/helpers/gsap.ts";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ComponentChildren;
  className?: string;
  verticalMovement?: boolean;
  whenEnterInView?: boolean;
  horizontalSwipe?: false | 'toLeft' | 'toRight';
}

export function ShowContentAnimation({
  children,
  className,
  verticalMovement = false,
  whenEnterInView = false,
  horizontalSwipe = false,
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const horizontalSwipeDistance = 40 * (horizontalSwipe === 'toLeft' ? 1 : -1)

    gsap.fromTo(contentRef.current,
      {
        opacity: 0,
        y: verticalMovement ? 20 : 0,
        x: horizontalSwipe ? horizontalSwipeDistance : undefined
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: horizontalSwipe ? 0.6 : 0.7,
        scrollTrigger: whenEnterInView ? {
          trigger: contentRef.current,
          scroller: getPageScroller(),
          start: `top ${horizontalSwipe ? '90' : '75'}%`,
          end: "bottom top",
          toggleActions: "play none none none",
          pinType: 'transform'
        } : undefined
      }
    );
  }, [horizontalSwipe, verticalMovement, whenEnterInView]);

  return (
    <div ref={contentRef} style={{ opacity: 0 }} className={className}>
      {children}
    </div>
  );
}

export default ShowContentAnimation;