import Animated from "./Animated";

const Container = ({ children }) => {
  return (
    <div class="bg-white dark:bg-[#181a1b] inset-shadow-sm inset-shadow-white/40 rounded-t-2xl p-2 self-baseline overflow-hidden">
      <Animated>
        {children}
      </Animated>
    </div>
  );
};

export default Container;