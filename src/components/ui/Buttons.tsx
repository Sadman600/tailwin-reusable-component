import cn from "../../utils/cn";
import { getBtnColor, getVariant } from "../../utils/btn";
import { forwardRef } from "react";
type TRef = HTMLButtonElement;
const Buttons = forwardRef<TRef>((props, ref) => {
  const { className, textLevel, variant, color, ...rest } = props;
  return (
    <>
      <button
        {...rest}
        ref={ref}
        className={cn(getVariant(variant), getBtnColor(color), className)}
      >
        {textLevel}
        {/* {children} */}
      </button>
    </>
  );
});

export default Buttons;
