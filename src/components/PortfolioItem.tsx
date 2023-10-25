import PortfolioButton from "./PortfolioButton";

interface Props {
  imageURL: string;
  projectURL?: string;
  sourceURL: string;
}

function PortfolioItem({ imageURL, projectURL, sourceURL }: Props) {
  return (
    <div className="flex max-w-[600px] flex-col items-center ">
      <img className="" src={imageURL} />

      <PortfolioButton url={projectURL!} text="Projeto" />
      <PortfolioButton url={sourceURL} text="Código" />
    </div>
  );
}

export default PortfolioItem;
