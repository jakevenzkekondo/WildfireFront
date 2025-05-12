import nifc from "../images/nifc.png"
import usfs from "../images/usfs.png"
import nps from "../images/nps.png"
import cisa from "../images/cisa.png"

// src/pages/Resources.jsx
export default function Resources() {
  return (
    <>
      <section>
        <h2>Resources</h2>
        <p>
          Here are links to other sites that provide specific and detailed information and data on wildfires and wildland firefighting.
        </p>
      </section>
      <div className="resource-container">
        <a href=" https://www.fs.usda.gov/science-technology/fire/information"><img className="resource-img" src={usfs} alt="usfs"></img></a>
        <a href="https://www.nifc.gov/fire-information/nfn"><img className="resource-img" src={nifc} alt="nifc"></img></a>
        <a href="https://www.nps.gov/subjects/fire/fire-in-depth.htm"><img className="resource-img" src={nps} alt="nps"></img></a>
        <a href="https://www.cisa.gov/topics/critical-infrastructure-security-and-resilience/extreme-weather/wildfires"><img className="resource-img" src={cisa} alt="cisa"></img></a>
      </div>
    </>
  )
}