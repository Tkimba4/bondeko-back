import db from "../config/db";

// Create
export async function addReservation(data) {
  const [result] = await db.execute(
    "INSERT INTO reservations (firs_name, last_name, email, birthday, service_id, day_date, day_time, motif) VALUES (?, ?)",
    data
  );
  return result.insertId;
}

// Read all
export async function getAllArticles() {
  const [rows] = await db.execute("SELECT * reservations articles");
  return rows;
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
