import Animated from "./Animated";

const Container = ({ children }) => {
  return (
    <div class="bg-linear-to-t to-green-800/40 from-blue-500/20 backdrop-blur-2xl inset-shadow-sm inset-shadow-white rounded-2xl p-2 self-baseline overflow-hidden z-20 drop-shadow-2xl drop-shadow-green-800/80">
      <Animated>
        {children}
      </Animated>
    </div>
  );
};

export default Container;