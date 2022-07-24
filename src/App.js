import './App.css';
import {studentArr} from './Data';
import Home from './components/Home';
import Result from './components/Result';
import Fail from './components/Fail';
import Pass from './components/Pass';
import TopThree from './components/TopThree';
import Male from './components/Male';
import Female from './components/Female';
import { Routes, Route, Link } from "react-router-dom"
import { useState } from 'react';

function App() {
  const [Data, SetData] = useState(studentArr)
  Data.forEach((ele) => {
    const total = (Object.values(ele.marks).reduce((a, b) => a + b, 0))
    ele.Total = total
    const divider = (Object.keys(ele.marks)).length
    const average = Math.floor(total / divider)
    ele.Average = average
  })
  Data.filter((ele) => {
    const passStudent = (Object.values(ele.marks)).every((i) => i > 35)
    return (passStudent === true ? ele.result = "pass" : ele.result = "fail")
  })
// console.log(Data)
  return (
    <>
      <div className='link-tag'>
        <Link className='link-btn' to="/">Home</Link>
        <Link className='link-btn' to="Result">Result</Link>
        <Link className='link-btn' to="Pass">Pass</Link>
        <Link className='link-btn' to="Fail">Fail</Link>
        <Link className='link-btn' to="TopThree">Top-3</Link>
        <Link className='link-btn' to="Male">Male</Link>
        <Link className='link-btn' to="Female">Female</Link>
      </div>

      <Routes>
        <Route exact path="/" element={<Home value={Data}/>} />
        <Route path="Result" element={<Result Content={Data} />} />
        <Route path="Fail" element={<Fail content={Data}/>} />
        <Route path="Pass" element={<Pass content={Data}/>} />
        <Route path="TopThree" element={<TopThree value={Data}/>} />
        <Route path="Male" element={<Male content={Data}/>} />
        <Route path="Female" element={<Female content={Data}/>} />
      </Routes>
    </>
  );
}

export default App;
