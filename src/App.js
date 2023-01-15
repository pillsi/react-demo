import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";



function App() {

  const [list, setList] = useState([])
  const [uname, setUname] = useState()
  const [time, setTime] = useState()
  const [content, setContent] = useState()

  // let list =    //   {
  //     id:1,
  //     uname:"赵云",
  //     time:"10:36",
  //     content:"看我常山赵子龙来也"
  //   },
  //   {
  //     id:2,
  //     uname:"马超",
  //     time:"10:27",
  //     content:"西凉铁骑大将军马超在此"
  //   }
  //   ]  
  let id = list.length

  const handleAdd = () => {
    
    console.log(id);
    setList([...list,{uname,time,content,id}])
  }

  const handleDelete = (id) => {
    let data = JSON.parse(JSON.stringify(list))
    data.forEach((item, index) => {
      if(item.id == id){
        data.splice(index, 1)
      }
    });
    setList(data)
  }    


  return (
    <div className="App">
    {/* 左边区域 */}
      <div className="left">

      {list.map((item)=>{
        return(
        <div className="item" key={item.id}>
          <div className="user">
            <p>{item.uname}</p>
            <p>{item.time}</p>
          </div>
          <div className="list">
            <p>{item.content}</p>
          </div>
          <div className="button">
            <button>编辑</button>
            <button onClick={()=>handleDelete(item.id)}>删除</button>
          </div>
        </div>
        )
      })}

      </div>

      {/* 右边区域 */}
      <div className="right">
      <div className="send">
        <div className="content">
          姓名：<input type="text" value={uname} onChange={(e)=>setUname(e.target.value)}></input>
          时间：<input type="text" value={time} onChange={(e)=>setTime(e.target.value)}></input>
          内容：<input type="text" value={content} onChange={(e)=>setContent(e.target.value)}></input>
        </div>
        <button onClick={handleAdd}>提交</button>
        </div>
        {/* <div className="send">
        <div className="content">
          <p>123</p>
        </div>
        <button>提交</button>
        </div> */}

      

      </div>

    </div>
  );
}

export default App;
