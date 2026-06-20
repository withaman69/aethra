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

avatar: Joi.string().allow(""),
});

const changePasswordSchema = Joi.object({
currentPassword: Joi.string().required(),

newPassword: Joi.string()
.min(6)
.required(),
});

module.exports = {
updateProfileSchema,
changePasswordSchema,
};
