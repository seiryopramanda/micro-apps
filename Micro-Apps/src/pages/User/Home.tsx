import React from "react";
import IArticle from "../../interface/article";
import Article from "../../mocks/Article.json";
import Notes from "../../components/home/Notes";
import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";
import Header from "../../components/home/Header";
import Section from "../../components/home/Section";

const Home: React.FC = () => {
  const [home] = React.useState<IArticle[]>(Article);

  return (
    <div className="bg-zinc-300">
      <Navbar />
      <Header />
      <div className="flex-wrap flex justify-center items-center gap-4 mt-12 px-6">
        {home &&
          home.map((data: IArticle, id: number) => {
            return (
              <div key={id}>
                <Section
                  id={data.id}
                  image={data.image}
                  date={data.date}
                  title={data.title}
                  author={data.author}
                  detail={data.detail}
                />
              </div>
            );
          })}
      </div>
      <Notes />
      <Footer />
    </div>
  );
};

export default Home;
