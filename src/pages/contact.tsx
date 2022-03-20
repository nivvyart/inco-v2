import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import LinkedInMeta from "../components/meta/LinkedInMeta";
import { SocialList } from "../components/SocialList";

export default function Contact() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <LinkedInMeta url={"/"} />
      <div className="page_title">Contact</div>

      <div className="bg-black text-white h-screen">

        <div className="container mx-auto">
          <div>
            <SocialList />
          </div>
        </div>
      </div>
      
    <style jsx>{`
      .page_title {
        transform: rotate(270deg);
        position: absolute;
        top: 60px;
        line-height: 17px;
        left: -15px;
        font-size: 1.5rem;
        color: white;
      }

     
      `}</style>
    </Layout>
  );
}