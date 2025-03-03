import React, {FunctionComponent, useState} from "react";
import Product from "../model/Product";
import {useHistory} from "react-router-dom";

type Props = { product: Product, borderColor?:string }

const ProductComponent:FunctionComponent<Props> = ({product, borderColor = '#647854'}) => {

    const [color, setColor] = useState<string>();
    const history = useHistory();

    const showBorder = () => {
        setColor(borderColor);
    }

    const goToDetail = (id:number) => {
        history.push(`/product/${id}`);
    }

    const hideBorder =() => {
        setColor("#f5f5f5");
    }

    return (
            <div className={"col-4 shadow rounded m-2"}
                 onClick={() => goToDetail(product.id)}
                 onMouseOver={showBorder} onMouseLeave={hideBorder}
                 style={{ maxWidth: 350, maxHeight:250, borderColor: color, borderWidth: "5px", borderStyle: "solid"}}>
                <div className={"d-flex flex-row"}>
                    <p className={"m-2 mt-1"}>
                        <img src={product.url} alt="product" style={{ maxWidth: "150px", maxHeight: "150px" }} />
                    </p>
                    <div className={"d-flex flex-column mt-3 ml-3"}>
                        <p>{product.id}</p>
                        <p>{product.name}</p>
                    </div>
                </div>
                <div className={"d-flex flex-row justify-content-left m-3"}>
                    <p>Retour</p>
                </div>
            </div>
    );
}

export default ProductComponent;