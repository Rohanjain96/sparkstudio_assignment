import React from 'react'
import Course from './Course';
const CourseList = ({courseData}) => {
    return (
        <>
            <div className='course__card--list'>
                {
                    courseData.map((course) => {
                        return (
                                <Course course={course}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CourseList