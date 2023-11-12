import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const Sections = () => {
  return (
    <>
      <section className="coverContainer">
        <span className="coverSentence">
          NEW ALBUM <br />
          OUT NOW
        </span>
        <img src="cover.jpg" alt="cover" className="coverImg" />
        <span className="coverInfo">
          HEY MAN, <br />
          DON'T LOSE YOUR WALLET!
        </span>
      </section>
      <section className="musicContainer">
        <h2>Listen us on Spotify:</h2>
        <iframe
          title="player"
          className="player"
          src="https://open.spotify.com/embed/album/0ehl8eCC1TosAgS9byh2xw?utm_source=generator&theme=0"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media;"
          loading="lazy"
        ></iframe>
        <h2>More music:</h2>
        <span className="musicLinks">
          <a
            href="https://music.apple.com/it/artist/9-thirty/1590858341"
            target="_blank"
            rel="noreferrer noopener"
            className="musicBox"
          >
            <MusicNoteIcon fontSize="small" style={{ color: "black" }} />
            <span>APPLE MUSIC</span>
          </a>
          <a
            href="https://music.amazon.it/artists/B09JRGFK11/9-thirty"
            target="_blank"
            rel="noreferrer noopener"
            className="musicBox"
          >
            <LibraryMusicIcon fontSize="small" style={{ color: "black" }} />
            &nbsp; <span>AMAZON MUSIC</span>
          </a>
        </span>
      </section>
    </>
  );
};

export default Sections;
