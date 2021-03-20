import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

import * as S from "./Player.styles";

const pointer = { cursor: "pointer" };

export const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setSongs,
}) => {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const togglePlayPauseIcon = () => {
    if (isPlaying) {
      return faPause;
    } else {
      return faPlay;
    }
  };

  const getTime = (time) => {
    let minute = Math.floor(time / 60);
    let second = ("0" + Math.floor(time % 60)).slice(-2);
    return `${minute}:${second}`;
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
      }
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const activeLibraryHandler = (newSong) => {
    const newSongs = songs.map((song) => {
      if (song.id === newSong.id) {
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
  };

  return (
    <S.PlayerContainer>
      <S.TimeControlContainer>
        <S.P>{getTime(songInfo.currentTime || 0)}</S.P>
        <S.Track currentSong={currentSong}>
          <S.Input
            onChange={dragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
          />
          <S.AnimateTrack songInfo={songInfo}></S.AnimateTrack>
        </S.Track>

        <S.P>{getTime(songInfo.duration || 0)}</S.P>
      </S.TimeControlContainer>

      <S.PlayControlContainer>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          style={pointer}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={togglePlayPauseIcon()}
          size="2x"
          style={pointer}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          style={pointer}
        />
      </S.PlayControlContainer>
    </S.PlayerContainer>
  );
};
