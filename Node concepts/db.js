// database

const sql = require("mysql2");

const conn = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "jhanu@1026",
    database: "test"
});

// connection avuthy akkada details conn aney dantlo save iyi unthadi

// ✅ Get all rows from family table
function getFamily() {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM family`, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

// ✅ Insert into family (name, year)
function addFamily(name, year) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO family(name, year) VALUES (?, ?)`;
        conn.query(sql, [name, year], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

// ✅ Update family row by ID
function updateFamily(id, name, year) {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE family SET name = ?, year = ? WHERE studentID = ?`;
        conn.query(sql, [name, year, id], (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}


// ✅ Delete a row from family by ID
function deleteFamily(id) {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM family WHERE studentID = ?`;
    conn.query(sql, [id], (err, result) => {
      if (err) reject(err);
      else resolve(result); // result.affectedRows will help check if row was deleted
    });
  });
}


// Export all functions
module.exports = {
    getFamily,
    addFamily,
    updateFamily,
    deleteFamily
};