import React, { useState } from 'react'
import Calendar from 'react-calendar'
import styled from 'styled-components'

export default function CalendarOverview() {
  const [date, setDate] = useState(new Date())

  const clickedDate = (date) => {
    setDate(date)
    alert(date)
  }

  return (
    <>
      <StyledCalendar onChange={clickedDate} value={date} />
      
    </>
  )
}

const StyledCalendar = styled(Calendar)`
  display: inline-block;

  font-size: 2rem;
  margin: 20px 10px;
  padding: 10px;
  box-shadow: -1px 5px 8px 0 rgba(0, 0, 0, 0.5);
`
