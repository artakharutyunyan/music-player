import styled from "styled-components";

export const PlayerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TimeControlContainer = styled.div`
  margin-top: 5vh;
  width: 50%;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Track = styled.div`
  background: lightblue;
  width: 100%;
  height: 1rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(
    to right,
    ${(p) => p.currentSong.color[0]},
    ${(p) => p.currentSong.color[1]}
  );
`;

export const AnimateTrack = styled.div`
  background: rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(
    ${(p) =>
      Math.round((p.songInfo.currentTime * 100) / p.songInfo.duration) + "%"}
  );
  pointer-events: none;
`;

export const Input = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;
  /* padding-top: 1rem;
	padding-bottom: 1rem; */
  &:focus {
    outline: none;
    -webkit-appearance: none;
  }
  @media screen and (max-width: 768px) {
    &::-webkit-slider-thumb {
      height: 48px;
      width: 48px;
    }
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    background: transparent;
    border: none;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    background: transparent;
    border: none;
  }
  &::-ms-thumb {
    -webkit-appearance: none;
    background: transparent;
    border: none;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    background: transparent;
    border: none;
  }
`;

export const P = styled.p`
  padding: 0 1rem 0 1rem;
  user-select: none;
`;

export const PlayControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;
