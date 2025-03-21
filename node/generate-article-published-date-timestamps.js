import fs from 'fs'
import path from 'path'

import { addMetaTag } from './utils.js'

export const generateArticlePublishedDateTimestamps = (folders) => {
  // Get the current timestamp in the desired format
  const currentTime = new Date().toISOString()

  // Meta tag to be added
  const metaTag = `<meta property="article:published_time" content="${currentTime}" />\n`

  // Iterate through the folders and process each file
  folders.forEach((folder) => {
    fs.readdir(folder, (err, files) => {
      if (err) {
        console.error(`Error reading directory ${folder}:`, err)
        return
      }
      files.forEach((file) => {
        const filePath = path.join(folder, file)
        if (file.endsWith('.html')) {
          addMetaTag(filePath, 'article:published_time', metaTag)
        }
      })
    })
  })
}
