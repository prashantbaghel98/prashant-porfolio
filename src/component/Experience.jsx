import React from 'react'
import Title from '../components-parts/Title'
import EducationComp from '../components-parts/Education'

const Experience = () => {
  return (
      <section className="experience">
<Title title="Experience"/>
<EducationComp year="Dec 2024 - Present" course="Wordpress Developer" college="Rootbix Infotech Pvt Ltd"/>
<EducationComp year="Oct 2023 - Dec 2024" course="Juinor Wordpress Developer" college="Webs Login Pvt Ltd"/>
<EducationComp year="July 2023 - Aug 2023" course="Internship" college="CodSoft"/>
    </section>
  )
}

export default Experience
