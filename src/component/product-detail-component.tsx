import React, {FunctionComponent} from "react";
import Product from "../model/Product";
import {Link} from "react-router-dom";

type Props = { product: Product };

const ProductDetailComponent:FunctionComponent<Props> = ({product}) => {

    return (
        <>
            <div className={"container d-flex justify-content-center"}>
                <div className={"d-flex flex-row"}>
                    <img src={product.url} alt={"Product"} style={{maxWidth:250, maxHeight:250}}/>
                    <div className={"d-flex flex-column"}>
                        <p>Id : {product.id}</p>
                        <p>Name : {product.name}</p>
                        <p>Quantity : {product.quantity}</p>
                    </div>
                </div>
            </div>
            <div className={"d-flex justify-content-center flex-row"}>
                <div className={"mr-5"}>
                    <Link to={"/"}>Retour</Link>
                </div>
                <div>
                    <Link to={"/"}>Edit</Link>
                </div>
            </div>
        </>
    )
}

export default ProductDetailComponent;