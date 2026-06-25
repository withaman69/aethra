const Joi = require("joi");

const skillSchema = Joi.object({
  name: Joi.string().required(),

  category: Joi.string().allow(""),

  level: Joi.string().valid(
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert"
  ),
});

module.exports = {
  skillSchema,
};