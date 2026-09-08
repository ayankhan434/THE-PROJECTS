import ContactForm from "../../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="container-iv section-pad pt-36">
      <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="display mt-4 text-6xl font-bold sm:text-8xl">Let&apos;s create something amazing together.</h1>
          <p className="mt-7 max-w-md text-sm leading-6 text-[var(--muted)]">Have a project in mind or just want to say hello? Fill out the form and we&apos;ll get back to you as soon as possible.</p>
          <div className="mt-10 border-t border-[var(--line)] pt-6 text-sm"><p className="eyebrow">Email</p><p className="mt-2">hello@indusvalley007.com</p><p className="eyebrow mt-7">Location</p><p className="mt-2">India</p></div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
} 