import { useNavigate } from "react-router-dom";
import IArticle from "../../interface/article";

const Section = (article: IArticle) => {
  const navigate = useNavigate();
  return (
    <section className="flex">
      <div>
        {article.id === 1 && (
          <div
            className=" lg:w-753 lg:h-421 bg-center bg-image cursor-pointer h-[421px] overflow-hidden"
            onClick={() => navigate("/detail")}
          >
            <button className="bg-red w-232 h-47 rounded-xl text-white font-bold text-xl mt-72 ml-4">
              {article.date}
            </button>
            <h1 className="font-bold text-3xl text-white ml-4">
              {article.title}
            </h1>
            <p className="text-white text-2xl ml-4">{article.author}</p>
          </div>
        )}

        {article.id > 1 && (
          <div className=" w-367 h-421 bg-white">
            <img src={article.image} className="" alt="" />
            <button className="bg-red w-217 h-47 rounded-xl text-white font-bold text-xl mt-4 ml-4">
              {article.date}
            </button>
            <h1 className="font-bold text-3xl mt-3 ml-4">{article.title}</h1>
            <p className="text-2xl ml-4">{article.author}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
