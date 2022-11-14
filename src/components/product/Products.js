import React from 'react';
import {  useSelector } from 'react-redux';
import ProductItem from './ProductItem';

// import {changeVendorMenu} from '../../actions/vendor'



const Products = (props)=>{


// const {name,productIds} = props
const  {products,categoryData}  = useSelector((state) => state.vendor);

return(
    <div className=' mg-8 border-slate-300'>
        <div className='hero container max-w-screen-lg mx-auto pb-10 '>
        <img className='object-center object-cover border rounded-lg h-40 w-full  mt-5  ' src={categoryData.imageUrl} />    

        </div>
        <h2 className='capitalize ml-8 font-serif text-2xl'>{categoryData.name}</h2>
    {products.map(product => <ProductItem productData={product} key={product.id} />)}
    </div>
)
}
export default Products