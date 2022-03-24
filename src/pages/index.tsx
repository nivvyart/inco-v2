import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import LinkedInMeta from "../components/meta/LinkedInMeta";
import MarqueeText from "../components/MarqueeText"
import IncoLogoWhite from "../assets/INCO_LOGO.svg"



export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <LinkedInMeta url={"/"} />
      <div className="home">
        <div className="marquee">
          <MarqueeText />
        </div>
        <div className="h-full nav-info flex items-end p-4">
          <IncoLogoWhite style={{fill: "white"}}/>
        </div>
      </div>
      <style jsx>{`
       .marquee {
        position: fixed;
        width: 100%;
        height: 30px;
        cursor: pointer;
        padding-top: 0.4rem;
        padding-left: 2.5rem;
        z-index: 2;
        background: grey;
        padding-right: 80px;
        }
        .home {
          background: blue;
          height: 100vh;
          width: 100vw;
        }

        `}</style>
    </Layout>
  );
}
