import "./comment.css";
import { useState } from "react";
// 区分当前表单的状态
let status = 'add'
// 当前修改的是哪一个
let updateId  = ""
function App() {
  const [list, setList] = useState([]);
  const [uname, setUname] = useState();
  const [time, setTime] = useState();
  const [content, setContent] = useState();
  // 是否让表单显示和隐藏
  const [formStatus, setFormStaus] = useState(false);
  let id = list.length;

  const handleAdd = () => {
    if(status == 'add'){
      setList([...list, { uname, time, content, id }]);
    }else{
      let data = JSON.parse(JSON.stringify(list));
      data.forEach((item,index)=>{
        if(item.id == updateId){
          let onedata = {id:updateId,uname, time, content}
          data.splice(index,1,onedata)
        }
      })
      setList(data)
    }
    // 重置状态
    status = 'add'
    updateId = ''
    setUname('')
    setTime('')
    setContent('')
    setFormStaus(false)
  };

  const handleDelete = (id) => {
    let data = JSON.parse(JSON.stringify(list));
    data.forEach((item, index) => {
      if (item.id == id) {
        data.splice(index, 1);
      }
    });
    setList(data);
  };
  const changeStatus =()=>{
    status = 'add'
    setFormStaus(true)
  }
  const handleEdit =(row)=>{
    status = 'update'
    setFormStaus(true)
    updateId = row.id
    setUname(row.uname)
    setTime(row.time)
    setContent(row.content)
    
  }
  return (
    <div className="App">
      {/* 左边区域 */}
      <div className="left">
        {list.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="user">
                <p>{item.uname}</p>
                <p>{item.time}</p>
              </div>
              <div className="list">
                <p>{item.content}</p>
              </div>
              <div className="button">
                <button onClick={()=>handleEdit(item)}>编辑</button>
                <button onClick={() => handleDelete(item.id)}>删除</button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 右边区域 */}
      <div className="right">
        <button onClick={changeStatus}>Add</button>
        {formStatus ? (
          <div className="send">
            <div className="content">
              姓名：
              <input
                type="text"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
              ></input>
              时间：
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              ></input>
              内容：
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></input>
            </div>
            <button onClick={handleAdd}>提交</button>
          </div>
        ) : <></>}
      </div>
    </div>
  );
}

export default App;