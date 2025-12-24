const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");

async function loadDB(resourceName) {
  const dbDir = path.join(__dirname, "..", "db");
  const filePath = path.join(dbDir, `${resourceName}.json`);

  try {
    const data = await fs.readFile(filePath, "utf8");
    const parsedData = JSON.parse(data);
    if (Array.isArray(parsedData)) {
      return parsedData;
    } else {
      return [];
    }
  } catch (error) {
    if (!fsSync.existsSync(dbDir)) {
      await fs.mkdir(dbDir, { recursive: true });
    }
    await fs.writeFile(filePath, "[]", "utf8");
    return [];
  }
}

async function saveDB(resourceName, data) {
  const dbDir = path.join(__dirname, "..", "db");
  const filePath = path.join(dbDir, `${resourceName}.json`);

  if (!fsSync.existsSync(dbDir)) {
    await fs.mkdir(dbDir, { recursive: true });
  }

  await fs.writeFile(filePath, JSON.stringify(data, null, 4), "utf8");
}

module.exports = {
  loadDB,
  saveDB,
};
