import React from 'react'
import './shoppingCart.css'
import goodsList from "./shopping-cart-data"

export default function ShoppingCart() {

    // const {name, price, count} = item

  return (
    <div>
    <div class="list">
    {goodsList.map((item)=>{
    
    
     <div class="item">
    {/* <img src="https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg" alt=""> */}
    <p class="name">{item.name} <span class="tag">【赠品】10优惠券</span></p>
    <p class="spec">白色/10寸</p>
    <p class="price">289.90</p>
    <p class="count">x2</p>
    <p class="sub-total">579.80</p>
  </div>
    })}
  </div>
  <div class="total">
    <div>合计：<span class="amount">1000.00</span></div>
  </div>
  </div>
  )
}
