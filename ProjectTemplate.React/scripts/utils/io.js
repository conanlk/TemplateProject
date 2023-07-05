const path = require('path')
const fs = require('fs')
const prettier = require('prettier')
const prettierConfig = require('./prettier.config')

const getResolvedPath = (filepath) => path.resolve(__dirname, `../../${filepath}`)
const getIsExist = (filepath) => fs.existsSync(filepath)
const getFile = (filepath) => fs.readFileSync(filepath, 'utf8')
const getLinesArray = (file) => JSON.parse(JSON.stringify(file.split('\n')))
const getLineIndex = (line, arr) => {
  let lineIndex
  arr.forEach((item, index) => {
    if (item.search(line) > 0) {
      lineIndex = index
    }
  })
  return lineIndex
}

exports.REPLACE_NEXT_LINE = (filepath, after, replace) => {
  const resolvedPath = getResolvedPath(filepath)
  const isExist = getIsExist(resolvedPath)
  if (!isExist) {
    return
  }
  const file = getFile(resolvedPath)
  const linesArray = getLinesArray(file)
  const lineIndex = getLineIndex(after, linesArray) + 1
  linesArray.splice(lineIndex, 1)
  linesArray.splice(lineIndex, 0, replace)
  const text = linesArray.join('\n')
  const formatted = prettier.format(text, prettierConfig)
  fs.writeFileSync(resolvedPath, formatted)
}

exports.REPLACE_BETWEEN = (filepath, after, before, replace) => {
  const resolvedPath = getResolvedPath(filepath)
  const isExist = getIsExist(resolvedPath)
  if (!isExist) {
    return
  }
  const file = getFile(resolvedPath)
  const linesArray = getLinesArray(file)
  const lineAfterIndex = getLineIndex(after, linesArray) + 1
  const lineBeforeIndex = getLineIndex(before, linesArray)
  const diffIndex = lineBeforeIndex - lineAfterIndex
  linesArray.splice(lineAfterIndex, diffIndex)
  linesArray.splice(lineAfterIndex, 0, replace)
  const text = linesArray.join('\n')
  const formatted = prettier.format(text, prettierConfig)
  fs.writeFileSync(resolvedPath, formatted)
}

exports.GET_BETWEEN = (filepath, after, before) => {
  const resolvedPath = getResolvedPath(filepath)
  const isExist = getIsExist(resolvedPath)
  if (!isExist) {
    return
  }
  const file = getFile(resolvedPath)
  const linesArray = getLinesArray(file)
  const lineAfterIndex = getLineIndex(after, linesArray) + 1
  const lineBeforeIndex = getLineIndex(before, linesArray)
  const sliced = linesArray.slice(lineAfterIndex, lineBeforeIndex)
  const text = sliced.join('\n')

  return text
}

exports.GET_BETWEEN_JSON = (filepath, after, before) => {
  const text = this.GET_BETWEEN(filepath, after, before)
  const wrapped = '{\n' + text + '\n}'
  const removeComments = prettier.format(wrapped, {
    ...prettierConfig,
    parser: (text, { json }) => {
      const ast = json(text)
      delete ast.comments
      return ast
    },
  })
  const formatted = prettier.format(removeComments, {
    ...prettierConfig,
    parser: 'json',
  })

  return JSON.parse(formatted)
}

exports.GET_DIR_FOLDERS = (folderpath) => {
  const resolvedFolderPath = getResolvedPath(folderpath)
  return fs
    .readdirSync(resolvedFolderPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}

exports.DELETE_FOLDERS = (folderpath, folders) => {
  folders.forEach((folder) => {
    const resolvedFolderPath = getResolvedPath(`${folderpath}/${folder}`)
    fs.rmdirSync(resolvedFolderPath, { recursive: true })
  })
}

exports.WRITE_FILE = (folderpath, subfolder, filename, content) => {
  const resolvedFolderPath = getResolvedPath(folderpath)
  const resolvedFilePath = getResolvedPath(`${folderpath}${subfolder}/${filename}`)
  const formatted = prettier.format(content, prettierConfig)
  fs.mkdirSync(`${resolvedFolderPath}${subfolder}`, { recursive: true })
  fs.writeFileSync(resolvedFilePath, formatted)
}
