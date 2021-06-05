import React from 'react'
import Header from './Header';
import { Helmet } from 'react-helmet';
import {userSelector, useSelector} from 'react-redux';
const Home = () => {
    const {products} = useSelector(state=>state.ProductsReducers);
    
    
    return (
        <div>
        
            <Header/>
            <div className="container homepage">
                <h1 className='head1'>HTML, CSS Code Snippets for Animation</h1>
                <div className="row">
                    
                    {products.map(product=>(
                        
                        <div className="col-3 card" key={product.id}>
                            <div className="product">
                                <div className="product__img">
                                    <video width="320" height="240" controls>
                                    <source 
                                    onmouseenter={VideoController(true, this)}
                                    onmouseleave={VideoController(false, this)}
                                    src={`/images/${product.image}`} type="video/mp4"/>
                                    </video>
                                    
                                    {/* <img src={`/images/${product.image}`} alt="Image name" /> */}
                                </div>
                                <div className="product__name">
                                    <h1>
                                    {product.name}
                                    </h1>
                                </div>
                                <div className="product__desc">
                                    <p>
                                    {product.desc}
                                    </p>
                                </div>
                            <button className='btn-code'>Get Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
        
    )
    
}

export default Home