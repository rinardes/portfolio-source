interface Props {
  url?: string;
  text: string;
}

function PortfolioButton({ url, text }: Props) {
  return (
    <button
      hidden={url == undefined}
      className="mt-4 w-full rounded-md border border-border py-2 hover:bg-primary-400"
    >
      <a href={url} target="_blank">
        {text}
      </a>
    </button>
  );
}

export default PortfolioButton;
