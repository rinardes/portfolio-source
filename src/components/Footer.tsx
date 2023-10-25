import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <footer className="mx-auto mt-20 flex max-w-7xl flex-col items-center gap-8 pb-6">
      <SocialMedia />
      <p className="text-center text-sm">
        Copyright © 2023 <b className="text-primary-400">Richard Melo</b> Todos
        os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
