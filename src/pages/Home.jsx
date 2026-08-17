import Hero from "../sections/Hero";
import Story from "../sections/Story";
import Offermenu from "../sections/Offermenu";
import Choose from "../sections/Choose";
import Popular from "../sections/Popular";
import Review from "../sections/Review";


function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Offermenu />
      <Choose />
      <Popular />
      <Review />
      
    </>
  );
}

export default Home;