import db from "../../.inu/sqlite.js";

// Create
export async function createArticle(title, content) {
  const [result] = await db.execute(
    "INSERT INTO articles (title, content) VALUES (?, ?)",
    [title, content]
  );
  return result.insertId;
}

// Read all
export async function selectAll(callback) {
  // const [rows] = await db.execute('SELECT * FROM articles');
  // return rows;
  // db.

  db.all("SELECT * FROM Services", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
}

// Read one
export async function getArticleById(id) {
  const [rows] = await db.execute("SELECT * FROM articles WHERE id = ?", [id]);
  return rows[0]; // null si pas trouvé
}

// Update
export async function updateArticle(id, title, content) {
  const [result] = await db.execute(
    "UPDATE articles SET title = ?, content = ? WHERE id = ?",
    [title, content, id]
  );
  return result.affectedRows; // 0 si rien n’a changé
}

// Delete
export async function deleteArticle(id) {
  const [result] = await db.execute("DELETE FROM articles WHERE id = ?", [id]);
  return result.affectedRows;
}
