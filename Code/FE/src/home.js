import React, { useState, useEffect } from "react"
import TodoItem from "./ToDoItem"
import "./App.css"

const App = (props) => {
  const [items, setItems] = useState([])
  const [currentItem, setCurrentItem] = useState("")
  useEffect(() => {
    readItem()
  }, [])

  const readItem = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/item", requestOptions)
      .then(response => response.text())
      .then(result => {
        setItems(JSON.parse(result).items)
      })
      .catch(error => console.log('error', error));
  }
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

    fetch("http://127.0.0.1:5000/item", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        readItem()
      })
      .catch(error => console.log('error', error));
  }
  const deleteItem = (deleteItem) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "item": deleteItem });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/item", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        readItem()
      })
      .catch(error => console.log('error', error));
  }
  const addItem = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "item": currentItem });
    setCurrentItem('')
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/item", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        readItem()
      })
      .catch(error => console.log('error', error));
  }
 
  return (
    <div className="wedding">
      <h1> Wedding </h1>
      <input value={currentItem} onChange={(event) => {
        setCurrentItem(event.target.value);
      }}
      />
      <div class="menu">
<ul>
<li id="home"><a href="/home">HOME</a></li>
<li id="news"><a href="/news">NEWS</a></li>
<li id="book"><a href="/book">BOOKING</a></li>
<li id="hall"><a href="/hall">HALL</a></li>
<li id="contact"><a href="/contact">CONTACT</a></li>
<h2 id="look">
  </h2>
  </ul>  
      
</div>
      <button onClick={() => addItem()}>add</button>
      {
        items && items.map(item => {
          return <TodoItem
            onUpdate={() => updateItem(item[0], item[1])}
            onDelete={() => deleteItem(item[0])}
            item={item[0]}
            status={item[1]} />
        })
      }
    </div>
  )

 
}
  

export default App; 
