import React, {FunctionComponent, useState} from "react";
import Product from "../model/Product";

type Props = { product: Product };

const ProductEditComponent: FunctionComponent<Props> = ({product}) => {
    return (
        <div>Edition du produit {product.name}</div>
    )
}