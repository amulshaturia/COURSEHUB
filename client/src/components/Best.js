import React from 'react'
import "./css/Best.css"

import {Link} from 'react-router-dom'; 

// importing functions............
import {moveRight , moveLeft} from './UTILS.js' ; 

export default function Best() {

    const data = {   
        topic : "DSA",
        price : 50 , 
        overview : "This is a course on DSA !",
        actualPrice : 100 ,
        overview : "hi there !"
    }
    return (
        <div>
            <section class="product">
                <h2 class="product-category">best selling</h2>

                <button className="pre-btn" onClick={moveLeft}><img src={require("./img/arrow.png")}alt="arrow"/></button>
                <button className="nxt-btn" onClick={moveRight}><img src ={require("./img/arrow.png")} alt="arrow"/></button>

                <div class="product-container">
                    <div class="product-card my-5">
                        <div class="product-image">
                            <span class="discount-tag">{data.price} % off</span>
                            <img src="img/card1.png" class="product-thumb" alt=""/>
                                <button class="card-btn">add to whislist</button>
                        </div>
                        <Link to = {{pathname : "/Detail" , state : {data} }} >
                            <div class="product-info">
                                <h2 class="product-brand">{data.topic}</h2>
                                <p class="product-short-des">{data.overview}</p>
                                <span class="price">rs {data.price}</span><span class="actual-price">rs {data.actualPrice}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
