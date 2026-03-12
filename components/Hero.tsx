function Hero() {
  return (
    <section className="w-full">
      <div className="flex flex-col pt-28 justify-center items-center">
        <h1 className="text-3xl text-center md:text-[62px] font-bold text-black mb-2">
          Make forms in a few clicks
        </h1>
        <div className="flex flex-col justify-center items-center md:text-[22px] text-center text-[#37352F] mb-8">
          <p className="hidden md:block">
            Stop wasting time on dull forms. Meet Lekha — the smart,
          </p>
          <p className="hidden md:block">easy form builder for everyone.</p>
          <p className="text-sm md:hidden">
            No more boring forms. Meet Lekha — the fast, intuitive tool to
            collect what matters.
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <button className="bg-[#0070d7] hover:bg-[#025db3] transition-all duration-100 ease-in cursor-pointer rounded-lg text-white px-4 py-2 font-semibold">
            Create a Free Form
          </button>
          <p className="text-[#45433e] text-sm">No signup required</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
