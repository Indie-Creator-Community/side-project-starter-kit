import { type NextPage } from 'next';

const Pricing: NextPage = () => {
  return (
    <main>
      {/* PRICING TIERS SECTION */}
      <section className="relative my-10 pt-20">
        <div className="container relative z-20 mx-auto flex flex-col items-center px-4 md:px-0">
          <h1 className="text-fluid-lg animate-fade-up font-bold">Pricing</h1>

          <p className="animate-fade-up animate-delay-100 mx-auto mb-6 max-w-[40ch] text-center text-slate-300 md:text-lg">
            Start creating, visualizing, and exploring your tweets like never before with
            Twon&apos;s pricing plans.
          </p>

          {/* Card section */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 px-4"></div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
