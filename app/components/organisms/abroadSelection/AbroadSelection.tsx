import React from 'react'
import SliderContainer from './SliderContainer';

const subCategory = ['Python', 'Email', 'Web Development', 'JavaScript', 'Data Science', 'Amazon AWS', 'Drawing'];

const AbroadSelection = () => {

    const fetchCourses = () => {
        // const courses = getCoursesFromApi()
    return  <SliderContainer/>
    };

    const checkCategory =  subCategory.map((category, i) => {
        return (
          <div className='flex justify-evenly' key={i}>
            <p className='mb-3 text-sm font-bold text-ctitle' onClick={fetchCourses}>{category}</p>
          </div>
        )
      })

  return (
    <div className='text-xl font-bold flex flex-col gap-4'>
        <h3> A broad selection of courses</h3>
        <h5>Choose from over 210,000 online video courses with new additions published   every month
        </h5>
        {checkCategory}
      
    </div>
  )
}

export default AbroadSelection
