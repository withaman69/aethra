const Joi = require("joi");

const projectSchema =
  Joi.object({
    title:
      Joi.string()
        .required(),

    description:
      Joi.string()
        .required(),

    technologies:
      Joi.array().items(
        Joi.string()
      ),

    githubLink:
      Joi.string()
        .allow(""),

    liveLink:
      Joi.string()
        .allow(""),

    startDate:
      Joi.date(),

    endDate:
      Joi.date(),
  });

module.exports = {
  projectSchema,
};