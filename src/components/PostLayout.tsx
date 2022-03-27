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
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
SwiperCore.use([Pagination,Navigation]);


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
  const router = useRouter()



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
        <div className="page_title title">Projects</div>
        <h1 className={"title text-center p-4"}>{title}</h1>
          <div className={"container mx-auto pt-20"}>
            <div className="blah">
              <article>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  loop={true}
                  >
                  <SwiperSlide key='textblock' className="text-slide relative m-auto">
                    <div className="lg:w-3/5 mx-auto text-center">{children}</div>
                  </SwiperSlide>
                  {galleryImages.map((i, key) => (
                    <SwiperSlide key={key} className=" relative m-auto">
                      <img src={i} width={'auto'} height={'auto'} />
                    </SwiperSlide>
                  ))}

                </Swiper>

              </article>

            </div>
            <footer className="text-center p-4 w-full fixed left-0 bottom-0 leading-3">
              <button type="button" onClick={() => router.back()}>
                Close
              </button>
            </footer>
        </div>
      <style jsx>
        {`
          .page_title {
            transform: rotate(270deg);
            position: fixed;
            top: 90px;
            line-height: 17px;
            left: -17px;
          }
          


          `}
      </style>
     
    </Layout>
  );
}

  {/* <ul className={"tag-list"}>
  {tags.map((it, i) => (
    <li key={i}>
      <TagButton tag={getTag(it)} />
    </li>
  ))}
</ul> */}
  {/* <div>
    <div>
      <Date date={date} />
    </div>
    <div>
      <Author author={getAuthor(author)} />
    </div>
  </div> */}