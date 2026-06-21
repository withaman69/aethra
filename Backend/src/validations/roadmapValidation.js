const Joi = require("joi");

const roadmapSchema =
  Joi.object({
    title:
      Joi.string()
        .required(),

    careerPath:
      Joi.string()
        .required(),

    description:
      Joi.string()
        .allow(""),

    difficulty:
      Joi.string().valid(
        "Beginner",
        "Intermediate",
        "Advanced"
      ),

    estimatedDuration:
      Joi.string()
        .allow(""),

    steps:
      Joi.array().items(
        Joi.string()
      ),
  });

module.exports = {
  roadmapSchema,
};