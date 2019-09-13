let sponsors = require('../_data/sponsors.json')
const { parse } = require('json2csv')
const fs = require('fs')

const parseSponsors = function (conference) {
  let confSponsors = sponsors.filter((a) => {
    return a.conference.indexOf(conference) !== -1
  })
  let parsedSponsors = []

  confSponsors.forEach(function (sponsor) {
    parsedSponsors.push({
      name: sponsor.name,
      logo: sponsor.company[0].url,
      type: sponsor.level,
      description: sponsor.bio,
      website: sponsor.url,
      twitter: sponsor.twitter,
      linkedin: sponsor.linkedin
    })
  })

  // save the details to csv

  const sponsorFields = ['name', 'logo', 'type', 'description', 'linkedin', 'twitter', 'website']

  try {
    const sponsorsCsv = parse(parsedSponsors, { sponsorFields })
    fs.writeFileSync('sponsors.csv', sponsorsCsv)
  } catch (err) {
    console.error(err)
  }
}

parseSponsors('uxdxeurope2019')
