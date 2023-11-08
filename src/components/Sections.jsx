import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const Sections = () => {
  return (
    <>
      <section className="coverContainer">
        <div className="coverInfo">
          NEW ALBUM <br />
          OUT NOW
        </div>
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
        <div className="musicBoxes">
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
            <LibraryMusicIcon fontSize="small" />
            &nbsp; <span>AMAZON MUSIC</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Sections;
