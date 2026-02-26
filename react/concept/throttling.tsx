// import React, { useRef, useState } from 'react'
// import './App.css'
//
// function App() {
//   const [change, setChange] = useState("")
//   const lastnow = useRef<number>(0)
//   function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
//     const now = Date.now()
//     if (now - lastnow.current > 5000) {
//       setChange(e.target.value)
//       lastnow.current = now
//     }
//   }
//
//   return (
//     <>
//       <div>
//         <p>{change}</p>
//         <input onChange={handlechange} />
//       </div>
//     </>
//   )
// }
//
// export default App
