import React, {FunctionComponent, useEffect, useState} from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import PRODUCTS from '../model/product-mock';
import Product from "../model/Product";
import ProductDetailComponent from "../component/product-detail-component";

type Params = { id: string };

const ProductDetail:FunctionComponent<RouteComponentProps<Params>> = ({match}) => {

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        PRODUCTS.forEach(productMap => {
            if (productMap.id.toString() == match.params.id.toString()) {
                setProduct(productMap);
            }
        })
    }, [match.params.id])

    return (
        <>
            { product ? (<ProductDetailComponent product={product} />) : (
                <div className={"d-flex justify-content-center align-items-center"}>
                    <p className={"h1 mt-5"}>Product not existing</p>
                </div>
            )}
        </>
    )
}
export default ProductDetail;