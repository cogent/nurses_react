import React, { useRef, useState } from 'react'

function App() {
  const startDate = useRef()
  const endDate = useRef()
  const [shifts, setShifts] = useState([])

  const getRoster = async () => {
    const roster =  await fetch(`/roster?start=${startDate.current.value}&end=${endDate.current.value}`).then(response => response.json())
    setShifts(roster)
  }
  
  return (
    <div>
      <div>Start date</div>
      <input id="start_date" type="date" ref={startDate} />

      <div>End date</div>
      <input id="end_date" type="date" ref={endDate} />
      <button onClick={getRoster}>📅</button>
      <div>{shifts.map(shift => (<div style={{margin: '40px 0'}}>
        <div><b>{shift.date}</b></div>
        <div><i>{shift.type}</i></div>
        <div>nurses: {shift.nurses.map(nurse => nurse.name).join(', ')}</div>
      </div>))}</div>
    </div>
  );
}

export default App;
