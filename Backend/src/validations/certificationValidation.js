const Joi = require("joi");

const certificationSchema =
  Joi.object({
    name:
      Joi.string()
        .required(),

    organization:
      Joi.string()
        .required(),

    issueDate:
      Joi.date()
        .required(),

    expiryDate:
      Joi.date(),

    credentialId:
      Joi.string()
        .allow(""),

    credentialUrl:
      Joi.string()
        .allow(""),
  });

module.exports = {
  certificationSchema,
};