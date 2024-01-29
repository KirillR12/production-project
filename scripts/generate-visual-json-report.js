<<<<<<< HEAD
/* eslint-disable */
=======
/* eslint-disable*/
>>>>>>> 21ea2e8aee9dc06833515dd01db5cb407e31fe54
const { promisify } = require('util')
const { readdir, writeFile } = require('fs')
const { join: joinPath, relative } = require('path')

const asyncReaddir = promisify(readdir)
const writeFileAsync = promisify(writeFile)

const lokiDir = joinPath(__dirname, '..', '.loki')
const actualDir = joinPath(lokiDir, 'current')
const expectedDir = joinPath(lokiDir, 'reference')
const diffDir = joinPath(lokiDir, 'difference');

(async function main() {
    const diffs = await asyncReaddir(diffDir)

    await writeFileAsync(joinPath(lokiDir, 'report.json'), JSON.stringify({
        newItems: [],
        deletedItems: [],
        passedItems: [],
        failedItems: diffs,
        expectedItems: diffs,
        actualItems: diffs,
        diffItems: diffs,
        actualDir: relative(lokiDir, actualDir),
        expectedDir: relative(lokiDir, expectedDir),
        diffDir: relative(lokiDir, diffDir),
    }))
}())
