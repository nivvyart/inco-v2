import React from "react";
import config from "../lib/config";


type Props = {
 white: boolean
};

export function SocialList({ white }: Props) {
  return (
    <div className={white ? 'text-white' : ''}>
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
        .text-white a {
          color: white;
        }

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
