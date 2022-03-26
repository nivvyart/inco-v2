import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostImageItem({ post }: Props) {
  return (
    <Link href={"/projects/" + post.slug}>
      <a>
        <div className="text">
          <div className="w-full">
            <h2 className="title">{post.title}</h2>
            <Date date={parseISO(post.date)} />
          </div>
        </div>
        
        <img className="mx-auto " src={post.featureImage} alt=""/>
       

      </a>
    </Link>
  );
}
