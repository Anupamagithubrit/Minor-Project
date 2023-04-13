import React from 'react'

import TestPdf from '../experiments/6th Sem Timetable.pdf'

const topicwisenotes = () => {
  return (
    <div>
        <a href={TestPdf} target="_blank">Topic 1</a>
        <br/>
        <a href={TestPdf} target="_blank">Topic 2</a>
        <br/>
        <a href={TestPdf} target="_blank">Topic 3</a>
        <br/>
        <a href={TestPdf} target="_blank">Topic 4</a>
        <br/>
        <a href={TestPdf} target="_blank">Topic 5</a>
        <br/>
        <a href={TestPdf} target="_blank">Topic 6</a>
    </div>
  )
}

export default topicwisenotes