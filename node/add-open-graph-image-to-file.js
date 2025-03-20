import fs from 'fs'
import path from 'path'
import { getRandomImageURL } from './utils.js'

const injectOpenGraphMetadata = (filePath, img) => {
  // Read the file content
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err)
      return
    }

    // Check if the image meta tag already exists
    if (!data.includes(`property="og:image"`)) {
      // Add the image meta tags after the opening <head> tag
      const imgTag = `<meta property="og:image" content="${img.url}" />`
      data = data.replace('<head>', `<head>\n${imgTag}`)
      const widthTag = `<meta property="og:image:width" content="${img.width}" />`
      data = data.replace(imgTag, `${imgTag}\n${widthTag}`)
      const heightTag = `<meta property="og:image:height" content="${img.height}" />`
      data = data.replace(widthTag, `${widthTag}\n${heightTag}`)

      // Write the updated content back to the file
      fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing file ${filePath}:`, err)
          return
        }
        console.log(`Added meta tag to ${filePath}`)
      })
    }
  })
}

export const addOpenGraphImageToFile = (imageURLs, folders) => {
  // Define the image object
  const img = {
    url: getRandomImageURL(imageURLs),
    width: '1200',
    height: '630',
  }

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
          injectOpenGraphMetadata(filePath, img)
        }
      })
    })
  })
}
