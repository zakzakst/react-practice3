/** @type {import('next').NextConfig} */
// const { i18n } = require("./next-i18next.config");
const stylexPlugin = require("@stylexjs/nextjs-plugin");
const babelrc = require("./.babelrc.js");
const plugins = babelrc.plugins;
const [_name, options] = plugins.find(
  (plugin) => Array.isArray(plugin) && plugin[0] === "@stylexjs/babel-plugin"
);
const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;

module.exports = stylexPlugin({
  rootDir,
  useCSSLayers: true,
})({
  transpilePackages: ["@stylexjs/open-props"],
  // i18n,
});
