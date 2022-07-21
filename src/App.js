import './App.css';
import { columns, studentArr, Allresult, TopThreeStudents, HomeHead } from './Data';
import Home from './components/Home';
import Result from './components/Result';
import Fail from './components/Fail';
import Pass from './components/Pass';
import TopThree from './components/TopThree';
import Male from './components/Male';
import Female from './components/Female';
import { Routes, Route, Link } from "react-router-dom"
import { useState } from 'react';

let second = [
  {}
]
function App() {
  const [Defaulted, Changed] = useState(studentArr)
  const [Same, Changes] = useState(second)
  Defaulted.forEach((ele) => {
    const total = (Object.values(ele.marks).reduce((a, b) => a + b, 0))
    ele.Total = total
    const divider = (Object.keys(ele.marks)).length
    const average = Math.floor(total / divider)
    ele.Average = average
  })
  const passstudent = Defaulted.filter((ele) => {
    const pstudent = (Object.values(ele.marks)).every((i) => i > 35)
    return (pstudent === true ? ele.result = "pass" : ele.result = "fail")
  })
  const Passmarks = Defaulted.filter((ele) => {
    return (Object.values(ele.marks)).every((i) => i > 35)
  })

  const failingstudent = Defaulted.filter((element) => {
    return (Object.values(element.marks)).some((item) => item < 35);
  })

  const sortingArrays = Defaulted.sort((a, b) => b.Total - a.Total)
  const threetop = sortingArrays.slice(0, 3)
  for (let i = 0; i < sortingArrays.length; i++) {
    let count = 0
    sortingArrays.forEach((i) => {
      count++
      i.Rank = count
    })
  }

  for (let i = 0; i < Defaulted.length; i++) {
    let count = 0
    Defaulted.forEach((e) => {
      count++
      e.count = count
    })
  }

  const Malecount = Defaulted.filter((element) => element.gender === "M")
  const Femalecount = Defaulted.filter((element) => element.gender === "F")
  const MalePassed = Defaulted.filter((ele) => ele.gender === "M" && (Object.values(ele.marks)).every((item) => item > 35))
  const MaleFailed = Defaulted.filter((ele) => ele.gender === "M" && (Object.values(ele.marks)).some((item) => item < 35))
  const FemalePassed = Defaulted.filter((ele) => ele.gender === "F" && (Object.values(ele.marks)).every((item) => item > 35))
  const FemaleFailed = Defaulted.filter((ele) => ele.gender === "F" && (Object.values(ele.marks)).some((item) => item < 35))

  second.forEach((e) => {
    e.Count = Defaulted.length
    e.result = {}
    e.result.Pass = Passmarks.length
    e.result.Fail = failingstudent.length
    e.male = {}
    e.male.malepass = MalePassed.length
    e.male.malefail = MaleFailed.length
    e.female = {}
    e.female.femalepass = FemalePassed.length
    e.female.femaleFail = FemaleFailed.length
  })


  console.log(Defaulted)
  console.log(second)
  console.log(Malecount)
  console.log(Femalecount)
  console.log(MalePassed)
  console.log(MaleFailed)
  console.log(FemalePassed)
  console.log(FemaleFailed)
  return (
    <>
      <div className='link-tag'>
        <Link className='link-btn' to="/">Home</Link>
        <Link className='link-btn' to="Result/">Result</Link>
        <Link className='link-btn' to="Pass/">Pass</Link>
        <Link className='link-btn' to="Fail/">Fail</Link>
        <Link className='link-btn' to="TopThree/">Top-3</Link>
        <Link className='link-btn' to="Male/">Male</Link>
        <Link className='link-btn' to="Female/">Female</Link>
      </div>

      <Routes>
        <Route exact path="/" element={<Home Heading={HomeHead} view={Same} />} />
        <Route path="Result/" element={<Result Content={Defaulted} Heading={Allresult} />} />
        <Route path="Fail/" element={<Fail content={failingstudent} Heading={Allresult} />} />
        <Route path="Pass/" element={<Pass content={Passmarks} Heading={Allresult} />} />
        <Route path="TopThree/" element={<TopThree content={threetop} Heading={TopThreeStudents} />} />
        <Route path="Male/" element={<Male content={Defaulted} Heading={Allresult} />} />
        <Route path="Female/" element={<Female content={Defaulted} Heading={Allresult} />} />
      </Routes>
    </>
  );
}

export default App;
