import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import PostImageItem from "./PostImageItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";


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
  }


  return (
    <div className={"posts"}>
        <div className="page_title title">Projects</div>

        <div className="text-center pt-4 mb-3" onClick={showMenu}>
          <a className="text-black" href="#">{listView ? 'Image View' : 'List View'}</a>
        </div>
        <div className="text-center">
          <ul>
            <li className="inline mx-3">
              <a href="/projects">All</a>
            </li>
            {tags.map((it, i) => (
              <li className="lg:inline mx-3" key={i}>
                <TagLink tag={it} />
              </li>
            ))}
          </ul>
        </div>   
        {!listView ? 
          <div className="post_list mx-auto imageview p-10" >
            <div className={"grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10 content-center	"}>
              {posts.map((it, i) => (
                <div key={i} className='imageview__item relative'>
                  <PostImageItem post={it}  />
                </div>
              ))}
            </div>
          </div>
         : 
          <div className="post_list grid lg:min-h-[80vh] content-center listview text-center mt-20" >
            <div className={"lg:w-4/6 mx-auto"}>
              {posts.map((it, i) => (
                <div key={i} className='listview__item'>
                  <PostItem post={it}  />
                </div>
              ))}
            </div>
          </div>
         }
       
        {pagination.pages === 1 ? '' : 
          <Pagination
            current={pagination.current}
            pages={pagination.pages}
            link={{
              href: (page) => (page === 1 ? "/projects" : "/projects/page/[page]"),
              as: (page) => (page === 1 ? null : "/projects/page/" + page),
            }}
          />   
        }
        
      <style jsx>{`
       .page_title {
        transform: rotate(270deg);
        position: absolute;
        top: 90px;
        line-height: 17px;
        left: -17px;
      }
    
      `}</style>
    </div>
  );
}
