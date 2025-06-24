const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const db = new sqlite3.Database('./src/models/db.sqlite', (err) => {
  if (err) {
    console.error('Erreur ouverture DB:', err.message);
    process.exit(1);
  }
  console.log('Connexion OK');

  const sql = fs.readFileSync('./src/models/init.sql', 'utf8');

  db.exec(sql, (errExec) => {
    if (errExec) {
      console.error('Erreur lors de l’exécution du script SQL:', errExec.message);
      db.close();
      process.exit(1);
    } else {
      console.log('Script SQL OK');
      db.close();
    }
  });
});
