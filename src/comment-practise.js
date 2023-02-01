import "./comment.css";



function App() {

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


  return (
    <div className="App">
    {/* 左边区域 */}
      <div className="left">
      {}
        <div className="item">
          <div className="user">
            <p>123</p>
            <p>123</p>
          </div>
          <div className="list">
            <p>123</p>
          </div>
          <div className="button">
            <button>编辑</button>
            <button>删除</button>
          </div>
        </div>
        

      </div>

      {/* 右边区域 */}
      <div className="right">
      <div className="send">
        <div className="content">
          姓名：<input type="text"></input>
          时间：<input type="text"></input>
          内容：<input type="text"></input>
        </div>
        <button>提交</button>
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
