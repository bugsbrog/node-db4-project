const Recipe = require('./recipes-model')

const router = require('express').Router()

router.get('/:recipe_id', async (req, res, next) => {
    const { recipe_id } = req.params
        try {
            const getId = await Recipe.getRecipeById(recipe_id)
            res.json(getId)
        } catch (err) {
            next(err)
        }
})

module.exports = router