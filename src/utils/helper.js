export const getMaterial = (id) => {
  switch (id) {
    case 2:
      return "cotton";
    case 3:
      return "leather";
    case 4:
      return "lycra";
    case 5:
      return "plastic";
    case 6:
      return "polyester";
  }
};

export const getColor = (id) => {
  switch (id) {
    case 2:
      return "black";
    case 3:
      return "red";
    case 4:
      return "yellow";
    case 5:
      return "green";
    case 6:
      return "blue";
  }
};
