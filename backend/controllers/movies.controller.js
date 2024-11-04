import { Op } from "sequelize";
import fs from "fs";
import path from "path";
import Movie from "../models/movies.model.js";
import Genre from "../models/genres.model.js"; // Pastikan untuk mengimpor Genre
import Actor from "../models/actors.model.js"; // Pastikan untuk mengimpor Actor
import Country from "../models/countries.model.js";

export const createMovie = async (req, res) => {
  try {
    const {
      title,
      synopsis,
      year,
      rating,
      trailer,
      category,
      countries, // Array of country IDs
      genres, // Array of genre IDs
      actors, // Array of actor IDs
    } = req.body;

    console.log(typeof genres, typeof actors, typeof countries);

    // Save poster file path if present
    const posterPath = req.file ? `uploads/movies/${req.file.filename}` : null;

    // Ensure required fields are provided
    if (!title || !posterPath) {
      return res.status(400).json({
        success: false,
        message: "Both title and poster are required.",
      });
    }

    // Create a new entry in the Movie table
    const movie = await Movie.create({
      title,
      synopsis,
      year,
      rating,
      poster: posterPath,
      trailer,
      category,
    });

    // Parse the arrays
    const genresData = JSON.parse(genres);
    const actorsData = JSON.parse(actors);
    const countriesData = JSON.parse(countries);

    console.log(genresData, actorsData, countriesData);

    // Add many-to-many relationship with Genre
    if (Array.isArray(genresData) && genresData.length > 0) {
      const genreInstances = await Genre.findAll({
        where: { id: { [Op.in]: genresData } },
      });
      console.log("Genre instances found:", genreInstances);
      await movie.addGenres(genreInstances);
    }

    // Add many-to-many relationship with Actor
    if (Array.isArray(actorsData) && actorsData.length > 0) {
      const actorInstances = await Actor.findAll({
        where: { id: { [Op.in]: actorsData } },
      });
      console.log("Actor instances found:", actorInstances);
      await movie.addActors(actorInstances);
    }

    // Add many-to-many relationship with Country
    if (Array.isArray(countriesData) && countriesData.length > 0) {
      const countryInstances = await Country.findAll({
        where: { id: { [Op.in]: countriesData } },
      });
      console.log("Country instances found:", countryInstances);
      await movie.addCountries(countryInstances);
    }

    res.status(201).json({
      success: true,
      message: "Movie created successfully",
      movie,
    });
  } catch (error) {
    console.error("Error creating movie:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create movie",
    });
  }
};
  
export const getMovies = async (req, res) => {
  try {
    // Get the total count of movies
    const totalMovies = await Movie.count();

    // Calculate the offset to get the last 10 movies
    const offset = Math.max(totalMovies - 10, 0); // Ensure offset is not negative

    // Fetch the last 10 movies based on the calculated offset
    const movies = await Movie.findAll({
      attributes: ["id", "title", "year", "synopsis", "rating", "poster", "trailer"], // Include required attributes
      include: [
        {
          model: Genre,
          as: "genres",
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
        {
          model: Actor,
          as: "actors",
          attributes: ["id", "name", "profile_path"],
          through: { attributes: [] },
        },
        {
          model: Country,
          as: "countries",
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
      ],
      offset: offset,
      limit: 10,
    });

    // Respond with the fetched movies
    res.status(200).json({
      success: true,
      movies,
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve movies",
    });
  }
};


// Menghapus poster file jika terjadi error saat menyimpan
const deletePoster = (posterPath) => {
  try {
    fs.unlinkSync(posterPath);
  } catch (error) {
    console.error("Error deleting poster file:", error);
  }
};