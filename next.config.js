// @ts-nocheck

// https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const { withSentryConfig } = require('@sentry/nextjs')

/**
 * Additional config options for the Sentry Webpack plugin. Keep in mind that
 * the following options are set automatically, and overriding them is not
 * recommended:
 *   release, url, org, project, authToken, configFile, stripPrefix,
 *   urlPrefix, include, ignore
 *
 * @see https://github.com/getsentry/sentry-webpack-plugin#options
 * @type {import('@sentry/nextjs/src/config/types').SentryWebpackPluginOptions}
 */
const sentryConfig = {
  silent: true
}

/**
 * mutable next.js configuration to ensure third party plugins such as bundle
 * analyzer and sentry works as intended
 *
 * @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true
}

nextConfig = withBundleAnalyzer(nextConfig)
nextConfig = withSentryConfig(nextConfig, sentryConfig)

module.exports = nextConfig
