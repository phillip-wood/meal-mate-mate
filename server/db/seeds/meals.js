exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        { 
          mealName: 'whitebait fritters', 
          ingredients: '3 eggs, 200g whitebait, salt, oil, butter, lemon', 
          description: 'Beat the eggs with a fork in a bowl until light and frothy. Stir the whitebait into the egg mix. Add a good pinch of salt and freshly ground black pepper to taste. Mix together well. In a large frying pan add the oil and butter to the pan on a medium heat. When the butter starts to bubble add the egg and whitebait mixture in even tablespoonfuls and cook for one-two minutes, then flip and cook the other side until lightly golden brown. When cooked transfer to a warmed spare plate. Continue cooking in batches of 5-6 fritter until the mixture is finished. Serve with fresh lemon wedges – and slices of fresh buttered white bread for the classic traditional Kiwi serving.', 
          imgURL: 'https://nt63xpepn03htbpb2sddvciv-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/img_3049-1080x720.jpg',  author: 'Manu'
        },
        { 
          mealName: 'feijoa ice cream', 
          ingredients: 'feijoas 500g, 2 medium-sized ripe bananas, cream or natural yoghurt ½ cup, fresh mint about 20 leaves', 
          description: 'Line a large tray (that will fit in your freezer) with baking paper and arrange feijoas and banana on top in a single layer. Cover with cling film and freeze for at least 8 hours or overnight until frozen hard.When ready to make and serve the ice-cream, place frozen feijoas and bananas in the bowl of a large food processor (note: if the fruit is frozen rock-hard, leave it to thaw for about 5 minutes before blitzing; this will make it easier on the food processor!). Chop the whole feijoa (including the green skin) and add to the food processor, along with cream or yoghurt and mint leaves. Blitz everything together until smooth and well combined, scraping down the sides of the food processor a few times to make sure everything gets blitzed. Add a little more cream/yoghurt as necessary, until you have achieved an ice-cream consistency.', imgURL: 'https://nadialim.com/wp-content/uploads/2014/04/Feijoa-ice-cream-1-555x555.jpg',  
          author: 'Blackie'
        },
        { 
          mealName: 'pavlova', 
          ingredients: '6 egg whites (at room temperature), 2 cups Chelsea Caster Sugar, 1 tsp vanilla essence, 1 tsp white vinegar, 2 tsp Edmonds Fielders Cornflour, 300ml Meadow Fresh Original Cream, whipped, Fruit for decoration', 
          description: 'Pre-heat oven to 110ºC bake (not fan bake). Line a baking tray with baking paper. In a large metal, ceramic or glass bowl (not plastic), beat the egg whites until soft peaks form. Continue beating while adding the Chelsea Caster Sugar a quarter of a cup at a time. The mixture should get glossier and thicker with each addition and this should take at least 10 minutes. Beat in the vanilla, vinegar and Edmonds Fielders Cornflour. Spoon mixture out onto the prepared tray into a dinner plate sized mound. Bake for approximately 1 1/2 hours, until dry and crisp and it lifts easily off the baking paper. Turn the oven off and leave the pavlova for at least an hour before removing from the oven. Finish cooling on a wire rack. When completely cool, place on a serving plate, swirl the top with the whipped Meadow Fresh Original Cream and decorate with sliced or chopped fruit of your choice.', 
          imgURL: 'https://www.chelsea.co.nz/_uploads/recipes/bdbf2d18-56ba-4f9b-9396-5cbe2566b765.jpg',  
          author: 'Gazza'
        }
      ])
    })
}
