import About from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import FunFacts from "../src/components/FunFacts";
import HeroSlider from "../src/components/HeroSlider";
import RoadMapSlider from "../src/components/RoadMapStep";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import TopDiv from "../src/components/TopDiv";
import News from "../src/components/News";
const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      {/* Home Section */}
      <About />
  
      <TopDiv />
      {/* <News/> */}
      <HeroSlider />
      {/* !Home Section */}
      {/* Fun Facts */}
      {/* !Fun Facts */}
      {/* About Section */}
      {/* !About Section */}
      {/* Section Divider */}
      {/* <SectionDivider /> */}
      {/* !Section Divider */}
      {/* Collection Section */}
      {/* <Collection /> */}
      {/* !Collection Section */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section RoadMap */}
      <RoadMapSlider />
      {/* !Section RoadMap */}
      {/* Section Divider */}
      {/* <SectionDivider /> */}
      {/* !Section Divider */}
      {/* Section News */}
      {/* !Section News */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section */}
      <Contact />
    </Layout>
  );
};
export default Index;
