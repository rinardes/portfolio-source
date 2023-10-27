import LazyLoad from "react-lazy-load";
import PortfolioButton from "./PortfolioButton";

interface Props {
  imageURL: string;
  projectURL?: string;
  sourceURL: string;
}

function PortfolioItem({ imageURL, projectURL, sourceURL }: Props) {
  return (
    <div className="flex max-w-[600px] flex-col items-center ">
      <LazyLoad>
        <img className="" src={imageURL} />
      </LazyLoad>

      <PortfolioButton url={projectURL!} text="Projeto" />
      <PortfolioButton url={sourceURL} text="Código" />
    </div>
  );
}

export default PortfolioItem;
