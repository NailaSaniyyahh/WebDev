import { DataTypes } from "sequelize";
import sequelize from "../db/connectDB.js";
import Movie from "./movies.model.js";
import Country from "./countries.model.js";

// Define Review model
const Review = sequelize.define(
  "Review",
  {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Movie,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
    tableName: "reviews",
  }
);

// Define associations
Review.belongsTo(Movie, { foreignKey: "movie_id", as: "movie" });
Movie.hasMany(Review, { foreignKey: "movie_id", as: "reviews" });


export default Review;

