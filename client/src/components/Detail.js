import React from 'react'
import './css/Details.css'
import { useLocation , useNavigate} from 'react-router-dom';

import Navbar from './Navbar'
import Footer from './Footer'; 

export default function Detail() {
    const location = useLocation();
    const data = (location.state);
    const navigate = useNavigate(); 

    const handlePayment= (data)=>{
        navigate(`/payment` ,  { state: data }); 
    }

    let roundedDiscount = ((parseFloat(data.actualPrice) - parseFloat(data.price)) / (parseFloat(data.actualPrice))) * 100;
    roundedDiscount = roundedDiscount.toFixed(2);

    return (
        <div>
            <Navbar/>
            <section class="product-details">
                <div class="image-slider">
                    <div class="product-images">
                        <img src="" class="active" alt="1" />
                        <img src="" alt="2" />
                        <img src="" alt="3" />
                        <img src="" alt="4" />
                    </div>
                </div>

                <div class="details">
                    <h2 class="product-brand">{data.topic}</h2>
                    <p class="product-short-des">{data.overview}</p>
                    <span class="product-price">Rs.{data.price}</span>
                    <span class="product-actual-price">Rs.{data.actualPrice}</span>
                    <span class="product-discount">({roundedDiscount}% off)</span>

                    <p id = 'creatorName'>Creator : {data.creatorName}</p>

                    {/* <input type="radio" name="size" value="s" checked hidden id="s-size"/>
                    <label for="s-size" class="size-radio-btn check">s</label>
                    <input type="radio" name="size" value="m" hidden id="m-size"/>
                    <label for="m-size" class="size-radio-btn">m</label>
                    <input type="radio" name="size" value="l" hidden id="l-size"/>
                    <label for="l-size" class="size-radio-btn">l</label>
                    <input type="radio" name="size" value="xl" hidden id="xl-size"/>
                    <label for="xl-size" class="size-radio-btn">xl</label>
                    <input type="radio" name="size" value="xxl" hidden id="xxl-size"/>
                    <label for="xxl-size" class="size-radio-btn">xxl</label> */}

                    <button class="btn cart-btn">add to cart</button>
                    <button class="btn" onClick={(e)=>{
                        handlePayment(data); 
                    }}>Buy Now</button>
                </div>


            </section>
            <section class="detail-des">
                <h2 class="heading">description</h2>
                <p class="des">{data.description}</p>
                <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
            </section>
            <Footer/>
        </div>
    )
}
