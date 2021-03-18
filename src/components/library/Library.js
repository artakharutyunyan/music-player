import React from "react";

import * as S from "./Library.styles";
import { LibrarySong } from "../librarySong";

export const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <S.LibraryContainer libraryStatus={libraryStatus}>
      <S.Header>Library</S.Header>
      <S.SongContainer>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </S.SongContainer>
    </S.LibraryContainer>
  );
};
