import React from 'react'
import TestPDF from '../topicwisequestions/6th Sem Timetable.pdf'

const prevpapers = () => {
  return (
    <div>
        <a href={TestPDF} target="_blank">Paper 1</a>
        <br/>
        <a href={TestPDF} target="_blank">Paper 2</a>
        <br/>
        <a href={TestPDF} target="_blank">Paper 3</a>
        <br/>
        <a href={TestPDF} target="_blank">Paper 4</a>
        <br/>
        <a href={TestPDF} target="_blank">Paper 5</a>
        <br/>
        <a href={TestPDF} target="_blank">Paper 6</a>
        <br/>
    </div>
  )
}

export default prevpapers