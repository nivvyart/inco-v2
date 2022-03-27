import ReactMarkdown from 'react-markdown'

import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import LinkedInMeta from "../components/meta/LinkedInMeta";
import studioContent from "../../site/studio.yml";



export default function Studio() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <LinkedInMeta url={"/"} />
      <div className="page_title">Studio</div>
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 grid-cols-1">
            <div className="left-content lg:w-9/12 lg:mr-0 lg:ml-auto lg:pr-20 w-full pl-14 pr-10 mx-auto">
              <div>
                <h4 className="mt-20">{studioContent.title}</h4>
                <ReactMarkdown>{studioContent.intro}</ReactMarkdown>
              </div>
              <div className="max-w-sm">
              {studioContent.team.map((person, k) => (
                <div key={k} className="my-10">
                  <img src={person.photo} alt={person.name + ' profile image'} />
                  <h5 className="my-4 leading-none text-lg">{person.name} <br/>{person.position}</h5>
                  <div>{person.description}</div>
                </div>
              ))}

              </div>

            </div>
            <div className="bg-grey hidden lg:block side-image"></div>
            
          </div>
        </div>
      <style jsx>{`
        .page_title {
          transform: rotate(270deg);
          position: fixed;
          top: 75px;
          line-height: 17px;
          left: -5px;
          font-size: 1.5rem;
        }
        .side-image {
          background-image: url("${studioContent.main_image}");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: fixed;
          height: 100vh;
          width: 50vw;
          right: 0;
        }
      `}</style>
    </Layout>
  );
}