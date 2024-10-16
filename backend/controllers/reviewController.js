import sequelize from '../db/connectDB.js'; // ESM Import

// Fetch all reviews
export const getReview = async (req, res) => {
  try {
    const [results] = await sequelize.query('SELECT * FROM reviews');
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Insert new review
export const addReview = async (req, res) => {
  const { movieId, user, rating, text } = req.body;

  // SQL query for inserting a new review
  const sql = `INSERT INTO reviews (movie_id, author, rating, content) VALUES (?, ?, ?, ?)`;

  try {
    await sequelize.query(sql, {
      replacements: [movieId, user, rating, text], // Parameter binding
    });
    res.status(201).json({ message: 'Review added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
