const date = new Date();

function Footer() {
  return (
    <>
      <div className="w-[55%] flex flex-col items-start border-t-2 border-slate-800 px-4 py-8 border-opacity-50 mb-20 mt-10">
        <h1 className="text-white/50 text-2xl font-semibold">D.H. Westerdijk</h1>
        <h2 className="text-white/30 text-base">Software Developer • {date.getFullYear()}</h2>
      </div>
    </>
  );
}

export default Footer;
