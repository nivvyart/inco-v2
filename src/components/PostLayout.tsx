import React from "react";
import Author from "./Author";
import Copyright from "./Copyright";
import Date from "./Date";
import Layout from "./Layout";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import LinkedInMeta from "./meta/LinkedInMeta";
import { SocialList } from "./SocialList";
import TagButton from "./TagButton";
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";
import Image from 'next/image'

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
  galleryImages: string[];
  featureImage: string;
};
export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  description = "",
  children,
  galleryImages
}: Props) {
  const keywords = tags.map(it => getTag(it).name);
  const authorName = getAuthor(author).name;



  return (
    <Layout>
      <BasicMeta
        url={`/projects/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
      />
      <LinkedInMeta
        url={`/projects/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/projects/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`/projects/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <h1 className={"title text-center p-4"}>{title}</h1>

      <div className={"container mx-auto pt-20"}>
        <div className="page_title title">Projects</div>

        <article>
          <header>
            {/* <div>
              <div>
                <Date date={date} />
              </div>
              <div>
                <Author author={getAuthor(author)} />
              </div>
            </div> */}
          </header>
          <div>

            {galleryImages.map((i, key) => (
              <Image src={i} width={'auto'} height={'auto'} />
            ))}

          </div>
          <div className="">{children}</div>
          {/* <ul className={"tag-list"}>
            {tags.map((it, i) => (
              <li key={i}>
                <TagButton tag={getTag(it)} />
              </li>
            ))}
          </ul> */}
        </article>
        
      </div>
      <style jsx>
        {`
          .page_title {
            transform: rotate(270deg);
            position: absolute;
            top: 90px;
            line-height: 17px;
            left: -17px;
          }
          `}
      </style>
     
    </Layout>
  );
}
