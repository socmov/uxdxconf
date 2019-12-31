// const conferences = require('../_data/conferences.json')
const conferences = require('./oldConferences.json')

const { parse } = require('json2csv')
const fs = require('fs')

const parseConference = function () {
  let parsedConferences = []
  conferences.forEach(function (conference) {
    let tempConference = {
      name: conference.name,
      startDate: conference.start_date,
      endDate: conference.start_date
    }
    parsedConferences.push(tempConference)
  })

  // save the details to csv
  const conferenceFields = ['name', 'startDate', 'endDate']
  console.log(parsedConferences)

  try {
    const conferencesCsv = parse(parsedConferences, { conferenceFields })
    fs.writeFileSync('conferences.csv', conferencesCsv)
  } catch (err) {
    console.error(err)
  }
}

parseConference()
