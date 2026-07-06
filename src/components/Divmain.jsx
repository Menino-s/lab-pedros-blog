const Divmain = ({ children }) => {
  return (
    <div class="grid justify-center font-comicsans text-white text-shadow-2xs/40 text-shadow-black z-20">
      <div class="grid bg-green-800/30 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[6px_6px] backdrop-blur-xl ring-2 ring-inset ring-white/50 inset-shadow-sm inset-shadow-white/90 p-3 rounded-t-2xl gap-1 max-w-400 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Divmain;