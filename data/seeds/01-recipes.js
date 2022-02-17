exports.seed = function(knex) {
    return knex('recipes').insert([
        { recipe_name: 'Meatball Sub' },
        { recipe_name: 'Instant Pot Chicken Noodle Soup' },
        { recipe_name: 'One Skillet Cheesy Taco Pasta' }
    ]);
};
