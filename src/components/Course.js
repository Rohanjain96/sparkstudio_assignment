import React from 'react'
import Rating from '@mui/material/Rating';
import { calculateDiscount } from '../functions';
const Course = ({course}) => {
    return (
        <>
            <div className='course__card--wrapper'>
                <div className='course__card--upperbox'>
                    <div className='discount'>
                        <p>{calculateDiscount(course.discounted_price,course.original_price)}%</p>
                        <p>off</p>
                    </div>
                    <div className='session__box'><p>18 Sessions</p></div>
                    <h3>{course.display_name}</h3>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "10px" }}>
                        <Rating defaultValue={course.rating.split(";")[0]} precision={0.1} readOnly sx={{ marginLeft: "14px", marginRight: "8px" }} />
                        <span className='reviews'>({course.rating.split(";")[2]} reviews)</span>
                    </div>
                </div>
                <div className='course__card--middlebox'>
                    <p className='pitch'>{course.pitch}</p>
                    <h3>Students will achieve:</h3>
                    <ul>
                        {
                            course.curriculum_outcomes.map((achievement) => {
                                return <li>{achievement}</li>
                            })
                        }
                    </ul>
                    <a href='/'>View Detailed Lesson Plan</a>
                    <div className='price__box'>
                        <div className='price'>
                            <span className='discount__price'>{course.discounted_price}</span>
                            <p>
                                <span className='per__class__price'>{200}</span>
                                per class
                            </p>
                        </div>
                        <span className='orignal__price'>{course.original_price}</span>
                        <p className='red__text'>We'll schedule the slots as per your convenience</p>
                    </div>
                </div>
                <div className='course__card--lowerbox'>
                    <div style={{
                        background: "#DCCCFF", width: "100%", paddingBlock: "5px", display: "flex",
                        flexDirection: "row", alignItems: "center", justifyContent: "center"
                    }}>
                        <img src={process.env.PUBLIC_URL + "/assets/Vector.png"} style={{ marginRight: "6px" }} alt="" />
                        <span style={{fontSize:"13px",fontWeight:"600"}}>8 activities</span>
                        <img src={process.env.PUBLIC_URL + "/assets/Vector (1).png"} style={{ marginRight: "6px" }} alt="" />
                        <span style={{fontSize:"13px",fontWeight:"600"}}>{course.games_count} games</span>
                        <img src={process.env.PUBLIC_URL + "/assets/Vector (2).png"} style={{ marginRight: "6px" }} alt="" />
                        <span style={{fontSize:"13px",fontWeight:"600"}}>{course.certificate_count} certificates</span>
                    </div>
                    <button >Buy Course</button>
                </div>
            </div>
        </>
    )
}

export default Course