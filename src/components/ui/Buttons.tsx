import cn from "../../utils/cn";

const Buttons = (props) => {
  return (
    <>
      <button
        className={cn(
          "px-4 py-4 bg-red-700 rounded-lg",
          {
            " bg-white border-solid border-2 border-indigo-900":
              props.variantOutline,
          },
          props.className
        )}
      >
        Click
      </button>
    </>
  );
};

export default Buttons;
