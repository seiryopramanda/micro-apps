import ContentBottom from "../components/content-bottom";
import ContentMain from "../components/content-main";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <ContentMain />
      <ContentBottom />
      <Footer />
    </>
  );
};

export default Home;
