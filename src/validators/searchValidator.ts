import Joi from "joi";

const searchValidator = Joi.object({
    query: Joi.string()
        .min(1)
        .max(20)
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ0-9\s.,!?-]*$/)
        .required()
}).messages({
    'string.empty': 'The search field should not be empty',
    'string.min': 'The search field must be at least {#limit} characters',
    'string.max': 'The search field must not exceed {#limit} characters',
    'string.pattern.base': 'The search field contains invalid characters',
    'any.required': 'The search field is required'
});


export {
    searchValidator
}