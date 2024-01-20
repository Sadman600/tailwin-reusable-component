export const getVariant = (variant) => {
  switch (variant) {
    case "contained":
      return "btn-contained";
    case "outlined":
      return "btn-outlined";

    default:
      return "btn-contained";
  }
};

export const getBtnColor = (color) => {
  switch (color) {
    case "success":
      return "bg-green-500";
  }
};

// export  const  btnFn = {
//     getVariant,
// }
