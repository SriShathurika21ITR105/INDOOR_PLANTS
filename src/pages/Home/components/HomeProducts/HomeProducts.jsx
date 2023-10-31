import React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import "./homeProducts.scss";
import { data } from "../../../../data/data";
const HomeProducts = () => {
    return (
         <div className="home-products page-container">
             <h3 data-aos="fade-up" className='text-center part-title'>Beautiful Pots for Indoor Plants</h3>
             <div data-aos="fade-up" className="divider-part">
                 <div className="divider"></div>
             </div>
         <div className="row">
                 {data.slice(96, 107).map((item) => (
                    <ProductCard
                     key={item.id}
                        item={item}
                         image={item.image}
                         title={item.title}
                         category={item.category}
                         price={item.price}
                         oldPrice={item.oldPrice}
                     />
                ))}
            </div>
        </div>
    )
}

export default HomeProducts;