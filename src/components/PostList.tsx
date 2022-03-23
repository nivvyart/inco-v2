import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
// import { useState } from "react";


type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function PostList({ posts, tags, pagination }: Props) {

  const [listView, setView]= React.useState(false)
  
  const showMenu = () => {
    setView(!listView)
    if(listView === true) {
     console.log('true')
    }else {
      console.log('false')
    }
  }


  return (
      <div className={"posts"}>
        
        <div className="text-center pt-2" onClick={showMenu}>
          <a className="text-black" href="#">{listView ? 'Image View' : 'List View'}</a>
        </div>
        <div className="text-center">
          <ul>
            {tags.map((it, i) => (
              <li className="inline mx-1" key={i}>
                <TagLink tag={it} />
              </li>
            ))}
          </ul>
        </div>   

        <ul className={"post_list imageview_" + (listView ? 'enabled' : '')} >
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>


        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/projects" : "/projects/page/[page]"),
            as: (page) => (page === 1 ? null : "/projects/page/" + page),
          }}
        />
        
      <style jsx>{`
    
      `}</style>
    </div>
  );
}
