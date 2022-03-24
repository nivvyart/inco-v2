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
            <div className="left-content lg:w-9/12 lg:mr-0 lg:ml-auto lg:pr-20 w-10/12 px-20 mx-auto">
              <div>
                <h4 className="mt-20">{studioContent.title}</h4>
                <div>{studioContent.intro}</div>
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
            <div className="bg-grey hidden lg:block"></div>
            
          </div>
        </div>
      <style jsx>{`
        .page_title {
          transform: rotate(270deg);
          position: absolute;
          top: 75px;
          line-height: 17px;
          left: -7px;
          font-size: 1.5rem;
        }
      `}</style>
    </Layout>
  );
}