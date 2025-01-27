const mysql = require("mysql");

const dbConfig = {
  host: process.env.HOST_MYSQL,
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  database: process.env.DATABASE_MYSQL,
  port: process.env.PORT_MYSQL,
  connectTimeout: 20000,
};

const connection = mysql.createConnection(dbConfig);

export default async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ msg: "Seules les requêtes POST sont autorisées" });
  }

  try {
    const { name, email, subject, message } = JSON.parse(req.body);

    const query =
      "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";
    const values = [name, email, subject, message];

    connection.query(query, values, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ msg: "Échec" });
      } else {
        console.log("Données insérées avec succès");
        res.status(201).json({ msg: "Succès" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Échec" });
  }
};
