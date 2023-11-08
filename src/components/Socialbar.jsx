import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Socialbar = () => {
  return (
    <div className="socialBar">
      <a
        href="https://www.facebook.com/9.thirtymusic"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FacebookIcon />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
        <TwitterIcon />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <YouTubeIcon />
      </a>
    </div>
  );
};

export default Socialbar;
