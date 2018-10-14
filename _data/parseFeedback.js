const feedback = require('../uxdx2018Feedback.json')
const agendas = require('./agendas.json')
const fs = require('fs')
const json2csv = require('json2csv').parse

let flattenedSessions = []
let flattenedIndex = []
let sessions = agendas.forEach((agenda) => {
  agenda.agenda_sessions.forEach((as) => {
    as.session.forEach((session) => {
      if (flattenedIndex.indexOf(session.codename) === -1) {
        flattenedIndex.push(session.codename)
        flattenedSessions.push(session)
      }
    })
  })
})

let parsedFeedback = []
Object.keys(feedback).forEach((session) => {
  let sessionDetails = flattenedSessions[flattenedIndex.indexOf(session)]
  let speakers = sessionDetails.speakers.map((speaker) => {
    return speaker.first_name + ' ' + speaker.last_name + ', ' + speaker.job_title + ', ' + speaker.company
  }).join()


  Object.keys(feedback[session].feedback).forEach((id) => {
    let details = feedback[session].feedback[id]
    parsedFeedback.push({
      conference: sessionDetails.conference[0],
      session,
      name: sessionDetails.name,
      speakers: speakers,
      speaker: details.speaker,
      content: details.content,
      comment: details.comment,
      timestamp: new Date(details.timeStamp),
    })
  })
})

const fields = Object.keys(parsedFeedback[0])
const opts = { fields }

try {
  const csv = json2csv(parsedFeedback, opts);
  fs.writeFileSync('parsedFeedback.csv', csv)
} catch (err) {
  console.error(err);
}
