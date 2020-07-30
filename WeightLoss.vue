<template>
    <v-container>
        <v-row wrap>
        <v-col class="md-4" v-for="(item,i) in recipes" :key="i">
          <v-card class="success mx-auto" max-width="344">
            <v-img :src="item.src" height="194"></v-img>
            <v-card-title class="white--text text-uppercase">{{item.name}}</v-card-title>
            <v-card-text class="white--text text-capitalize">
                <v-expansion-panels popout>
                <v-expansion-panel v-for="(c,i) in item.content" :key="i">
                  <v-expansion-panel-header>{{c.name}}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                  <v-row v-for="inn in c.det" :key="inn" wrap>
                     <v-col>
                       {{inn}}
                    </v-col>
                  </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    
            </v-card-text>
            <v-card-actions>
                            
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "WeightLoss",
        components:{

        },
        data(){
            return{
              titles:[
                "Ingredients",
                "Preparation"
              ],
                recipes:[
                    {
                        name: "Oatmeal Pancakes",
                        src: "https://i0.wp.com/www.eatthis.com/wp-content/uploads/2018/12/healthy-oatmeal-pancakes-cinnamon-apples.jpg?resize=1024%2C750&ssl=1",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "1 1⁄2 cups buttermilk",
                                "3⁄4 cup instant rolled oats",
                                "3⁄4 cup whole wheat flour",
                                "2 Tbsp milk",
                                "1 Tbsp melted butter",
                                "1 1⁄2 tsp baking powder",
                                "1⁄2 tsp baking soda",
                                "Pinch of cinnamon (plus 1⁄8 tsp for the apples)",
                                "Pinch of nutmeg",
                                "1 Granny Smith apple, peeled, cored, and chopped",
                                "1⁄2 cup apple juice",
                                "2 Tbsp brown sugar",
                                "Butter or cooking spray"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                    "STEP 1: In a large mixing bowl, combine the buttermilk, oats, flour, milk, butter, baking powder, baking soda, pinch of cinnamon, and nutmeg. Stir to gently combine, then set aside to rest for a few minutes.",
                                    "STEP 2: Combine the apple, apple juice, brown sugar, and remaining 1⁄8 teaspoon cinnamon in a small saucepan and bring to a simmer. Cook until the apple has softened and the liquid has thickened.",
                                    "STEP 3: Preheat the oven to 200°F. Heat a large nonstick or cast-iron skillet over medium heat. Adding a bit of butter or cooking spray before each round, scoop 1⁄4-cup portions of batter into the skillet and use a spatula to spread into thin, even circles.",
                                    "STEP 4: Cook until small bubbles form in the top of the batter, 2 to 3 minutes, then flip and cook for another 2 minutes. Keep pancakes warm in the oven while you finish cooking. Serve topped with the warm apples and a bit of confectioners' sugar, if you like."
                                    
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "Calories 105",
                                    " Fat     0.5g	", 
                                    "Sodium     16mg  ",
                                    "Potassium     355mg	",
                                    "Carbohydrates      20g",	
                                    "Sugar     11.8g"	,
                                    "Fiber      5g",
                                    "Protein     2g	"
                                ]

                            },

                        ],
                        
                       
                        
                    },
                     {
                        name: "Guacamole",
                        src: "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/12/healthy-guacamole.jpg?resize=1024%2C750&ssl=1",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "1/4 cup chopped cilantro",
                                "2 cloves garlic, minced",
                                "Salt to taste",
                                "2 ripe avocados, pitted and peeled",
                                "1/4 cup minced onion",
                                "2 Tbsp minced jalapeño pepper",
                                "Juice of 1 lemon",
                                "2 oz tortilla chips"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Combine the cilantro and garlic on a cutting board and use the back of a chef's knife to work them into a fine paste; a pinch of coarse salt helps this process.",
                                "STEP 2: Transfer the paste to a bowl and add the avocado.",
                                "STEP 3: Use a fork to mash the avocado into a mostly smooth—but still slightly chunky—purée.",
                                "STEP 4: Stir in the onion, jalapeño, lemon juice, and salt.",
                                "STEP 5: Serve with tortilla chips or warm corn tortillas."
                                
                                ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    " Calories 297",
                                    "fat 20g",
                                    "saturates 3g",
                                    "carbs 27g",
                                    "sugars 4g",
                                    "fibre 9g",
                                    "protein 5g",
                                    "potassium 689mg"
                                    
                                ]

                            },

                        ],

                        
                       
                     },
                      {
                        name: "Vegetable Wrap",
                        src: " https://i2.wp.com/www.eatthis.com/wp-content/uploads/2018/12/healthy-grilled-veggie-wrap.jpg?resize=1024%2C750&ssl=1",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "12 asparagus spears, woody ends removed",
                                "2 portobello mushroom caps",
                                "1 red bell pepper, halved, seeds and stem removed",
                                "1 Tbsp olive oil",
                                "Salt and black pepper to taste",
                                "2 Tbsp olive oil mayonnaise",
                                "1 Tbsp balsamic vinegar",
                                "1 clove garlic, minced",
                                "4 large spinach or whole-wheat tortillas or wraps",
                                "2 cups arugula, baby spinach, or mixed baby greens",
                                "3⁄4 cup crumbled goat or feta cheese"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Toss the asparagus, mushrooms, and bell pepper with the olive oil, plus a few pinches of salt and pepper.",
                                "STEP 2: Place on the hottest part of the grill and cook, turning occasionally, until lightly charred and tender.",
                                "STEP 3: The asparagus should take the least amount of time (about 5 minutes) and the peppers the most (about 10 minutes).",
                                "STEP 4: Alternatively, you can roast the vegetables in a 450°F oven for 10 to 12 minutes.",
                                "STEP 5: Slice the mushroom caps into thin strips. If possible, peel off the charred skin of the pepper and then slice.",
                                "STEP 6: Combine the mayonnaise, vinegar, and garlic, and stir to combine thoroughly.",
                                "STEP 7: Heat the tortillas on the grill or in the microwave for 30 seconds.",
                                "STEP 8: Spread the balsamic mayo down the middle of each tortilla, then top with the greens and cheese."
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "240   Calories",
                                    "13g    Fats"

                                ]

                            },

                        ],
                        
                       
                      }, {
                        name: "Bruschetta",
                        src: "https://i2.wp.com/www.eatthis.com/wp-content/uploads/2019/01/vegetarian-bruschetta-two-ways.jpg?resize=1024%2C750&ssl=1",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                "2 large tomatoes, seeded and chopped",
                                "2 cloves garlic, minced ",
                                "½ cup chopped fresh basil",
                                "1 tbsp olive oil",
                                "Salt and pepper to taste"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Preheat the oven to 450°F.",
                                "STEP 2: Place the baguette slices on a baking sheet and bake until light brown",
                                "STEP 3: While the bread bakes, mix the tomatoes, garlic, basil, and olive oil.",
                                "STEP 4: Season to taste with salt and pepper.",
                                "STEP 5: Remove the bread from the oven and arrange on a large serving plate or individual plates.",
                                "STEP 6: Top half with the tomato mixture.",
                                "STEP 7: Slather the other half with the ricotta, then top with a small scoop of the peppers from the pepperonata"
                            
                                
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    " Calories	240",
                                    "Total Fat	 7g",
                                    "Sodium	 410mg"
                                ]

                            },

                        ],
                        
                       
                      },
                       
                        {
                        name: "Spinach & Ham Quiche",
                        src: "https://i2.wp.com/www.eatthis.com/wp-content/uploads/2019/01/low-calorie-spinach-ham-quiche.jpg?resize=1024%2C750&ssl=1",
                         content:[
                          {
                            name : "Ingredients",
                            det:[
                                "1 frozen pie shell, thawed and pricked with a fork",
                                "1⁄2 Tbsp olive oil",
                                "1 clove garlic, minced",
                                "1⁄2 bunch spinach, washed, dried, and stemmed",
                                "2 oz smoked ham, cut into 1⁄4-inch cubes",
                                "1⁄2 cup shredded Swiss cheese",
                                "4 eggs",
                                "3⁄4 cup milk",
                                "1⁄4 cup half-and-half",
                                "1⁄2 tsp salt",
                                "Pinch of nutmeg"
                            ]
                            },
                            {
                              name:"Preparation",
                              det:[
                                "STEP 1: Preheat the oven to 375°F. When hot, place the pie shell on the middle rack and bake for about 8 minutes, until lightly toasted, but not browned.",
                                "STEP 2: While the oven heats and the shell bakes, heat the olive oil in large skillet or pot over medium heat. Add the garlic, cook for 30 seconds, then add the spinach.",
                                "STEP 3: Cook for 5 minutes, until the spinach is fully wilted. In a large mixing bowl, combine the ham, cheese, eggs, milk, half-and-half, and spinach.",
                                "STEP 4: Season with salt and a pinch of nutmeg.",
                                "STEP 5: Pour the egg mixture into the warm pastry shell.",
                                "STEP 6: Bake for about 12 minutes, until the quiche has browned lightly on top and a toothpick inserted into the center comes out clean.",

                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                     "Calories	260",
                                    "Total Fat	15 g",
                                    "Sodium	550 mg"
                                ]

                            },

                        ],
                        
                       
                        },
                         {
                        name: "Apple Crumble",
                        src: " https://i2.wp.com/www.eatthis.com/wp-content/uploads/2019/01/apple-crumble.jpg?resize=1024%2C750&ssl=1",
                        content:[
                          {
                            name : "Ingredients",
                            det:[
                                  "2 Granny Smith apples, peeled, cored, and cut into wedges",
                                  "1⁄2 cup apple juice",
                                  "4 Tbsp brown sugar",
                                  "1⁄4 tsp cinnamon",
                                  "1⁄4 tsp nutmeg",
                                  "1 cup rolled oats",
                                  "Pinch salt",
                                  "2 Tbsp chilled butter, cut into small pieces",
                                  "1⁄4 cup chopped almonds",
                                  "Whipped cream or crème fraîche"                                
                            ]
                            },
                            {
                              name:"Preparation",
                              det:["STEP 1: Preheat the oven to 400°F.",
                                   "STEP 2: Combine the apples, apple juice, 2 tablespoons brown sugar, 1⁄8 teaspoon cinnamon, and 1⁄8 teaspoon nutmeg in a large mixing bowl.",
                                   "STEP 3: In a separate bowl, combine the oats with the remaining 2 tablespoons brown sugar, 1⁄8 teaspoon cinnamon, and 1⁄8 teaspoon nutmeg, plus a good pinch of salt.",
                                   "STEP 4: Add the butter and work the mixture with your fingertips until it comes together in moist clumps. Add the almonds and work them in as well.",
                                   "STEP 5: Divide the apples among 4 ramekins, and top with the oatmeal-almond mixture. Bake in the middle rack of the oven for about 25 minutes, until the apples are hot and bubbling and the crumble has begun to brown.",
                                   "STEP 6: Let cool for a few minutes. Serve with a generous dollop of whipped cream."
                            ]
                            },
                            {
                                name:"Nutrtional Value",
                                det:[
                                    "kcal 718",
                                    "fat 25g",
                                    "saturates 4.2g",
                                    "carbs 93g",
                                    "fibre 5.4g",
                                    "protein 34g"
                                    
                                    
                                ]

                            },

                        ],
                        
                       
                         }

                    
                ]
            }
        },
        computed:{

        },
        created(){

        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

* {
  font-family: "Raleway", sans-serif;
  text-decoration: none;
}

</style>
