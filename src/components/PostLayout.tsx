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
// import { fetchPostContent } from "../lib/posts"

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
  galleryImages, //LUKE
  featureImage //LUKE
}: Props) {
  const keywords = tags.map(it => getTag(it).name);
  const authorName = getAuthor(author).name;

  // console.log(fetchPostContent)
  var x = galleryImages
  console.log('gallery images', galleryImages, x) //LUKE
// these are undefined.
  console.log('feature image', featureImage)//LUKE



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
      <div className={"container mx-auto pt-20"}>
        <article>
          <header>
            <h1 className={"h4"}>{title}</h1>
            <div className={"metadata"}>
              <div>
                <Date date={date} />
              </div>
              <div>
                <Author author={getAuthor(author)} />
              </div>
            </div>
          </header>
          <div>
            {galleryImages}
          </div>
          <div className="">{children}</div>
          <ul className={"tag-list"}>
            {tags.map((it, i) => (
              <li key={i}>
                <TagButton tag={getTag(it)} />
              </li>
            ))}
          </ul>
        </article>
        <footer>
          <div className={"social-list"}>
            <SocialList white={false}/>
          </div>
          <Copyright />
        </footer>
      </div>
      <style jsx>
        {`
           
          `}
      </style>
     
    </Layout>
  );
}
