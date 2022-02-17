exports.seed = function(knex) {
    return knex('steps').insert([
        // Meatball Sub
        { step_number: 1, step_instructions: 'Warm up meatballs and provolone cheese', recipe_id: 1},
        { step_number: 2, step_instructions: 'Put on hoagie bun', recipe_id: 1},
        { step_number: 3, step_instructions: 'Add pizza sauce', recipe_id: 1},
        { step_number: 4, step_instructions: 'Enjoy!', recipe_id: 1},

        // Instant Pot Chicken Noodle Soup
        { step_number: 1, step_instructions: 'Turn on instant pot to saute setting', recipe_id: 2},
        { step_number: 2, step_instructions: 'Add carrots and saute for 3 minutes', recipe_id: 2},
        { step_number: 3, step_instructions: 'Use salt and pepper to season', recipe_id: 2},
        { step_number: 4, step_instructions: 'Pour in chicken broth', recipe_id: 2},
        { step_number: 5, step_instructions: 'Add chicken pieces', recipe_id: 2},
        { step_number: 6, step_instructions: 'Set instant pot to the soup setting', recipe_id: 2},
        { step_number: 7, step_instructions: 'Set the timer for 7 minutes', recipe_id: 2},
        { step_number: 8, step_instructions: 'Remove chicken pieces and shred', recipe_id: 2},
        { step_number: 9, step_instructions: 'Add noodles to soup and cook on saute setting until noodles are cooked', recipe_id: 2},

        // One Skillet Cheesy Taco Pasta
        { step_number: 1, step_instructions: 'Brown ground beef in a large skillet', recipe_id: 3},
        { step_number: 2, step_instructions: 'Drain fat and add in seasonings', recipe_id: 3},
        { step_number: 3, step_instructions: 'Add water, salsa, corn and taco seasoning', recipe_id: 3},
        { step_number: 4, step_instructions: 'Stir and add in pasta noodles and taco sauce', recipe_id: 3},
        { step_number: 5, step_instructions: 'Bring to a boil then let simmer for 5-7 minutes', recipe_id: 3},
        { step_number: 6, step_instructions: 'Sprinkle with cheese', recipe_id: 3},
        { step_number: 7, step_instructions: 'Serve while hot!', recipe_id: 3}
    ]);
};