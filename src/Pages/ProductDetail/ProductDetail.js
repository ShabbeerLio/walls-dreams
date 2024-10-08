import React, { useEffect, useState } from 'react';
import "./ProductDetail.css";
import { Link, useLocation, useParams } from 'react-router-dom';
import CategoriesData from '../Products/CategoriesData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, } from 'swiper/modules';
import { } from "react-icons/ci";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ProductHighlight from './ProductHighlight';

const ProductDetail = (props) => {
    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = props.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }
    }, [props.title, props.descriptions, location.pathname]);

    const { pathName } = useParams();

    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await CategoriesData;
                const data = response;
                const subcategories = data.reduce((acc, category) => acc.concat(category.subcategories), []);
                const products = subcategories.reduce((acc, category) => acc.concat(category.Products), []);
                setApiData(products);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const formatPathname = (pathName) => {
        return pathName.toLowerCase().replace(/\s+/g, '-');
    };

    const product = apiData?.find(sub => formatPathname(sub.title) === pathName);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    return (
        <div className='ProductDetail'>
            {loading ? (
                <div className="loader">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                product && (
                    <>
                        <ProductHighlight data={product} />
                        <div className='ProductDetail-main'>
                            <div className='ProductDetail-card'>
                                <div className='ProductDetail-box'>
                                    <div className='ProductDetail-left'>
                                        <img src={product.cover} alt={product.title} />
                                    </div>
                                    <div className='ProductDetail-right'>
                                        <h2>{product.title}</h2>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                                <div className="productDetail-details">
                                    <h4>{product.title2}</h4>
                                    <p>{product.description2}</p>
                                    <div className="productDetail-details-box">
                                        <h3>{product.title} at a glance</h3>
                                        <div className="productDetail-box-features">
                                            <div className="productDetail-box-features-left">
                                                <h4>Facts about Arjo</h4>
                                                <div className="productDetail-features-box">
                                                    <ul>
                                                        {product.mainfet.map((i) => (
                                                            <li>
                                                                <p>{i.desc}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="productDetail-box-features-right">
                                                <h4>We ensure value by</h4>
                                                <div className="productDetail-features-box-right">
                                                    {product.mainhigh.map((i) => (
                                                        <div className="productDetail-features-box-card">
                                                            {i.logo}
                                                            <h5>{i.title}</h5>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {product.feature.map((item) => (
                                        <div className="productDetail-highlights">
                                            <div className="productDetail-highlights-left">
                                                <img src={item.cover} alt="" />
                                            </div>
                                            <div className="productDetail-highlights-right">
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                                <div className="productDetail-link">
                                                    <Link to={item.link}>Visit the Company Website :- {item.linkname}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )
            )}

            <div className="productdetail-box-product">
                <div className='ProductDetail-main'>
                    <h3>All Products</h3>
                    <div className="ProductDetail-products">
                        <Swiper
                            className="mySwiper"
                            slidesPerView={4}
                            spaceBetween={20}
                            loop={true}
                            speed={1000}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            breakpoints={{
                                // when window width is >= 320px
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                // when window width is >= 480px
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                // when window width is >= 1024px
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {apiData?.map((i) => (
                                <SwiperSlide key={i.id}>
                                    <Link to={{
                                        pathname: `/pukhya/productdetail/${formatPathname(i.title)}/`
                                    }} onClick={scrollToTop} key={i.id}>
                                        <div className="Subcategory-categories-card">
                                            <img src={i.cover} alt={i.title} />
                                            <div className="Subcategory-card-detail">
                                                <h2>{i.title}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
