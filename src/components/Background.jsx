import Headr from './header'
import Stickers from './Stickers';
import Footer from './Footer';

const LayoutWrapper = ({ children }) => {
  return (
      <div class="relative bg-[url(/background.jpeg)] bg-cover bg-no-repeat bg-fixed cursor-[url('./assets/mouse1.png')],_pointer min-h-screen">
      <div class="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-size-[10px_10px] pointer-events-none"></div>
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