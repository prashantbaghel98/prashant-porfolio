import React from 'react'

const EducationComp = (props) => {
  return (
    <div className='grid grid-cols-3 p-5 items-center  border-2 rounded-2xl my-5 text-center  duration-300 border-2 hover:border-[pink]'>
<div className="div">
    {props.year}
</div>
<div>
    {props.course}
</div>
<div>
    {props.college}
</div>
    </div>
  )
}

export default EducationComp
