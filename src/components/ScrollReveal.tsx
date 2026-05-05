import { useEffect, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            window.setTimeout(() => {
              target.classList.add("is-visible");
            }, delay);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Element = Tag as any;
  return (
    <Element ref={ref} className={`reveal ${className}`}>
      {children}
    </Element>
  );
}
