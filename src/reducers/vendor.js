export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_VENDOR_BY_ID":
      return {
        ...state,
        vendor: action.payload?.vendor?.data,
        error: action.payload.error,
      };
    case "CHANGE_VENDOR_BY_ID":
      // productIds,vendorId
      const products = state.vendor.menu.products.filter(
        (product) => action.payload.productIds.indexOf(product.id) != -1
      );
      const categoryData = state.vendor.menu.categories.find(
        (item) => item.id === action.payload.vendorId
      );
      return {
        ...state,
        categoryData,
        products: products,
      };
    case "ON_SCROLL_EVENT":
      return {
        ...state,
        isScrollValid: action.payload,
      };
    default:
      return { ...state };
  }
};
