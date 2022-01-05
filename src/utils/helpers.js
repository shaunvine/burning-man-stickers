export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const getUniqueValues = (data, type) => {
  // console.log(type)
  let unique = data.map((items) => items[type]);
  return ["all", ...new Set(unique)];
};
