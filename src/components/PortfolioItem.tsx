import PortfolioButton from "./PortfolioButton";

interface Props {
  imageURL: string;
  projectURL?: string;
  sourceURL: string;
}

function PortfolioItem({ imageURL, projectURL, sourceURL }: Props) {
  return (
    <div className="flex flex-col items-center ">
      <img className=" border-[6px]" src={imageURL} />
      <PortfolioButton url={projectURL!} text="Projeto" />
      <PortfolioButton url={sourceURL} text="Código" />
    </div>
  );
}

export default PortfolioItem;
