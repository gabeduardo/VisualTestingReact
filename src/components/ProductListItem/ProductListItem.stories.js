import React from 'react';
import ProductListItem from './ProductListItem'
import { action } from "@storybook/addon-actions";



export default { title: "ProductListItem"
};

 export const standard = () => (
<ProductListItem
    name="Standard coffee"
    price="2.50"
    onAddToCart={()=>{
        console.log('clicked')
    }}
    imageUrl="https://source.unplash.com/tNALoIZhqVM/200x100"


/>);
    