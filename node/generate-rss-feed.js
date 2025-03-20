import path from 'path'
const __dirname = import.meta.dirname
import { generateArticlePublishedDateTimestamps } from './generate-article-published-date-timestamps.js'
import { addOpenGraphImageToFile } from './add-open-graph-image-to-file.js'

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

// Define the folders to process
const folders = ['src/how-to', 'src/summary-of', 'src/thoughts-on']

generateArticlePublishedDateTimestamps(folders)

// Define the image URLs
const imageURLs = [
  'https://inaturalist-open-data.s3.amazonaws.com/photos/380047152/medium.jpeg',
]

// Timeout to make sure the file has been updated with a published date
setTimeout(() => {
  addOpenGraphImageToFile(imageURLs, folders)
}, 1000)

rssFeeder.generateRssFeed(src, root, feed, options)
