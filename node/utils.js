import fs from 'fs'

export const addMetaTag = (filePath, property, metaTag) => {
  // Read the file content
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err)
      return
    }

    // Check if the meta tag already exists
    if (!data.includes(`property="${property}"`)) {
      // Add the meta tag after the opening <head> tag
      const updatedContent = data.replace('<head>', `<head>\n${metaTag}`)

      // Write the updated content back to the file
      fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing file ${filePath}:`, err)
          return
        }
        console.log(`Added meta tag to ${filePath}`)
      })
    }
  })
}

export const getRandomImageURL = (imageURLs) => {
  const randomIndex = Math.floor(Math.random() * imageURLs.length)
  return imageURLs[randomIndex]
}
