import PageBanner from "../../components/PageBanner";
import Legacy from "../../sections/Legacy";
import Craft from "../../sections/Craft";
import Journey from "../../sections/Journey";
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