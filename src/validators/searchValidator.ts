import Joi from "joi";

const searchValidator = Joi.object({
    search:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required()
})


export {
    searchValidator
}