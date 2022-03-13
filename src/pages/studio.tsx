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
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-0">
            <div>
              <div>
                <h2>{studioContent.title}</h2>
                <p>{studioContent.intro}</p>
              </div>
              <div>
              {studioContent.team.map((person, k) => (
                <div key={k}>
                  <h2>{person.name}</h2>
                  <h3>{person.position}</h3>
                  <img src={person.photo} alt={person.name + ' profile image'} />
                  <div>{person.description}</div>
                </div>
              ))}

              </div>

            </div>
            <div></div>
            
          </div>
        </div>
      
    </Layout>
  );
}