let agendas = require('../_data/agendaOld.json')
const { parse } = require('json2csv')
const fs = require('fs')

const parseAgenda = function (conference) {
  // let agenda = agendas
  if (conference) {
    agendas = agendas.filter((a) => {
      return a.conference.indexOf(conference) !== -1
    })
  }
  let parsedSessions = []
  let speakers = {}
  agendas.forEach(function (agenda) {
    const sessions = agenda.agenda_sessions
  
    sessions.forEach(function (session) {
      let endTime = new Date(session.start_time)
      endTime.setMinutes(endTime.getMinutes() + 35)
      let tempSession = {
        track: session.location,
        title: session.session[0].name,
        startTime: session.start_time,
        endTime: endTime,
        description: session.session[0].description,
        conference: agenda.conference[0]
      }
      session.session[0].speakers.forEach(function (speaker, index) {
        tempSession['speaker' + index] = speaker.first_name + ' ' + speaker.last_name
  
        if (!speakers[speaker.id]) {
          speakers[speaker.id] = {
            first: speaker.first_name,
            last: speaker.last_name,
            position: speaker.job_title,
            company: speaker.company,
            description: speaker.bio,
            linkedin: speaker.linkedin,
            twitter: speaker.twitter,
            image: speaker.profile_picture[0] && speaker.profile_picture[0].url
            // facebook: speaker.facebook
          }
        }
      })
      parsedSessions.push(tempSession)
    })
  })

  // save the details to csv

  const speakerFields = ['id', 'first', 'last', 'position', 'company', 'description', 'linkedin', 'twitter', 'image']
  const sessionFields = ['track', 'title', 'startTime', 'endTime', 'description', 'conference', 'speaker0', 'speaker1', 'speaker2', 'speaker3', 'speaker4']

  // convert speakers to array
  const parsedSpeakers = Object.keys(speakers).map((id) => {
    speakers[id].id = id
    return speakers[id]
  })
  try {
    const speakersCsv = parse(parsedSpeakers, { speakerFields })
    const sessionsCsv = parse(parsedSessions, { sessionFields })
    fs.writeFileSync('speakersOld.csv', speakersCsv)
    fs.writeFileSync('sessionsOld.csv', sessionsCsv)
  } catch (err) {
    console.error(err)
  }
}

parseAgenda()
