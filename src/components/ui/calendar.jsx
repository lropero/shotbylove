import { DayPicker } from 'react-day-picker'
import { useState } from 'react'
import 'react-day-picker/style.css'

function Calendar (props) {
  const [selected, setSelected] = useState()

  return <DayPicker animate disabled={{ before: new Date() }} mode='single' onSelect={setSelected} selected={selected} {...props} />
}

Calendar.displayName = 'Calendar'

export { Calendar }
