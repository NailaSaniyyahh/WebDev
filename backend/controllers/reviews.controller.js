import Review from "../models/reviews.model.js";
import Movie from "../models/movies.model.js";
import Country from "../models/countries.model.js";

// Get the latest 100 reviews with associated movie title and countries
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      limit: 100,
      order: [["id", "DESC"]],
      include: [
        {
          model: Movie,
          attributes: ["title"], // Fetch only the movie title
          include: [
            {
              model: Country,
              as: "countries", // Use the alias defined in the association
              attributes: ["name"], // Fetch only the country name
              through: { attributes: [] }, // Exclude join table attributes
            },
          ],
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Reviews retrieved successfully",
      reviews,
    });
  } catch (error) {
    console.error("Error in getReviews: ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

