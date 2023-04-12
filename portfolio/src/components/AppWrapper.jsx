function AppWrapper({children}) {
   return (
      <div className="flex items-center flex-col w-full h-fit bg-gradient-[230deg] from-[#000000] to-[#131827] min-h-screen text-white relative">
         {children}
      </div>
   );
}

export default AppWrapper