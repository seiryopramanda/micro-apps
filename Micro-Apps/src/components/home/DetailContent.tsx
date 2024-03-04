import { useNavigate } from "react-router-dom";
import IArticle from "../../interface/article";

const DetailContent = (props: IArticle) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white mx-auto">
        <div className="flex items-center justify-between mx-20 py-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <p className="text-3xl font-bold justify-start">&larr;</p>
            <p className="text-xl">Beranda</p>
          </div>
          <p className="text-xl">BERITA HARI INI</p>
          <p></p>
        </div>

        <div className="text-center">
          <p className="text-4xl font-bold text-yellowdark">{props.title}</p>
          <p className="text-xl">{props.author}</p>
          <p className="text-xl">Senin, 03 Jan 2023</p>
          <img
            src={props.image}
            alt=""
            className="w-1054 h-530 mx-auto mt-6 object-cover object-center px-6"
          />
        </div>

        <div className="mx-16 text-justify pb-12">
          <p className="mt-5">{props.detail[0]}</p>
          <p className="mt-5">{props.detail[1]}</p>
          <p className="mt-5">{props.detail[2]}</p>
          <p className="mt-5">{props.detail[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
