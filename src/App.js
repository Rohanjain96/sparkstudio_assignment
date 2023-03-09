import { useState } from 'react';
import './App.css';
import CourseList from './components/CourseList';
import {data} from './data'
function App() {
  const [activeFilter,setActiveFilter] = useState(1)
  const filteredData = data[1].filter((course)=>{
    if(activeFilter === 1)
    return course.min_age===5 && course.max_age ===9
    else
    return course.min_age===10 && course.max_age ===15
  })
  return (
    <>
    <div className='filter__container'>
      <div className={activeFilter === 1?'filter active':'filter'} onClick={()=>setActiveFilter(1)}>
        <span className='type'>Junior</span>
        <span className='age'>(Age 5-9)</span>
      </div>
      <div className={activeFilter === 2?'filter active':'filter'} onClick={()=>setActiveFilter(2)}>
        <span className='type'>Senior</span>
        <span className='age'>(Age 10-15)</span>
      </div>
    </div>
      <CourseList courseData={filteredData} />
    </>
  );
}

export default App;
