import { PostContent } from "../lib/posts";
import Link from "next/link";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  let xValue = Math.random() < 0.5 ? false : true;
  let yValue = Math.random() < 0.5 ? false : true;
  return (
    <Link href={"/projects/" + post.slug}>
      <a>
        <div className="relative post--link">

          <div className="text">
            <div className="w-full">
              <h2 className="title h-6 mb-3"><span className="z-10 lg:absolute lg:w-full lg:center lg:left-0">{post.title}</span></h2>
            </div>
          </div>
            {xValue && yValue ? <img className="absolute max-w-[50%]" style={{top: `${Math.random() < 0.5 ? '-' : ''}${Math.random() * 20}%`, right: `${(Math.random() - 0.5) * 20}%`}} src={post.featureImage} /> : ''}
            {!xValue && yValue ? <img className="absolute max-w-[50%]" style={{bottom: `${Math.random() < 0.5 ? '-' : ''}${Math.random() * 20}%`, right: `${(Math.random() - 0.5) * 20}%`}} src={post.featureImage} /> : ''}
            {xValue && !yValue ? <img className="absolute max-w-[50%]" style={{top: `${Math.random() < 0.5 ? '-' : ''}${Math.random() * 20}%`, left: `${(Math.random() - 0.5) * 20}%`}} src={post.featureImage} /> : ''}
            {!xValue && !yValue ? <img className="absolute max-w-[50%]" style={{bottom: `${Math.random() < 0.5 ? '-' : ''}${Math.random() * 20}%`, left: `${(Math.random() - 0.5) * 20}%`}} src={post.featureImage} /> : ''}


        </div>
        <style jsx>{`
          a {
            color: var(--black)
          }

          a:hover {
            color: var(--greyhover)
          }
          .post--link img {
            display: none;
          }

          .post--link:hover img {
            display: block;
          }

        `}</style>

      </a>
    </Link>

  );
}
