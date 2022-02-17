const db = require('../../data/db-config')

async function getRecipeById(recipe_id) {
    /*
        SELECT
            r.*,
            st.step_id,
            st.step_number,
            st.step_instructions,
            i.*,
            sti.quantity
        FROM step_ingredients as sti
        JOIN steps as st
            ON sti.step_id = st.step_id
        JOIN ingredients as i
            ON i.ingredient_id = sti.ingredient_id
        JOIN recipes as r
            ON r.recipe_id = st.recipe_id
        WHERE r.recipe_id = 1;
     */
    const ingred = await db('step_ingredients as sti')
        .join('steps as st', 'sti.step_id', 'st.step_id')
        .join('ingredients as i', 'i.ingredient_id', 'sti.ingredient_id')
        // .select('r.*', 'st.step_id', 'st.step_number', 'st.step_instructions', 'i.*', 'sti.quantity')
        .where('st.recipe_id', recipe_id)

    const rec = await db('steps as st')
        .join('recipes as r', 'r.recipe_id', 'st.recipe_id')
        .where('r.recipe_id', recipe_id)
        .orderBy('st.step_number')


    const ingredMap = ingred.map(ing => {
        return ({
            ingredient_id: ing.ingredient_id,
            ingredient_name: ing.ingredient_name,
            quantity: ing.quantity
        })
    })

    const stepMap = rec.map(st => {
        return ({
            step_id: st.step_id,
            step_number: st.step_number,
            step_instructions: st.step_instructions,
                    // value if true   value if false
            ingredients: !ingredMap ? [] : ingredMap
        })
    })

    const result = {
        recipe_id: rec[0].recipe_id,
        recipe_name: rec[0].recipe_name,
        steps: stepMap
    }

    return result
}

module.exports = {
    getRecipeById
}