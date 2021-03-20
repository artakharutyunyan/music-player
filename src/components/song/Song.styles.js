import styled from "styled-components";

export const SongContainer = styled.div`
  margin-top: 10vh;
  min-height: 50vh;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 20%;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const CurrentSong = styled.h2`
  padding: 3rem 1rem 1rem 1rem;
`;

export const CurrentArtist = styled.h3`
  font-size: 1rem;
`;
