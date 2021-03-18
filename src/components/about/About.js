import React from "react";

import * as S from "./About.styles";

export const About = () => {
  return (
    <S.AboutContainer>
      <S.Link href="/" target="_blank">
        Made by Artak Harutyunyan
      </S.Link>
      <br></br>
      <S.Link
        href="https://github.com/artakharutyunyan/music-player"
        target="_blank"
      >
        Github repository
      </S.Link>
    </S.AboutContainer>
  );
};
