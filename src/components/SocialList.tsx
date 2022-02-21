import React from "react";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.instagram}`}
        target="_blank"
        rel="noopener"
      >
       Instagram
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.linkedin}`}
        target="_blank"
        rel="noopener"
      >
       Linkedin
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
