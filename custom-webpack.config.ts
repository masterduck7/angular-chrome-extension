import type { Configuration } from 'webpack';

module.exports = {
  entry: {
    background: 'src/background.ts',
    'content-script': 'src/content.ts',
  },
  optimization: {
    runtimeChunk: false,
  },
} as Configuration;
