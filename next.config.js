const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')
const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracing: false // Temporary fix for Next 12 bug
}

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.,
}

const bundleAnalyzerOptions = {
  enabled: process.env.ANALYZE === 'true'
}

module.exports = withSentryConfig(
  withPlugins([[withBundleAnalyzer, bundleAnalyzerOptions]], nextConfig),
  SentryWebpackPluginOptions
)

// module.exports = withPlugins(
//   [[withBundleAnalyzer, bundleAnalyzerOptions]],
//   nextConfig
// )
