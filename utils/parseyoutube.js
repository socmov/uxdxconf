const fs = require('fs')
const cheerio = require('cheerio')
const data = fs.readFileSync('./youtubeplaylist.html')
const $ = cheerio.load(data)

let items = []
console.log($('ytd-playlist-video-renderer').find('a#thumbnail').attr('href'))

$('ytd-playlist-video-renderer').each((index, listItem) => {
  // parse the url
  const url = $('a#thumbnail', listItem).attr('href')
  const id = url.slice(9, url.indexOf('&'))
  const embedUrl = 'https://www.youtube.com/embed/' + id
  console.log({
    url: embedUrl,
    title: $('#video-title', listItem).attr('title')
  })
})

// convert to csv
console.log(items.length)
