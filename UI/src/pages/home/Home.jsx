import Layout from "@/components/layout/Layout";
import LeftSection from "./left-section/LeftSection";
import RightSection from "./right-section/RightSection";

function Home() {
  return (
    <Layout LeftSection={LeftSection} RightSection={RightSection}></Layout>
  );
}
export default Home;
