import cn from "../../utils/cn";
import { getBtnColor, getVariant } from "../../utils/btn";

const Buttons = (props, { ...rest }, { children }) => {
  return (
    <>
      <button
        {...rest}
        className={cn(
          getVariant(props.variant),
          getBtnColor(props.color),
          props.className
        )}
      >
        {props.textLevel} {children}
      </button>
    </>
  );
};

export default Buttons;
