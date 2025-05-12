import wildfire from '../images/wildfire.jpg'
import wildfire2 from '../images/wildfire2.jpg'
import burnscar from '../images/burn-scar.jpg'

// src/pages/Home.jsx
export default function Home() {
  return (
    <div>
      <section>
        <h2>Overview</h2>
        <div className="content">
          <p>
            This web application is designed to provide useful information and resources to those interested in wildfires, their causes, and prevention methods.
          </p>
          <p>
            The <a href="/map"><strong>Map</strong></a> page takes you to a live map of wildfires across the world and information about them.
            This data is fetched from the NASA Earth Observatory Natural Event Tracker (EONET), and users can filter fires by date as well as selecting
            them for more data.
          </p>
          <p>
            The <a href="/prevention"><strong>Prevention</strong></a> page contains information on how to prevent wildfires and what you can do to get involved.
          </p>
          <p>
            The <a href="/resources"><strong>Resources</strong></a> page contains links to other sites that contain more specific and detailed information.
          </p>
        </div>
      </section>
      <div className="row">
        <img src={wildfire} alt="wildfire"></img>
        <section>
          <h2>Wildfires</h2>
          <div className="content">
            <p>
              Wildfires, also referred to as forest fires or bushfires, are large, uncontrolled fires that spread rapidly over woodland
              or brush. There are multiple classifications for wildfires based on the kinds of vegetation fueling them, such as desert
              fire, hill fire, peat fire, prairie fire, and grass fires.
            </p>
            <p>
              While some forest ecosystems rely on wildfires, multiple human related factors have caused the severity of wildfires to
              increase and become progressively more destructive. Climate change has led to hotter temperatures, causing droughts and
              drier vegetation. Policies aiming to suppress wildfires actually led to the buildup of fuel in forests, making wildfires
              more severe when they do happen. Logging and land development can fragment ecosystems and remove vegetation that helps
              forests resist fires. And of course human activity, such as campfires, cigarettes, and arson introduce more ignition sources.
            </p>
          </div>
        </section>
      </div>
      <div className="row">
        <section>
          <h2>Destruction</h2>
          <div className="content">
            <p>
              Wildfires are by nature incredibly destructive. In 2024 alone the <a href="https://www.nifc.gov/sites/default/files/NICC/2-Predictive%20Services/Intelligence/Annual%20Reports/2024/annual_report_2024.pdf">National Interagency Fire Center</a> recorded there were 64,897 wildfires that burned a total of 8,924,884 acres. Wildfire damage has also been steadily increasing due to human activity.
            </p>
            <p>
              Over the past 40 years there has been a 1,000% increase in the average number of acres of forested land consumed by wildfire each year in the US according to <a href="https://education.nationalgeographic.org/resource/megafire/">National Geographic</a>. The American Association for the Advancement of Science reported that in the past 13 years fire frequency doubled on the West and East coasts, and quadrupled in the Great Plains.
            </p>
            <p>
              A new classification for wildfires has been created: megafires, which the US Interagency Fire Center defines as a wildfire that burns more than 40,500 hectares (100,000 acres) of land.
            </p>
            <p>
              Climate models show wildfire frequency continuing to increase as temperatures rise from climate change and the fire season grows longer.
            </p>
          </div>
        </section>
        <img src={wildfire2} alt="wildfire 2"></img>
      </div>
      <div className="row">
        <img src={burnscar} alt="burn scar"></img>
        <section>
          <h2>Ecological Need</h2>
          <div className="content">
            <p>
              Wildfires can be naturally occurring, and when they are regular and low-intensity they have some benefits to ecosystems that have developed with them as part of their growth cycle.
            </p>
            <ul>
              <li>Fires make room for new growth by clearing dead trees and underbrush.</li>
              <li>Some vegetation species have adapted to use the heat from fire to open their cones and release seeds.</li>
              <li>Burning plants returns nutrients like nitrogen and phosphorus to the soil, enriching it for new plant growth.</li>
              <li>Fires also reduce the accumulation fuels like dry leaves, branches, and dead wood. This prevents the buildup that can lead to high-intensity, more destructive fires.</li>
              <li>Invasive species introduced by humans that have not adapted to be fire resistant are more likely to be destroyed when wildfires do occur.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}