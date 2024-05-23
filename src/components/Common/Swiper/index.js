import React from "react";
import "./style.scss";

export const SwiperCard = ({ logoImage, title, subtext, productImage, bgColor }) => {
    return (
        <>
            <div >
                <div className={`${bgColor}`}>
                    <div className={`cardLayout`}>
                        <div className="cardtext">
                            <div><img src={logoImage} className="logoImage" /></div>
                            <div className="title">{title}</div>
                            <hr className="hr" />
                            <div className="subtext">{subtext}</div>
                            <div><img src={productImage} className="productImage" /></div>
                        </div>                  
                    </div>
                </div>
            </div>
        </>
    )
}