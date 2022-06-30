import React,{useContext} from 'react'
import Heart from '../../assets/Heart'
import {Navigate, useNavigate} from "react-router-dom";
import {PostContext} from "../../contextStore/PostContext";
import "./postcards.css";
import Cart from './Cart.js'


function PostCards({product,index}) {
    let {setPostContent} = useContext(PostContext)//at the time of onClick on post ,the specified post item assigned to postContent by setPostContent function and it will be stored in a global context PostContext
 
    const navigate=useNavigate()//at the time of onClick on post , we want redirect to the view post page

    return (
      <div className="card" key={index} onClick={()=>{
        setPostContent(product)
        navigate("/view")
      }}>
        <div className="favorite">
          <Heart></Heart>
        </div>
        <div className="image">
          <img src={product.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; {product.price}</p>
          <span className="category"> {product.category} </span>
          <p className="name"> {product.name}</p>
        </div>
        <div className="date">
          <span>{<Cart/>}</span>
         <span style={{padding:"30px"}}><button id='buy'><a href="https://stripepaymentnode.herokuapp.com/">Buy Now</a></button></span>   
        </div>
      </div>
       
    )
   
}
<script>
  const btn = document.getElementById('Buy')
  btn.EventListener('click', Buy() ={
    <a href="https://stripepaymentnode.herokuapp.com/">Buy Now</a>
  })
</script>

export default PostCards;
