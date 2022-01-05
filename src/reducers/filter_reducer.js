import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    // let maxPrice = action.payload.map((p) => p.price);
    // maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [];
    // if (sort === "price-lowest") {
    //   tempProducts = filtered_products.sort((a, b) => {
    //     // if (a.price < b.price) {
    //     //   return -1
    //     // }
    //     // if (a.price > b.price) {
    //     //   return 1
    //     // }
    //     // return 0
    //     return a.price - b.price;
    //   });
    // }
    // if (sort === "price-highest") {
    //   tempProducts = filtered_products.sort((a, b) => {
    //     // if (b.price < a.price) {
    //     //   return -1
    //     // }
    //     // if (b.price > a.price) {
    //     //   return 1
    //     // }
    //     // return 0
    //     return b.price - a.price;
    //   });
    // }

    // sorts stickers in a random order
    if (sort === "randomstickers") {
      tempProducts = filtered_products.sort(function () {
        return 0.5 - Math.random();
      });
    }
    // sorts A - Z
    if (sort === "name-a") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    // sorts Z - A
    if (sort === "name-z") {
      tempProducts = filtered_products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    // console.log("filter");
    const { all_products } = state;
    const {
      text,
      category,
      company,
      year,
      shape,
      color,
      // price,
      themecamp,
      artproject,
      artcar,
      official,
    } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      );
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    if (year !== "all") {
      tempProducts = tempProducts.filter((product) => product.year === year);
    }
    if (shape !== "all") {
      tempProducts = tempProducts.filter((product) => product.shape === shape);
    }
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }
    // filter by price
    // tempProducts = tempProducts.filter((product) => product.price <= price);
    // filter by themecamp
    if (themecamp) {
      tempProducts = tempProducts.filter(
        (product) => product.themecamp === true
      );
    }
    // filter by artproject
    if (artproject) {
      tempProducts = tempProducts.filter(
        (product) => product.artproject === true
      );
    }
    // filter by artcar
    if (artcar) {
      tempProducts = tempProducts.filter((product) => product.artcar === true);
    }
    // filter by official sticker
    if (official) {
      tempProducts = tempProducts.filter(
        (product) => product.official === true
      );
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        year: "all",
        shape: "all",
        category: "all",
        color: "all",
        // price: state.filters.max_price,
        themecamp: false,
        artproject: false,
        artcar: false,
        official: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
