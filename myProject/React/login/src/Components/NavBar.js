import React from 'react'

export default function NavBar() {

    let navBox={
        padding :'10px',
        margin: '20px',
        textAlign:'center'
    }
  return (
    <div style={navBox}>
<a href="/">Home</a>
<a href="/src/Components/AddUser.js">adduser</a>
<a href="/src/Components/Address.jsx">address</a>


    </div>
  )
}
