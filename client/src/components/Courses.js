import './css/Best.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';


// importing components....................
import Navbar from './Navbar.js';
import Footer from './Footer.js';


export default function Courses() {
  const [courseData, setCourseData] = useState([]);
  const getData = async () => {
    try {
      const arr = await axios.get("http://localhost:8000/course/all");
      const arry = arr['data'];
      setCourseData(arry);
    }
    catch (err) {
      console.log("some error while fecting data ! : ", err.message);
    }
  }

  useEffect(() => {
    getData();
  }, [])


  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate("/Detail", { state: data });
  };

  let roundedDiscount;
  return (
    <div>
      <Navbar />
      < div>
        <ul id='list' style={{ listStyle: 'none' }}>
          {
            courseData.map((data) => {

              // calculating discount .................
              roundedDiscount = ((parseFloat(data.actualPrice) - parseFloat(data.price)) / (parseFloat(data.actualPrice))) * 100;
              roundedDiscount = roundedDiscount.toFixed(2);

              return (
                <li>
                  <div class="product-card my-5" style={{width : '100%' , display : 'flex' , fontSize : '20px'}}>
                    <div class="product-image" style={{width : '50%'}}>
                      <span class="discount-tag">{roundedDiscount}% off</span>
                      <img src= {data.image} class="product-thumb" alt="" />
                      <button class="card-btn">add to whislist</button>
                    </div>
                    <div class="product-info" onClick={(e) => handleClick(data)} style={{width : '50%' , paddingTop : "0px" , paddingLeft : '10px'}}>
                      <h2 class="product-brand">{data.courseTitle}</h2>
                      <p class="product-short-des">{data.overview}</p>
                      <span class="price">Rs.{data.price}</span><span class="actual-price"> Rs.{data.actualPrice}</span>
                      <p class="product-short-des">Creator : {data.creatorName}</p>
                    </div>  
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <Footer />
    </div>
  )
}




