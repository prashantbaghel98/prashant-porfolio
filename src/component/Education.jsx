import React from 'react'
import Title from '../components-parts/Title'
import EducationComp from '../components-parts/Education'

const Education = () => {
  return (
    <section className="education">
<Title title="Education"/>

<EducationComp year="2016" course="High School" college="Saraswati Vidya Mandir, Etah"/>
<EducationComp year="2019" course="Intermediate" college="S P L Inter College, Etah"/>
<EducationComp year="2022" course="Diploma (IT)" college="Governement Polytechnic, Ghaziabad"/>
<EducationComp year="2025" course="B.Tech (CSE)" college="R D Engineering College, Duhai"/>
    </section>
  )
}

export default Education
