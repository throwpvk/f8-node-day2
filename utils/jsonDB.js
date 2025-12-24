const fs = require("fs/promises");
const fsSync = require("fs");
const path = require("path");

async function loadDB(resourceName) {
  const dbDir = path.join(__dirname, "..", "db");
  const filePath = path.join(dbDir, `${resourceName}.json`);

  try {
    // Đọc file
    const data = await fs.readFile(filePath, "utf8");
    // Parse JSON
    const parsedData = JSON.parse(data);
    // Đảm bảo là array
    if (Array.isArray(parsedData)) {
      return parsedData;
    } else {
      return [];
    }
  } catch (error) {
    // Nếu file không tồn tại hoặc lỗi parse, tạo thư mục và file với []
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

  // Tạo thư mục nếu chưa tồn tại
  if (!fsSync.existsSync(dbDir)) {
    await fs.mkdir(dbDir, { recursive: true });
  }

  // Ghi data dạng JSON
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

module.exports = {
  loadDB,
  saveDB,
};
