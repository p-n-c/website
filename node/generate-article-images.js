import { addOpenGraphImageToFile } from './add-open-graph-image-to-file.js'

// Define the folders to process
// const folders = ['src/tests']
const folders = ['src/how-to', 'src/summary-of', 'src/thoughts-on']

// Define the image URLs
const imageURLs = [
  'https://inaturalist-open-data.s3.amazonaws.com/photos/380047152/medium.jpeg', // scarlet pimpernel
  'https://inaturalist-open-data.s3.amazonaws.com/photos/386372440/medium.jpeg', // germander speedwell
  'https://inaturalist-open-data.s3.amazonaws.com/photos/386372408/medium.jpeg', // greater stitchwort
  'https://inaturalist-open-data.s3.amazonaws.com/photos/383034896/medium.jpeg', // crane's bill
  'https://inaturalist-open-data.s3.amazonaws.com/photos/383034943/medium.jpeg', // oxeye daisy
  'https://inaturalist-open-data.s3.amazonaws.com/photos/383009501/medium.jpeg', // meadow buttercup
  'https://inaturalist-open-data.s3.amazonaws.com/photos/383009481/medium.jpeg', // dandelion
  'https://inaturalist-open-data.s3.amazonaws.com/photos/383009476/medium.jpeg', // moss phlox
  'https://inaturalist-open-data.s3.amazonaws.com/photos/383004011/medium.jpeg', // mexican fleabane
  'https://inaturalist-open-data.s3.amazonaws.com/photos/383003964/medium.jpeg', // wild strawberry
  'https://inaturalist-open-data.s3.amazonaws.com/photos/380055355/medium.jpeg', // brighteyes
  'https://inaturalist-open-data.s3.amazonaws.com/photos/380052441/medium.jpeg', // smooth hawksbeard
  'https://inaturalist-open-data.s3.amazonaws.com/photos/377211260/medium.jpeg', // montpellier cistus
  'https://inaturalist-open-data.s3.amazonaws.com/photos/377211281/medium.jpeg', // curly rockrose
  'https://inaturalist-open-data.s3.amazonaws.com/photos/377207333/medium.jpeg', // wild gladiolus
  'https://inaturalist-open-data.s3.amazonaws.com/photos/377201420/medium.jpeg', // common centaury
  'https://inaturalist-open-data.s3.amazonaws.com/photos/377201421/medium.jpeg', // spanish iris
  'https://inaturalist-open-data.s3.amazonaws.com/photos/377123353/medium.jpeg', // crown daisy
  'https://inaturalist-open-data.s3.amazonaws.com/photos/377111345/medium.jpeg', // hawkbit
  'https://inaturalist-open-data.s3.amazonaws.com/photos/364709787/medium.jpeg', // barbary-nut
  'https://inaturalist-open-data.s3.amazonaws.com/photos/347809155/medium.jpeg', // stork's bills
  'https://inaturalist-open-data.s3.amazonaws.com/photos/303783597/medium.jpeg', // ragwort
]

addOpenGraphImageToFile(imageURLs, folders)
