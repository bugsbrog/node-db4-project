exports.seed = function(knex) {
    return knex('ingredients').insert([
        // Meatball Sub
        { ingredient_name: 'Meatballs' },
        { ingredient_name: 'Provolone cheese' },
        { ingredient_name: 'Hoagie bun' },
        { ingredient_name: 'Pizza sauce' },

        // Instant Pot Chicken Noodle Soup
        { ingredient_name: 'onion' },
        { ingredient_name: 'carrots' },
        { ingredient_name: 'celery' },
        { ingredient_name: 'salt' },
        { ingredient_name: 'pepper' },
        { ingredient_name: 'chicken broth' },
        { ingredient_name: 'chicken' },
        { ingredient_name: 'water'},
        { ingredient_name: 'noodles' },

        // One Skillet Cheesy Taco Pasta
        { ingredient_name: 'extra lean ground beef' },
        { ingredient_name: 'salsa' },
        { ingredient_name: 'corn' },
        { ingredient_name: 'taco seasoning' },
        { ingredient_name: 'elbow macaroni' },
        { ingredient_name: 'taco sauce' },
        { ingredient_name: 'shredded cheese' }
    ]);
};