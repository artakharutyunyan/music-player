import React from "react";

import * as S from "./Song.styles";

export const Song = ({ currentSong }) => {
  return (
    <S.SongContainer>
      <S.Img src={currentSong.cover} alt={currentSong.name}></S.Img>
      <S.CurrentSong>{currentSong.name}</S.CurrentSong>
      <S.CurrentArtist>{currentSong.artist}</S.CurrentArtist>
    </S.SongContainer>
  );
};
