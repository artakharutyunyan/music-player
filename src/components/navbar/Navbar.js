import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import * as S from "./Navbar.styles";

export const Navbar = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <S.NavContainer>
      <S.Header libraryStatus={libraryStatus}>Vibes</S.Header>
      <S.Button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </S.Button>
    </S.NavContainer>
  );
};
