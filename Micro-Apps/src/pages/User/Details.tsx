import React from "react";
import { useState } from "react";
import IArticle from "../../interface/article";
import DetailArticle from "../../mocks/DetailArticle.json";
import Navbar from "../../components/home/Navbar";
import DetailContent from "../../components/home/DetailContent";
import Footer from "../../components/home/Footer";

const Details: React.FC = () => {
  const [details] = useState<IArticle[]>(DetailArticle);

  return (
    <div className="bg-zinc-300">
      <Navbar />
      <div className="mx-20">
        {details &&
          details.map((data: IArticle, id: number) => {
            return (
              <div key={id}>
                <DetailContent
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
      <Footer />
    </div>
  );
};

export default Details;
