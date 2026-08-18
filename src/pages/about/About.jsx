import PageBanner from "../../components/PageBanner";
import Legacy from "./Legacy";
import Craft from "./Craft";
import Journey from "./Journey";
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