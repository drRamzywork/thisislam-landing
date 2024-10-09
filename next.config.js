// const { i18n } = require("./next-i18next.config");

// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   i18n,
// };

// export default nextConfig;

// +++++++
// const fs = require("fs");
// const path = require("path");

// const { i18n } = require("./next-i18next.config");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   i18n,
// };

// try {
//   const languagesPath = path.join(__dirname, "public/locales.json");
//   const locales = JSON.parse(fs.readFileSync(languagesPath, "utf8"));

//   nextConfig.i18n = {
//     locales: locales.map((lang) => lang),
//     defaultLocale: "ar",
//     localeDetection: false,
//   };
// } catch (error) {
//   console.warn(
//     "Could not dynamically load locales, using default settings:",
//     error,
//     locales
//   );
//   nextConfig.i18n = {
//     locales: ["ar", "en"], // Fallback locales list, including Arabic and English
//     defaultLocale: "ar",
//     localeDetection: false,
//   };
// }
// module.exports = nextConfig;
// ++++++++

const fs = require("fs");
const path = require("path");

const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
};

try {
  const languagesPath = path.join(__dirname, "public/locales.json");
  const locales = JSON.parse(fs.readFileSync(languagesPath, "utf8"));

  nextConfig.i18n = {
    locales: locales.map((lang) => lang),
    defaultLocale: "ar",
    localeDetection: false,
  };
} catch (error) {
  // Remove the undefined 'locales' from the log
  console.warn(
    "Could not dynamically load locales, using default settings:",
    error
  );
  nextConfig.i18n = {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    localeDetection: false,
  };
}

module.exports = nextConfig;
