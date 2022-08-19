import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styled from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button
      type="button"
      className={styled.signInButton}
    >
      <FaGithub color="#04D361" />
      Gustavo Alves
      <FiX color="#737380" className={styled.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styled.signInButton}
    >
      <FaGithub color="#EBA417" />
      Sign in with Gituhb
    </button>
  );
}