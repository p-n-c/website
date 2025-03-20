import path from 'path'
const __dirname = import.meta.dirname
import { generateArticlePublishedDateTimestamps } from './generate-article-published-date-timestamps.js'

import { rssFeeder } from '@p-n-c/rssfeed'

const src = path.join(__dirname, '..', 'src')
const root = 'src'
const feed = {
  title: 'People and Code, At Your Disposal',
  link: 'https://people-and-code.com/',
  description: 'Latest articles from People and Code',
  outputPath: 'feed.rss',
}
const options = {
  images: {
    main: 'https://inaturalist-open-data.s3.amazonaws.com/photos/380047152/medium.jpeg',
  },
  pathsToExclude: ['/'],
}

generateArticlePublishedDateTimestamps()

rssFeeder.generateRssFeed(src, root, feed, options)
