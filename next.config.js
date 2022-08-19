/** @type {import('next').NextConfig} */
//環境変数設定
console.log('APP_ENVIRONMENT_STATUS >>>>> ' + process.env.APP_ENV)

const path = require('path')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
/** @type {import('next').NextConfig} */
const nextCommonConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ...require(`./src/env/.env.${process.env.APP_ENV || 'local'}.json`),
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
const nextDevConfig = {}
const nextConfig = {}

module.exports = (phase, { defaultConfig }) =>
  phase === PHASE_DEVELOPMENT_SERVER || !process.env.APP_ENV
    ? { ...nextCommonConfig, ...nextDevConfig }
    : { ...nextCommonConfig, ...nextConfig }
