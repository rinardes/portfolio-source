export default function About() {
  return (
    <section
      id="sobre"
      className="mx-auto mt-28 flex max-w-7xl flex-col gap-4 py-20 text-center md:px-20  lg:flex-row lg:px-0 lg:text-left"
    >
      <div className=" lg:block lg:basis-1/2">
        <h3 className="mb-4 text-center text-xl font-medium text-primary-400 lg:hidden">
          Quem sou eu
        </h3>
        <img
          className="h-full min-h-[288px] object-cover "
          src="images/3217136.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col lg:basis-2/5 ">
        <h3 className="mb-4 hidden  text-xl font-medium text-primary-400 lg:block">
          Quem sou
        </h3>
        <h1 className="mb-2 text-4xl font-bold md:text-5xl">Richard Melo</h1>
        <h4 className="mb-4 text-lg leading-4">Frontend Developer</h4>
        <p className="mb-4  font-light text-paragraph">
          Meu nome é Richard, sempre fui uma pessoa analítica e curiosa, que
          gosta de observar e aprender sobre como as coisas de fato funcionam,
          nunca aceitando nenhum dogma ou regra, mas sempre buscando ver tudo
          com meus próprios olhos. Na área de desenvolvimento web, sinto como se
          fosse parte de um novo mundo, construindo o rosto de uma nova
          realidade.
        </p>
        <p className=" font-light   text-paragraph">
          No desenvolvimento web te entrego as últimas tecnologias do mercado
          como react, tailwind e integrações com inteligências artificias
          generativas. E além disso entrego para o seu negócio copywriting, seo
          e consultoria para que possa alcançar o máximo de potencial com sua
          presença na web.
        </p>
      </div>
    </section>
  );
}
