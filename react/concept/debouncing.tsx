// function App() {
//   const [change, setChange] = useState("")
//   const [times, setTimes] = useState<number | undefined>()
//   function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
//     clearTimeout(times)
//     const timer = setTimeout(() => {
//       setChange(e.target.value)
//     }, 1000)
//     setTimes(timer)
//   }
//   return (
//     <>
//       <div>
//         <p>{change}</p>
//         <input onChange={handlechange} />
//       </div>
//     </>
//   )
// }
