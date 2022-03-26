import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import LinkedInMeta from "../components/meta/LinkedInMeta";
import incoLabContent from "../../site/inco_lab.yml";


export default function Studio() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <LinkedInMeta url={"/"} />
      <div className="page_title title">INCO Lab</div>

      <div className="container mx-auto">
        <div className="flex justify-center h-screen">
          <div className="m-auto">
            <h1 className="content-center">{incoLabContent.title}</h1>
          </div>
        </div>
      </div>
      <style jsx>{`
      .page_title {
        transform: rotate(270deg);
        position: absolute;
        top: 90px;
        line-height: 17px;
        left: -24px;
      }

     
      `}</style>
    </Layout>
  );
}