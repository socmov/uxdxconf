let speakers = require('../_data/speakers.json')
const { parse } = require('json2csv')
const fs = require('fs')

const parsespeakers = function (conference) {
  if (conference) {
    speakers = speakers.filter((a) => {
      return a.conference.indexOf(conference) !== -1
    })
  }
  let parsedSpeakers = []

  speakers.forEach(function (speaker) {
    parsedSpeakers.push({
      first: speaker.first_name,
      last: speaker.last_name,
      position: speaker.job_title,
      company: speaker.company,
      description: speaker.bio,
      linkedin: speaker.linkedin,
      twitter: speaker.twitter,
      image: speaker.profile_picture[0] && speaker.profile_picture[0].url
    })
  })

  // save the details to csv

  const speakerFields = ['first', 'last', 'position', 'company', 'description', 'linkedin', 'twitter', 'image']

  try {
    const speakersCsv = parse(parsedSpeakers, { speakerFields })
    fs.writeFileSync('speakers-full.csv', speakersCsv)
  } catch (err) {
    console.error(err)
  }
}

parsespeakers()
