import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import LinkedInMeta from "../components/meta/LinkedInMeta";
import MarqueeText from "../components/MarqueeText"
import IncoLogoWhite from "../assets/INCO_LOGO.svg"
import pageContent from "../../site/home.yml"



export default function Index() {
  let desktopImages = pageContent.desktopImages
  let desktopImageCount = desktopImages.length
  let randomNumber = Math.floor(Math.random() * desktopImageCount)
  let currentDesktopImage = desktopImages[randomNumber]

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <LinkedInMeta url={"/"} />
      <div className={`home`}>
        <div className="marquee bg-grey">
          <MarqueeText />
        </div>
        <div className="h-full nav-info flex items-end p-4 pb-0">
          <div className="items-end w-full">
            <IncoLogoWhite fill="white" />
          </div>  
        </div>
      </div>
      <style jsx>{`
       .marquee {
          position: fixed;
          width: 100%;
          height: 46px;
          cursor: pointer;
          padding-top: 0.7rem;
          padding-left: 2.5rem;
          z-index: 2;
          padding-right: 1rem;
          font-size: 1.5rem;
          letter-spacing: 0.5px;
        }
 
        .home {
          height: 100vh;
          width: 100vw;
          background-image: url("${currentDesktopImage}");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        
        }

        `}</style>
    </Layout>
  );
}

