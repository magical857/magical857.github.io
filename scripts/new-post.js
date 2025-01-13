/* This is a script to create a new post markdown file with front-matter */

import fs from "fs"
import path from "path"

function getDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

const args = process.argv.slice(2)

// 如果第一个参数是"--"，则跳过
if (args[0] === '--') {
  args.shift()
}

if (args.length === 0) {
  console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename> [--title <title>] [--tags <tag1,tag2>] [--category <category>] [--lang <lang>]`)
  process.exit(1)
}

// 修复参数解析逻辑
const options = {}
let filenameSet = false

for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    const key = args[i].slice(2)
    options[key] = args[i + 1] || ''
    i++
  } else if (!filenameSet) {
    options.filename = args[i]
    filenameSet = true
  }
}

// 确保文件名存在
if (!options.filename) {
  console.error('Error: Filename is required')
  process.exit(1)
}

// 修复文件名处理
const fileExtensionRegex = /\.(md|mdx)$/i
let finalFilename = options.filename
if (!fileExtensionRegex.test(finalFilename)) {
  finalFilename += ".md"
}

// 修改文件路径生成
const filePath = path.join(process.cwd(), 'src/content/posts', finalFilename)

if (fs.existsSync(filePath)) {
  console.error(`Error：File ${filePath} already exists `)
  process.exit(1)
}

const content = `---
title: ${options.title || options.filename}
published: ${getDate()}
lastUpdated: ${getDate()}
description: ''
image: ''
tags: ${options.tags ? `[${options.tags.split(',').map(tag => `"${tag.trim()}"`).join(', ')}]` : '[]'}
category: ${options.category || ''}
draft: false 
lang: ${options.lang || 'zh'}
---
`

fs.writeFileSync(filePath, content)

console.log(`Post ${filePath} created`)
