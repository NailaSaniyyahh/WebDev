import Actor from "../models/actors.model.js";

// GET /api/actors - Fetch all actors with optional pagination
export const getActors = async (req, res) => {
  const { page = 1, limit = 25 } = req.query;
  const offset = (page - 1) * limit;

  try {
    // Find all actors with pagination
    const { count, rows: actors } = await Actor.findAndCountAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
    });

    res.status(200).json({
      success: true,
      totalCount: count,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      actors,
    });
  } catch (error) {
    console.error("Error fetching actors:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};