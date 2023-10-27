interface Props {
  url?: string;
  text: string;
}

function PortfolioButton({ url, text }: Props) {
  return (
    <button
      hidden={url == undefined}
      className="mt-4 h-fit  w-full rounded-md border border-border hover:bg-primary-400"
    >
      <a className="block py-2 " href={url} target="_blank">
        {text}
      </a>
    </button>
  );
}

export default PortfolioButton;
