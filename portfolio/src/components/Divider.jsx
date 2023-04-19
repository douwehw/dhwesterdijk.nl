import React from "react";

function Divider({ title }) {
  return (
    <>
      <h3 className="text-3xl mb-4 text-gray-200">{title}</h3>
      <div className="w-[100%] flex flex-col items-start border-t-2 border-slate-600 px-4 py-2 border-opacity-50"></div>
    </>
  );
}

export default Divider;
