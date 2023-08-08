const path = require('path')

const buildPrettierCommand = (filenames) =>
  `prettier --check ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '{**/*,*}.{js,ts,tsx}': [buildPrettierCommand, buildEslintCommand],
  '{**/*,*}.{md,json,html}': [buildPrettierCommand],
}
