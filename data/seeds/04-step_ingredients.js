exports.seed = function(knex) {
    return knex('step_ingredients').insert([
        // Meatball Sub
        { step_id: 1, ingredient_id: 1, quantity: '3 meatballs' },
        { step_id: 2, ingredient_id: 2, quantity: '1 slice' },
        { step_id: 3, ingredient_id: 3, quantity: '1 bun' },
        { step_id: 4, ingredient_id: 4, quantity: '1 tbsp' },

        // Instant Pot Chicken Noodle Soup
        { step_id: 5, ingredient_id: 5, quantity: '1 chopped' },
        { step_id: 6, ingredient_id: 6, quantity: '2 medium' },
        { step_id: 7, ingredient_id: 7, quantity: '2 stalks chopped' },
        { step_id: 8, ingredient_id: 8, quantity: '1 tsp' },
        { step_id: 9, ingredient_id: 9, quantity: '1 tsp' },
        { step_id: 10, ingredient_id: 10, quantity: '4 cups' },
        { step_id: 11, ingredient_id: 11, quantity: '2 lbs' },
        { step_id: 12, ingredient_id: 12, quantity: '4 cups' },
        { step_id: 13, ingredient_id: 13, quantity: '5 oz' },

        // One Skillet Cheesy Taco Pasta
        { step_id: 14, ingredient_id: 14, quantity: '1 lb' },
        { step_id: 15, ingredient_id: 15, quantity: '1 cup' },
        { step_id: 16, ingredient_id: 16, quantity: '1 can' },
        { step_id: 17, ingredient_id: 17, quantity: '1 packet' },
        { step_id: 18, ingredient_id: 18, quantity: '2 cups/10 oz' },
        { step_id: 19, ingredient_id: 19, quantity: '1 cup' },
        { step_id: 20, ingredient_id: 20, quantity: '1 1/2-2 cups' },
    ]);
};