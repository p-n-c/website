import path from 'path'
const __dirname = import.meta.dirname

import { rssFeeder } from '@p-n-c/rssfeed'

const src = path.join(__dirname, 'src')
const options = {
  root: 'src',
  images: {
    main: 'https://raw.githubusercontent.com/p-n-c/marketing/9b47dde787b5df57dd956277ca7154426ca2e80f/logo/PaC-logo.svg?token=AACAT4XXU6YMYIQWYMQK6CTHY5CNK',
  },
}

rssFeeder.generateRssFeed(src, options)
