import Image from "next/image";

import { SignInButton } from "./SignInButton";
import styled from "./styles.module.scss";

export function Header() {
  return (
    <header className={styled.headerContainer}>
      <div className={styled.headerContent}>
        <Image 
          src="/images/logo.svg"
          alt="ig.news"
          width={100}
          height={100}
        />
        <nav>
          <a className={styled.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}