const pool = require('../utils/pool');

module.exports = class Beer {
  id;
  name;
  style;
  brewery;
  location;
  hops;
  ABV;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.style = row.style;
    this.brewery = row.brewery;
    this.location = row.location;
    this.hops = row.hops;
    this.ABV = row.abv;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM beers;');
    return rows.map((row) => new Beer(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM beers WHERE id=$1', [id]);
    if (!rows[0]) return null;

    return new Beer(rows[0]);
  }
};
