function AppWrapper({children}) {
   return (
      <div className="flex items-center flex-col w-full h-fit bg-gradient-[-45deg] from-black to-[#141c2e] min-h-screen text-white relative">
         {children}
      </div>
   );
}

export default AppWrapper