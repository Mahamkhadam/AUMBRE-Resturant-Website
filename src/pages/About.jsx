import PageBanner from "../components/PageBanner";
import Legacy from "../components/Legacy";
import Craft from "../components/Craft";
import Journey from "../components/Journey";
function About() {
  return(
   <>
    <PageBanner
    title="About us"
    page="About "
    />
    <Legacy/>
    <Craft/>
    <Journey/>
    </>
);
}

export default About;