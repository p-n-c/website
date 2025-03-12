import path from 'path'
const __dirname = import.meta.dirname

import { rssFeeder } from '@p-n-c/rssfeed'

const src = path.join(__dirname, 'src')
const root = 'src'
const feed = {
  title: 'People and Code, At Your Disposal',
  link: 'https://people-and-code.com/',
  description: 'Latest articles from People and Code',
  outputPath: 'feed.rss',
}
const options = {
  images: {
    main: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Beardsley-peacockskirt.PNG/430px-Beardsley-peacockskirt.PNG',
  },
  pathsToExclude: ['/'],
}

rssFeeder.generateRssFeed(src, root, feed, options)
