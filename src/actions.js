// Connect to database
const testQuery = async (db) => {
    const results = await db.query('SELECT * FROM employee');
    console.table(results);
};

module.exports = { testQuery };