import MailMe from "../components/MailMe";

function Contact() {
  return (
    <section
      id="contato"
      className="mx-auto flex max-w-7xl flex-col items-center gap-24 lg:flex-row"
    >
      <div className="flex w-full basis-2/5 flex-col gap-4">
        <h2 className=" text-lg tracking-wide text-primary-400">CONTATO</h2>
        <h1 className=" text-5xl font-bold leading-none text-white">
          Fale Comigo
        </h1>
        <div className="group flex  flex-col gap-4 font-primary  ">
          <p className="text-base text-paragraph">
            Quer me recrutar para sua equipe ou tem algum projeto em mente? Pode
            me encontrar por qualquer um desses meios
          </p>
          <div>
            <p className="whitespace-pre text-base">
              Phone:
              <a
                className="pl-2"
                href="https://whatsa.me/5511952458305"
                target="_blank"
              >
                +55 11 95245-8305
              </a>
            </p>
            <p className="text-base">
              Email:
              <a className="pl-2" href="mailto:rmelocont@gmail.com">
                rmelocont@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:basis-3/5">
        <MailMe />
      </div>
    </section>
  );
}

export default Contact;
