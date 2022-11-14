export default (card = [], action) => {
  switch (action.type) {
    case "LOAD_DATA_FROM_LOCAL_STORAGE":

        if(localStorage.getItem('myCart'))
        card= JSON.parse(localStorage.getItem('myCart'))
        return card
         
    case "ADD_PRODUCT_TO_CARD":
        // check if this product exits 
        // if exits icrement quantity

      const productExist =   card.find(item => item.product.id === action.payload.id)
      if(productExist)
      {productExist.quantity += 1
        localStorage.setItem('myCart',JSON.stringify(card));
      return card
    }else{
        // creation of cart object with quantity
        card.push({
            product:action.payload,
            quantity: 1
        })
        localStorage.setItem('myCart',JSON.stringify(card));
        return card
    }

 
    case "REMOVE_PRODUCT_TO_CARD":
        // check if quantity bigger than 1 
        // if bugger than one reduce -1
        const selectedProduct = card.find(item => item.product.id === action.payload.id)

        if(selectedProduct.quantity > 1){
            selectedProduct.quantity -=1
            localStorage.setItem('myCart',JSON.stringify(card));
            return card;
        }else{
            const indexOfObject = card.findIndex(item => {
                return  item.product.id === action.payload.id
              });
                       
              card.splice(indexOfObject, 1);
              localStorage.setItem('myCart',JSON.stringify(card));
            return card;
        }

        case"CLEAR_CART_DATA":
        localStorage.setItem('myCart',[])
        card=[]
        return card
        default:
      return card;
  }
};
