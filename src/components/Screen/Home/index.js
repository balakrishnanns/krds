import React, { useEffect, useState } from "react";
import "./style.scss"
import Slider from "react-slick";
import { getProductList } from "../../../api";
import { Card } from "../../Common/Card";
import { SwiperCard } from "../../Common/Swiper";

export const Home = () => {

    const [datum, setDatum] = useState(null)
    const [show, setShow] = useState(window.innerWidth <= 768);

    const getList = async () => {
        const { data } = await getProductList();
        const { features } = data;
        setDatum(features)
    }

    useEffect(() => {
        getList();
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true
    };

    useEffect(() => {
        const handleResize = () => setShow(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            {!show ?
                <>
                    <div className="grid-container">
                        {datum?.length > 0 ? (
                            datum.map((item, index) => (
                                
                                <Card
                                    bgColor={`bgColor` + index}
                                    logoImage={item.logo}
                                    title={item.title}
                                    subtext={item.desc}
                                    productImage={item.image}
                                />
                            ))
                        ) : (
                            <div>No record Found</div>
                        )}
                    </div>
                </> :
                <>
                    <div>
                        <Slider {...settings}>
                            {datum?.length > 0 ? (
                                datum.map((item, index) => (
                                    <SwiperCard
                                        bgColor={`bgColor` + index}
                                        logoImage={item.logo}
                                        title={item.title}
                                        subtext={item.desc}
                                        productImage={item.image}
                                    />
                                ))
                            ) : (
                                <div>No record Found</div>
                            )}
                        </Slider>
                    </div></>}

        </>
    )
}