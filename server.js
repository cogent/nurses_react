const express = require('express')
const dayjs = require('dayjs')
const allNurses = require('./static/nurses.json')

const app = express()
const port = 4000

app.use(express.static('static', { extensions: ['json'] }))

app.get('/', (req, res) => {
  res.send('Use /roster?start=yyyy-mm-dd&end=yyyy-mm-dd to fetch the roster for a given time period')
})

const shiftTypes = ['morning', 'evening', 'night']  
app.get('/roster', (req, res) => {
  const start = dayjs(req.query.start)
  const end = dayjs(req.query.end)

  const numberOfDays = end.diff(start, 'day')
  const numberOfShifts = numberOfDays * 3

  const shifts = []
  for (let i = 0; i < numberOfShifts; i++) {
    shifts.push({
      date: start.add(Math.floor(i / 3), 'days'),
      type: shiftTypes[i % 3],
      nurses: getNurses(i * 5)
    })
  }

  res.send(shifts)
})

function getNurses(startIndex) {
  const nurses = []
  for (let i = startIndex; i < startIndex + 5; i++) {
    const nurseIndex = i % allNurses.length
    nurses.push(allNurses[nurseIndex])
  }
  return nurses
}

app.listen(port, () => {
  console.log(`Nurses app listening at http://localhost:${port}`)
})