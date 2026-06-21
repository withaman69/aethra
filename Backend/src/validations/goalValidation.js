const Joi = require("joi");

const goalSchema =
  Joi.object({
    title:
      Joi.string()
        .required(),

    description:
      Joi.string()
        .allow(""),

    targetDate:
      Joi.date(),

    status:
      Joi.string().valid(
        "Not Started",
        "In Progress",
        "Completed"
      ),

    progress:
      Joi.number()
        .min(0)
        .max(100),
  });

module.exports = {
  goalSchema,
};