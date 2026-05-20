export default function SectionHeader({ kicker, title, copy }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-9">
      <p className="section-kicker inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1">{kicker}</p>
      <h2 className="premium-heading mt-3 text-[1.35rem] text-text sm:text-2xl md:text-[2.15rem]">{title}</h2>
      {copy ? <p className="mx-auto mt-3 max-w-2xl text-[0.88rem] leading-6 text-muted sm:text-[0.95rem] sm:leading-7">{copy}</p> : null}
    </div>
  );
}
