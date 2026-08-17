import Journal from "../sections/Journal";
import PageBanner from "../components/PageBanner";
function Blogs() {
  return(
   <>
    <PageBanner
    title="Blog"
    page="Blog "
    />
    <Journal/>
    </>
);
}

export default Blogs;