import Animated from "./Animated";

const Container = ({ children }) => {
  return (
    <div class="bg-white/50 dark:bg-[#181a1b]/50 backdrop-blur-2xl inset-shadow-sm inset-shadow-white/40 rounded-2xl p-2 self-baseline overflow-hidden">
      <Animated>
        {children}
      </Animated>
    </div>
  );
};

export default Container;