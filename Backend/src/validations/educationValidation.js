const Joi = require("joi");

const educationSchema =
  Joi.object({
    institution:
      Joi.string()
        .required(),

    degree:
      Joi.string()
        .required(),

    fieldOfStudy:
      Joi.string()
        .required(),

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
  educationSchema,
};