import db from "../config/db/sqlite.js";

// Create
export async function insert(data, callback) {
  const {
    first_name,
    last_name,
    email,
    birthday,
    service,
    day_date,
    day_time,
    reason,
  } = data;
  db.run(
    `
      INSERT INTO Reservations 
      (first_name, last_name, email, birthday, service_id, day_date, day_time, reason)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      first_name,
      last_name,
      email,
      birthday,
      service,
      day_date,
      day_time,
      reason,
    ],
    (err) => {
      if (err) {
        console.log(err);
        return callback(err);
      }
      return callback(null, "Reservation added successfully");
    }
  );
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
