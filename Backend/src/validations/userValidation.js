const Joi = require("joi");

const updateProfileSchema = Joi.object({
name: Joi.string().min(2).max(50),

bio: Joi.string().allow(""),

occupation: Joi.string().allow(""),

skills: Joi.array().items(
Joi.string()
),

goals: Joi.array().items(
Joi.string()
),
});

module.exports = {
updateProfileSchema,
};
