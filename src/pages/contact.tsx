import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import LinkedInMeta from "../components/meta/LinkedInMeta";
import { SocialList } from "../components/SocialList";
import contactContent from "../../site/contact.yml";
import ReactMarkdown from 'react-markdown'



export default function Contact() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <LinkedInMeta url={"/"} />
      <div className="page_title title">Contact</div>

      <div className="bg-black text-white">

        <div className="flex justify-center items-center h-screen">
          <div className="m-auto">
            <div>
              <h4 className="text-center">{contactContent.title}</h4>
            </div>
            <div className="mt-20">
              <ReactMarkdown className="h4 text-center leading-tight">{contactContent.address}</ReactMarkdown>
            </div>
            <div className="text-center">
              <SocialList white={true} />
            </div>
          </div>
        </div>
       
      </div>
      
    <style jsx>{`
      .page_title {
        transform: rotate(270deg);
        position: fixed;
        top: 80px;
        line-height: 17px;
        left: -15px;
        color: white;
      }

     
      `}</style>
    </Layout>
  );
}