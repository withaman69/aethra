const Joi = require("joi");

const experienceSchema =
  Joi.object({
    company:
      Joi.string()
        .required(),

    position:
      Joi.string()
        .required(),

    employmentType:
      Joi.string()
        .allow(""),

    location:
      Joi.string()
        .allow(""),

    startDate:
      Joi.date()
        .required(),

    endDate:
      Joi.date()
        .allow(null),

    current:
      Joi.boolean(),

    description:
      Joi.string()
        .allow(""),
  });

module.exports = {
  experienceSchema,
};