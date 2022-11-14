import React from 'react';

import ProductItem from '../product/ProductItem';

 const Popular=(props) =>{
const {popularProducts} = props


return (
    <div>
        <h2 className='capitalize ml-16 font-serif text-2xl'>Popular</h2>
        {popularProducts.map(product=>(<ProductItem productData={product} key={product.id} />))}
    </div>
)

}
export default Popular