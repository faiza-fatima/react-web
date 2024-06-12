

// function Header({name , email}){
//     return(
// <>
// <h1>Hello {name} your email is {email}</h1>
// </>
//     )
// }

// export default Header

// Method 2 Props

import React from 'react'

const Header = (props) => {
  return (
   <>
   <h1>Hello {props.name} {props.email}</h1>
   </>
  )
}

export default Header

// function main(n){
// console.log(n)
// }
// main(a)