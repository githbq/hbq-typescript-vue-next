

import path from 'path'

export default {
  resolve(dir) {
    return path.join(__dirname, '..', dir)
  },

  assetsPath(dir) {
    const assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, dir)
  }
}
