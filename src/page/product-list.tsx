import React, {FunctionComponent, useEffect, useState} from 'react';
import Product from "../model/Product";
import PRODUCTS from "../model/product-mock";
import ProductComponent from "../component/product-component";


const ProductList: FunctionComponent = ()=> {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(PRODUCTS);
    })

    return (
        <div className={"container mt-5"}>
            <div className={"row justify-content-center"}>
                {products.map((product) => (
                    <ProductComponent key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList;