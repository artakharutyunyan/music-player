import React from "react";

import * as S from "./LibrarySong.styles";

export const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    const curSong = song;
    const songList = songs;

    const newSongs = songList.map((song) => {
      if (song.id === curSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <S.LibrarySongContainer onClick={songSelectHandler} isActive={song.active}>
      <S.Img src={song.cover} alt={song.name}></S.Img>
      <S.LibrarySongDescription>
        <S.SongName>{song.name}</S.SongName>
        <S.Artist>{song.artist}</S.Artist>
      </S.LibrarySongDescription>
    </S.LibrarySongContainer>
  );
};
