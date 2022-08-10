// import logo from './logo.svg';
// import './App.css';
import io from 'socket.io-client'
import React, { useEffect, useState } from 'react';
import horse from './images/horse.png'
// import axios from 'axios'



// console.log(socket.res);

function App() {

  const [posts, setPosts] = useState([])
  // const sortdata = [];

  useEffect(() => {
    const socket = io('http://localhost:3002');
    socket.on('connect', () => console.log(socket.connected));
    socket.emit('start')
    socket.on('ticker', function (data) {
     const sortdata = data.sort(( a, b ) =>  b.distance - a.distance);
      setPosts(sortdata)

    })
  }, [])


  let count = 1;
  
  return (

    <div className='horse'>
      <h3 className='horse__title'>Horses</h3>
      <div className='horse__inner'>
        <table className='horse__table'>

          <tr>
            <th>№</th>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Distance</th>
            <th></th>
          </tr>

          {posts.map(post => (

            <tr>
              <td>{count++}</td>




              <td><img src={horse} alt=""></img></td>

              <td></td>
              <td key={post.name}>{post.name}</td>
              <td>{post.distance}</td>
            </tr>

          ))}


        </table>

      </div>

    </div>
  );
}

export default App;
