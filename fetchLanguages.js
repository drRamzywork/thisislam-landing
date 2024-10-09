const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function fetchLanguages() {
  const localesPath = path.join(process.cwd(), "public/locales");

  try {
    const response = await axios.get("https://app.thisislam.net/api/all_langs");
    const languages = response.data.data.map((lang) => lang.code);

    // Save to a JSON file
    const outputPath = path.join(__dirname, "locales.json");
    fs.writeFileSync(outputPath, JSON.stringify(languages), "utf8");
    console.log("Languages fetched and saved");
  } catch (error) {
    console.error("Failed to fetch languages:", error);
  }
}

fetchLanguages();
