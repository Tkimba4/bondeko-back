import db from "./sqlite.js";
import query from "../../models/shema.js";

db.serialize(() => {
  db.exec(query, (err) => {
    if (err) {
      console.error("Erreur création table", err.message);
    } else {
      console.log("Table utilisateurs créée ou déjà existante.");
    }
  });
});
