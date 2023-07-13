export default function Portfolio() {
  return (
    <section
      id="projects"
      className="mx-auto flex  max-w-7xl flex-col items-center"
    >
      <h2 className="text-center font-primary text-xl font-medium  text-primary-400">
        Portfolio
      </h2>
      <h1 className="mb-10 font-primary text-5xl font-bold text-white">
        Projects
      </h1>
      <div className="relative mx-auto aspect-video w-full max-w-xl border border-border bg-onBackground">
        <h2 className="absolute bottom-6 right-6">
          Coming Soon<span className="blink-animated">...</span>
        </h2>
      </div>
    </section>
  );
}
