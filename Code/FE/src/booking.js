import React, { useState,useEffect } from "react"
import TodoItem from "./ToDoItem"
import "./booking.css"

const App = (props) => {
  const [Names, SetNames] = useState("")
  const [currentname, Setcurrentname] = useState("")
  const [currentdate, Setcurrentdate] = useState("")
  const [currentshift, Setcurrentshift] = useState("")
  const [currentnotable, Setcurrentnotable] = useState("")
  const [currentmenu, Setcurrentmenu] = useState("")
  const [currentservices, Setcurrentservices] = useState("")
  const [currentphone, Setcurrentphone] = useState("")
  const [currentmail, Setcurrentmail] = useState("")
  const [currenthall, Setcurrenthall] = useState("")
  useEffect(() => {
    readData()
  }, [])
  
  const readData = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/data", requestOptions)
      .then(response => response.text())
      .then(result => {
        SetNames(JSON.parse(result).Names)
      })
      .catch(error => console.log('error', error));
  }
/*
  const updateItem = (updateItem, currentStatus) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if (currentStatus === 'Completed') {
      currentStatus = 'Not Started'
    } else {
      currentStatus = 'Completed'
    }
    var raw = JSON.stringify({ "item": updateItem, "status": currentStatus });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/data", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        readItem()
      })
      .catch(error => console.log('error', error));
  }*/

  const addData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    
    var raw1 = JSON.stringify({ "Date": currentdate,"Shift": currentshift,"Hall": currenthall,"NoTable": currentnotable,
    "Menu": currentmenu, "Service": currentservices,"Name": currentname,"Phone": currentphone,"Mail": currentmail  });
    Setcurrentdate('')
    Setcurrentshift('')
    Setcurrenthall('')
    Setcurrentnotable('')
    Setcurrentmenu('')
    Setcurrentservices('')
    Setcurrentname('')
    Setcurrentphone('')
    Setcurrentmail('')
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw1,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/data", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        readData()
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="booking">
        <img class="hinhbook" />
        <div class="menu">
        <ul>
        <li ><a id="wd">wd</a></li>
        <li ><a id="home" href="/home">HOME</a></li>
        <li ><a id="news" href="/news">NEWS</a></li>
        <li><a id="book" href="/book">BOOKING</a></li>
        <li><a id="hall" href="/hall">HALL</a></li>
        <li><a id="contact" href="/contact">CONTACT</a></li>
        <h2 id="look"></h2>
          </ul> 
          </div>
          <div>
              <h2 id="booking"> Booking </h2>
          </div>
                <div class="book">
                    <div id="menu">
                    <h4> Menu </h4>
                    <select id="chonmenu" onChange={(event) => {
                        Setcurrentmenu(event.target.value);
                }}>
                <option value="A" >A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                </select>
                </div>
            <div id="date">
                <h4 > Date </h4>
                <input value={currentdate} onChange={(event) => {
                    Setcurrentdate(event.target.value);
                }}
                />
                </div>
                            <div id="shift">
                <h4 > Shift </h4>
                <select id="chonshift" onChange={(event) => {
                    Setcurrentshift(event.target.value);
            }}>
            <option value="Morning" >Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            </select>
            </div>
                <div id="halls">
                <h4> Hall </h4>
                    <select id="chonhall" onChange={(event) => {
                        Setcurrenthall(event.target.value);
                }}>
                <option value="I" >I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                </select>
                </div>
        <div id="service">
        <h4 > Service </h4>
            <select id="chonservice" onChange={(event) => {
                Setcurrentservices(event.target.value);
        }}>
        <option value="mua lua" >mua lua</option>
        <option value="mua mi">mua mi</option>
        <option value="ca ha">ca ha</option>
        <option value="man hinh 100 inch">man hinh 100 inch</option>
        <option value="mua cot">mua cot</option>
        <option value="xiec khi">xiec khi</option>
        </select>
        </div>
      <div id="table">
      <h4> Number of table </h4>
      <input value={currentnotable} onChange={(event) => {
        Setcurrentnotable(event.target.value);
      }}
      />
      </div>
          <div id="name">
      <h4> Name </h4>
      <input value={currentname} onChange={(event) => {
        Setcurrentname(event.target.value);
      }}
      />
      </div>
      <div id="phone">
      <h4> Phone </h4>
      <input value={currentphone} onChange={(event) => {
        Setcurrentphone(event.target.value);
      }}
      />
      </div>
      <div id="mail">
      <h4> Mail </h4>
      <input value={currentmail} onChange={(event) => {
        Setcurrentmail(event.target.value);
      }}
      />
      </div>
      <button class="clickbook" onClick={() => addData()}>Add</button>
        </div>
        </div>
     
  )

}


export default App;
