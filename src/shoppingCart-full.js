import React, { useState } from 'react'
import './shoppingCart.css'
// import goodsList from "./shopping-cart-data"

export default function ShoppingCart() {

    const [list, setList] = useState([

      {
        id: "4001172",
        name: "称心如意手摇咖啡磨豆机咖啡豆研磨机",
        price: 289.9,
        picture:
          "https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg",
        count: 2,
        spec: { color: "白色" },
      },
      {
        id: "4001009",
        name: "竹制干泡茶盘正方形沥水茶台品茶盘",
        price: 109.8,
        picture:
          "https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png",
        count: 3,
        spec: { size: "40cm*40cm", color: "黑色" },
      },
      {
        id: "4001874",
        name: "古法温酒汝瓷酒具套装白酒杯莲花温酒器",
        price: 488,
        picture:
          "https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png",
        count: 1,
        spec: { color: "青色", sum: "一大四小" },
      },
      {
        id: "4001649",
        name: "大师监制龙泉青瓷茶叶罐",
        price: 139,
        picture:
          "https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png",
        count: 1,
        spec: { size: "小号", color: "紫色" },
        gift: "50g茶叶,清洗球",
      },
    ]);    

    const handleSub = (item) => {
       return item.price * item.count
    }

    let total = 0;
    list.forEach((item)=>{
      total = total + handleSub(item)
    })


  return (
    <div>
    <div class="list">
    {list.map((item)=>{
      return <div class="item" key={item.id}>
    <img src={item.picture}></img>
    {item.gift ? (<p class="name">{item.name} <span class="tag">【赠品】{item.gift}</span></p>) : <p class="name">{item.name}</p>}
    {item.spec.size? (<p class="spec">{item.spec.size} / {item.spec.color}</p>) : <p class="spec">{item.spec.color}</p>}
    <p class="price">{item.price.toFixed(2)}</p>
    <p class="count">x{item.count}</p>
    {/* <p class="sub-total">{(item.count * item.price).toFixed(2)}</p> */}
    <p class="sub-total">{(handleSub(item)).toFixed(2)}</p>
  </div>
    })}
  </div>
  <div class="total">
    <div>合计：<span class="amount">{(total).toFixed(2)}</span></div>
  </div>
  </div>
  )
}
