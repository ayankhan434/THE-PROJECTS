import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="yellow-band overflow-hidden">
      <div className="container-iv flex min-h-[270px] flex-col items-start justify-center gap-8 py-16 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow text-[#102018]/70">Let&apos;s work together</p>
          <h2 className="display mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">Have a project in mind?<br/>Let&apos;s build something great.</h2>
        </div>
        <Button href="/contact" dark>Start a Project</Button>
      </div>
    </section>
  );
}