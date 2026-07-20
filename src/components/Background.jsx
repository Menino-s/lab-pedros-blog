import Headr from './header'
import Stickers from './Stickers';
import Footer from './Footer';

const LayoutWrapper = ({ children }) => {
  return (
    <div class="relative bg-[url(/background.jpg)] bg-cover bg-no-repeat bg-fixed cursor-[url('./assets/mouse1.png')],_pointer min-h-screen z-10">
      <div class="absolute inset-0 bg-black/20 bg-[radial-gradient(ellipse,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none"></div>
      <div class="relative z-20 overflow-hidden">
        <Headr />
          {children}
        <Footer />
      </div>
    </div>
  );
};

export default LayoutWrapper;