import Headr from './header'
import Stickers from './Stickers';
import Footer from './Footer';

const LayoutWrapper = ({ children }) => {
  return (
      <div class="relative bg-[url(/background.jpeg)] bg-cover bg-no-repeat bg-fixed cursor-[url('./assets/mouse1.png')],_pointer min-h-screen">
      <div class="absolute inset-0 bg-black/50 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[4px_4px] pointer-events-none"></div>
      <div class="relative z-10">
        <Headr />
        <Stickers />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default LayoutWrapper;