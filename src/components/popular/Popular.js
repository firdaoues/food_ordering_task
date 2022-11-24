import React from 'react';

import ProductItem from '../product/ProductItem';

 const Popular=(props) =>{
const {popularProducts} = props


return (
    
    <div className="bg-neutral-50 pb-5" >
        <h2 className='capitalize ml-20 font-nunito text-2xl'>Popular</h2>
        {popularProducts.map(product=>(<ProductItem productData={product} key={product.id} />))}
    </div>
)

}
export default Popular