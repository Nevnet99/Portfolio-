import Link from "next/link";
import { useEffect, useState } from "react";
import { Buttons, Logo, Wrapper } from "./Navigation.styled";

const Navigation = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // get current scroll position
      const scrollPosition = window.scrollY;
      if (scrollPosition) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });
  }, []);

  return (
    <Wrapper hasScrolled={hasScrolled}>
      <Logo>LB</Logo>
      <Buttons>
        <a>Featured Work</a>
        <Link href="/blog">Blog</Link>
        <a>Contact</a>
      </Buttons>
    </Wrapper>
  );
};

export default Navigation;
