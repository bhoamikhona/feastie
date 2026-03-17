const restaurants = [
  {
    id: "rest_001",
    name: "Pizza Express",
    slug: "pizza-express",
    description:
      "Classic Italian-style pizzas with hand-stretched dough and premium toppings.",
    category: "Pizza",
    cuisine: "Italian",
    type: ["Lunch", "Dinner"],
    address: {
      street: "30 Rockefeller Plaza",
      city: "New York",
      state: "NY",
      zip: "10112",
      country: "US",
      coordinates: { lat: 40.7587, lng: -73.9787 },
    },
    rating: {
      average: 4.5,
      count: 3120,
      breakdown: { 1: 70, 2: 110, 3: 290, 4: 850, 5: 1800 },
    },
    delivery: {
      is_available: true,
      fee: 1.99,
      free_above: 25,
      estimated_time_min: 25,
      estimated_time_max: 40,
      radius_miles: 4,
    },
    hours: {
      monday: { open: "11:00", close: "22:30", is_closed: false },
      tuesday: { open: "11:00", close: "22:30", is_closed: false },
      wednesday: { open: "11:00", close: "22:30", is_closed: false },
      thursday: { open: "11:00", close: "22:30", is_closed: false },
      friday: { open: "11:00", close: "23:30", is_closed: false },
      saturday: { open: "10:00", close: "23:30", is_closed: false },
      sunday: { open: "10:00", close: "22:00", is_closed: false },
    },
    tags: ["popular", "dine-in", "family-friendly"],
    images: {
      cover: require("../assets/images/pizza-express.png"),
      thumbnail:
        "https://www.starbucks.com/weblx/images/product-placeholder.png",
    },
    badges: ["Top Rated"],
    menu: [
      {
        id: "item_0001",
        name: "Margherita",
        description:
          "Classic tomato base, fior di latte mozzarella, fresh basil, and extra-virgin olive oil.",
        price: 14.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0002",
        name: "American Hot",
        description:
          "Tomato, mozzarella, pepperoni, green peppers, and hot green chillies.",
        price: 16.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0003",
        name: "La Reine",
        description:
          "Tomato, mozzarella, smoked ham, black olives, and forest mushrooms.",
        price: 16.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0004",
        name: "Padana",
        description:
          "Tomato base, mozzarella, goat's cheese, caramelised onions, spinach, and pine nuts.",
        price: 17.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0005",
        name: "Pollo ad Astra",
        description:
          "Tomato, mozzarella, grilled chicken, red peppers, hot green chillies, and red onion.",
        price: 17.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0006",
        name: "Vegan Margherita",
        description:
          "Tomato base, vegan mozzarella alternative, fresh basil, and olive oil.",
        price: 15.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
    ],
    contact: {
      phone: "+1-212-555-0101",
      email: "orders@pizzaexpress.com",
      website: "https://pizzaexpress.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_002",
    name: "Starbucks",
    slug: "starbucks",
    description:
      "Premium handcrafted coffees, espresso drinks, and cold brews made to order.",
    category: "Coffee",
    cuisine: "American",
    type: ["Breakfast"],
    address: {
      street: "620 Avenue of the Americas",
      city: "New York",
      state: "NY",
      zip: "10011",
      country: "US",
      coordinates: { lat: 40.7243, lng: -73.9975 },
    },
    rating: {
      average: 4.3,
      count: 8740,
      breakdown: { 1: 230, 2: 410, 3: 1100, 4: 2800, 5: 4200 },
    },
    delivery: {
      is_available: true,
      fee: 0.99,
      free_above: 15,
      estimated_time_min: 15,
      estimated_time_max: 30,
      radius_miles: 2.5,
    },
    hours: {
      monday: { open: "05:30", close: "21:00", is_closed: false },
      tuesday: { open: "05:30", close: "21:00", is_closed: false },
      wednesday: { open: "05:30", close: "21:00", is_closed: false },
      thursday: { open: "05:30", close: "21:00", is_closed: false },
      friday: { open: "05:30", close: "21:30", is_closed: false },
      saturday: { open: "06:00", close: "21:30", is_closed: false },
      sunday: { open: "06:00", close: "20:30", is_closed: false },
    },
    tags: ["coffee", "quick", "popular", "breakfast"],
    images: {
      cover: require("../assets/images/starbucks.png"),
      thumbnail:
        "https://www.starbucks.com/weblx/images/product-placeholder.png",
    },
    badges: ["Most Ordered"],

    menu: [
      {
        id: "item_0010",
        name: "Caramel Macchiato",
        description:
          "Freshly steamed milk with vanilla syrup, bold espresso, and a caramel drizzle.",
        price: 5.95,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0011",
        name: "Caffè Latte",
        description:
          "Rich full-bodied espresso with steamed milk and a light layer of foam.",
        price: 4.95,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0012",
        name: "Cold Brew Coffee",
        description:
          "Slow-steeped for 20 hours for a smooth, sweet taste served over ice.",
        price: 4.45,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0013",
        name: "Pumpkin Spice Latte",
        description:
          "Espresso, steamed milk, pumpkin and warm spice flavors, topped with whipped cream.",
        price: 6.25,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0014",
        name: "Espresso Frappuccino",
        description:
          "Coffee blended with milk and ice, topped with whipped cream. A Starbucks classic.",
        price: 5.75,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0015",
        name: "Flat White",
        description:
          "Ristretto shots of espresso combined with a thin layer of velvety steamed whole milk.",
        price: 5.25,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
    ],
    contact: {
      phone: "+1-212-555-0202",
      email: "orders@starbucks.com",
      website: "https://starbucks.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_003",
    name: "Krispy Kreme",
    slug: "krispy-kreme",
    description:
      "Hot, fresh doughnuts glazed and filled, made from our original recipe since 1937.",
    category: "Doughnuts",
    cuisine: "American",
    type: ["Dessert"],
    address: {
      street: "1601 Broadway",
      city: "New York",
      state: "NY",
      zip: "10019",
      country: "US",
      coordinates: { lat: 40.759, lng: -73.9845 },
    },
    rating: {
      average: 4.6,
      count: 5210,
      breakdown: { 1: 90, 2: 150, 3: 420, 4: 1450, 5: 3100 },
    },
    delivery: {
      is_available: true,
      fee: 1.49,
      free_above: 20,
      estimated_time_min: 15,
      estimated_time_max: 30,
      radius_miles: 3,
    },
    hours: {
      monday: { open: "06:00", close: "22:00", is_closed: false },
      tuesday: { open: "06:00", close: "22:00", is_closed: false },
      wednesday: { open: "06:00", close: "22:00", is_closed: false },
      thursday: { open: "06:00", close: "22:00", is_closed: false },
      friday: { open: "06:00", close: "23:00", is_closed: false },
      saturday: { open: "06:00", close: "23:00", is_closed: false },
      sunday: { open: "07:00", close: "21:00", is_closed: false },
    },
    tags: ["sweet", "popular", "dessert", "breakfast"],
    images: {
      cover: require("../assets/images/krispy-kreme.png"),
      thumbnail:
        "https://www.starbucks.com/weblx/images/product-placeholder.png",
    },
    badges: ["Fan Favorite"],

    menu: [
      {
        id: "item_0020",
        name: "Original Glazed",
        description:
          "The iconic light, airy doughnut hand-dipped in our signature warm glaze.",
        price: 1.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0021",
        name: "Chocolate Iced Glazed",
        description:
          "Original glazed doughnut topped with smooth chocolate icing.",
        price: 1.79,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0022",
        name: "Strawberry Sprinkles",
        description:
          "Fluffy doughnut with strawberry-flavored icing and rainbow sprinkles on top.",
        price: 1.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0023",
        name: "Kreme Filled",
        description:
          "Glazed doughnut filled with our signature Kreme — light, fluffy, and sweet.",
        price: 1.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0024",
        name: "Glazed Dozen",
        description:
          "Twelve freshly made Original Glazed doughnuts — perfect for sharing.",
        price: 14.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0025",
        name: "Assorted Dozen",
        description:
          "A dozen of our most popular doughnuts — mix of glazed, filled, and iced varieties.",
        price: 17.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
    ],
    contact: {
      phone: "+1-212-555-0303",
      email: "orders@krispykreme.com",
      website: "https://krispykreme.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_004",
    name: "Dunkin'",
    slug: "dunkin-donuts",
    description:
      "America runs on Dunkin'. Fresh doughnuts baked daily in dozens of classic and seasonal flavors.",
    category: "Doughnuts",
    cuisine: "American",
    type: ["Dessert"],
    address: {
      street: "14 Penn Plaza",
      city: "New York",
      state: "NY",
      zip: "10122",
      country: "US",
      coordinates: { lat: 40.7497, lng: -73.9936 },
    },
    rating: {
      average: 4.1,
      count: 11230,
      breakdown: { 1: 230, 2: 500, 3: 1600, 4: 3800, 5: 5100 },
    },
    delivery: {
      is_available: true,
      fee: 0.99,
      free_above: 12,
      estimated_time_min: 15,
      estimated_time_max: 25,
      radius_miles: 2,
    },
    hours: {
      monday: { open: "05:00", close: "22:00", is_closed: false },
      tuesday: { open: "05:00", close: "22:00", is_closed: false },
      wednesday: { open: "05:00", close: "22:00", is_closed: false },
      thursday: { open: "05:00", close: "22:00", is_closed: false },
      friday: { open: "05:00", close: "23:00", is_closed: false },
      saturday: { open: "05:00", close: "23:00", is_closed: false },
      sunday: { open: "06:00", close: "21:00", is_closed: false },
    },
    tags: ["quick", "popular", "breakfast", "sweet"],
    images: {
      cover: require("../assets/images/dunkin-donuts.png"),
      thumbnail:
        "https://www.starbucks.com/weblx/images/product-placeholder.png",
    },
    badges: ["Most Ordered"],
    menu: [
      {
        id: "item_0030",
        name: "Glazed Doughnut",
        description:
          "Classic yeast doughnut with a sweet, shiny glaze. Light and melt-in-your-mouth.",
        price: 1.29,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0031",
        name: "Boston Kreme",
        description:
          "Chocolate-frosted doughnut filled with Bavarian Kreme custard.",
        price: 1.59,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0032",
        name: "Jelly Doughnut",
        description:
          "Powdered doughnut stuffed with a generous filling of raspberry jelly.",
        price: 1.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0033",
        name: "Old Fashioned",
        description:
          "Dense, cake-style doughnut with a crispy sugared crust. No frills, all flavor.",
        price: 1.39,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0034",
        name: "Munchkins® (25 ct)",
        description:
          "Bite-sized doughnut holes in assorted flavors: glazed, jelly, chocolate, and powdered.",
        price: 8.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0035",
        name: "Chocolate Frosted",
        description:
          "Yeast doughnut topped with chocolate frosting and rainbow sprinkles.",
        price: 1.59,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
    ],
    contact: {
      phone: "+1-212-555-0404",
      email: "orders@dunkin.com",
      website: "https://dunkindonuts.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_005",
    name: "The Cheesecake Factory",
    slug: "the-cheesecake-factory",
    description:
      "Over 30 legendary cheesecake varieties made fresh daily with premium ingredients.",
    category: "Cake",
    cuisine: "American",
    type: ["Dessert"],
    address: {
      street: "725 5th Ave",
      city: "New York",
      state: "NY",
      zip: "10022",
      country: "US",
      coordinates: { lat: 40.7623, lng: -73.9735 },
    },
    rating: {
      average: 4.7,
      count: 6840,
      breakdown: { 1: 90, 2: 160, 3: 490, 4: 1600, 5: 4500 },
    },
    delivery: {
      is_available: true,
      fee: 2.99,
      free_above: 35,
      estimated_time_min: 30,
      estimated_time_max: 50,
      radius_miles: 5,
    },
    hours: {
      monday: { open: "11:00", close: "22:00", is_closed: false },
      tuesday: { open: "11:00", close: "22:00", is_closed: false },
      wednesday: { open: "11:00", close: "22:00", is_closed: false },
      thursday: { open: "11:00", close: "22:30", is_closed: false },
      friday: { open: "11:00", close: "23:30", is_closed: false },
      saturday: { open: "10:00", close: "23:30", is_closed: false },
      sunday: { open: "10:00", close: "22:00", is_closed: false },
    },
    tags: ["dessert", "popular", "special-occasion"],
    images: {
      cover: require("../assets/images/cheesecake-factory.png"),
      thumbnail:
        "https://www.starbucks.com/weblx/images/product-placeholder.png",
    },
    badges: ["Top Rated", "Editor's Pick"],
    menu: [
      {
        id: "item_0040",
        name: "Original Cheesecake",
        description:
          "The classic. Rich and creamy cheesecake on a buttery graham cracker crust.",
        price: 9.95,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0041",
        name: "Fresh Strawberry Cheesecake",
        description:
          "Creamy cheesecake topped with glazed fresh strawberries on a graham cracker crust.",
        price: 10.95,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0042",
        name: "Oreo Dream Extreme Cheesecake",
        description:
          "Oreo cookie cheesecake topped with layers of Oreo mousse, chocolate icing, and cookies.",
        price: 11.5,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0043",
        name: "Salted Caramel Cheesecake",
        description:
          "Caramel cheesecake with a caramel swirl, finished with a sea salt caramel topping.",
        price: 11.5,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0044",
        name: "Chocolate Hazelnut Crunch Cheesecake",
        description:
          "Hazelnut and chocolate cheesecake layered with a crunchy hazelnut crust and ganache.",
        price: 11.95,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0045",
        name: "Lemon Raspberry Cream Cheesecake",
        description:
          "Lemon cheesecake with raspberry sauce swirled in, topped with whipped cream.",
        price: 10.95,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
    ],
    contact: {
      phone: "+1-212-555-0505",
      email: "orders@thecheesecakefactory.com",
      website: "https://thecheesecakefactory.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_006",
    name: "Olive Garden",
    slug: "olive-garden",
    description:
      "Generous Italian-American pasta dishes made with fresh ingredients and homemade sauces.",
    category: "Pasta",
    cuisine: "Italian",
    type: ["Lunch", "Dinner"],
    address: {
      street: "2 Times Square",
      city: "New York",
      state: "NY",
      zip: "10036",
      country: "US",
      coordinates: { lat: 40.757, lng: -73.9873 },
    },
    rating: {
      average: 4.2,
      count: 4510,
      breakdown: { 1: 100, 2: 200, 3: 610, 4: 1500, 5: 2100 },
    },
    delivery: {
      is_available: true,
      fee: 2.49,
      free_above: 30,
      estimated_time_min: 30,
      estimated_time_max: 50,
      radius_miles: 4.5,
    },
    hours: {
      monday: { open: "11:00", close: "22:00", is_closed: false },
      tuesday: { open: "11:00", close: "22:00", is_closed: false },
      wednesday: { open: "11:00", close: "22:00", is_closed: false },
      thursday: { open: "11:00", close: "22:00", is_closed: false },
      friday: { open: "11:00", close: "23:00", is_closed: false },
      saturday: { open: "11:00", close: "23:00", is_closed: false },
      sunday: { open: "12:00", close: "21:00", is_closed: false },
    },
    tags: ["comfort-food", "family-friendly", "popular"],
    images: {
      cover: require("../assets/images/olive-garden.png"),
      thumbnail:
        "https://www.starbucks.com/weblx/images/product-placeholder.png",
    },
    badges: ["Fan Favorite"],
    menu: [
      {
        id: "item_0050",
        name: "Fettuccine Alfredo",
        description:
          "Fresh fettuccine tossed in a rich parmesan cream sauce. Simple, indulgent, timeless.",
        price: 17.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0051",
        name: "Five Cheese Ziti al Forno",
        description:
          "Ziti tossed with marinara, five Italian cheeses, and topped with a breadcrumb crust.",
        price: 16.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0052",
        name: "Spaghetti & Meatballs",
        description:
          "Spaghetti with homemade beef and pork meatballs in a slow-simmered marinara sauce.",
        price: 18.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0053",
        name: "Chicken Parmigiana",
        description:
          "Lightly breaded chicken breast in marinara sauce over angel hair pasta with parmesan.",
        price: 19.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0054",
        name: "Lasagna Classico",
        description:
          "Layers of pasta, seasoned ground beef, Italian sausage, and three cheeses with marinara.",
        price: 18.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0055",
        name: "Shrimp Scampi",
        description:
          "Shrimp tossed with angel hair pasta in a garlic, lemon, and white wine butter sauce.",
        price: 20.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
    ],
    contact: {
      phone: "+1-212-555-0606",
      email: "orders@olivegarden.com",
      website: "https://olivegarden.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_007",
    name: "Chowking",
    slug: "chowking",
    description:
      "Filipino-Chinese fast food serving comforting noodles, congee, and dim sum favorites.",
    category: "Noodles",
    cuisine: "Chinese",
    type: ["Lunch", "Dinner"],
    address: {
      street: "4251 Main Street",
      city: "Flushing",
      state: "NY",
      zip: "11355",
      country: "US",
      coordinates: { lat: 40.7574, lng: -73.833 },
    },
    rating: {
      average: 4.4,
      count: 2890,
      breakdown: { 1: 60, 2: 100, 3: 310, 4: 820, 5: 1600 },
    },
    delivery: {
      is_available: true,
      fee: 1.99,
      free_above: 20,
      estimated_time_min: 20,
      estimated_time_max: 40,
      radius_miles: 3.5,
    },
    hours: {
      monday: { open: "10:00", close: "22:00", is_closed: false },
      tuesday: { open: "10:00", close: "22:00", is_closed: false },
      wednesday: { open: "10:00", close: "22:00", is_closed: false },
      thursday: { open: "10:00", close: "22:00", is_closed: false },
      friday: { open: "10:00", close: "23:00", is_closed: false },
      saturday: { open: "09:00", close: "23:00", is_closed: false },
      sunday: { open: "09:00", close: "21:30", is_closed: false },
    },
    tags: ["comfort-food", "authentic", "noodles"],
    images: {
      cover: require("../assets/images/chowking.png"),
      thumbnail:
        "https://www.starbucks.com/weblx/images/product-placeholder.png",
    },
    badges: ["Local Favorite"],
    menu: [
      {
        id: "item_0060",
        name: "Beef Wonton Noodle Soup",
        description:
          "Egg noodles in a savory beef broth topped with pork wontons, beef slices, and spring onions.",
        price: 10.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0061",
        name: "Pancit Canton",
        description:
          "Stir-fried thick egg noodles with pork, shrimp, cabbage, carrots, and soy sauce.",
        price: 9.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0062",
        name: "La Paz Batchoy",
        description:
          "Rich pork broth with egg noodles, pork innards, crushed chicharon, and a raw egg.",
        price: 11.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0063",
        name: "Lomi",
        description:
          "Thick egg noodles in a starchy, hearty broth with pork, liver, cabbage, and egg.",
        price: 10.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0064",
        name: "Noodle Soup with Asado",
        description:
          "Egg noodles in chicken broth topped with Chowking's signature soy-braised pork asado.",
        price: 10.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0065",
        name: "Pancit Bihon",
        description:
          "Stir-fried rice noodles with chicken, vegetables, and soy-calamansi seasoning.",
        price: 9.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
    ],
    contact: {
      phone: "+1-718-555-0707",
      email: "orders@chowking.com",
      website: "https://chowking.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_008",
    name: "Five Guys",
    slug: "five-guys",
    description:
      "Fresh, never-frozen beef burgers with all the free toppings you want. Hand-formed every day.",
    category: "Burgers",
    cuisine: "American",
    type: ["Lunch", "Dinner"],
    address: {
      street: "43 W 55th Street",
      city: "New York",
      state: "NY",
      zip: "10019",
      country: "US",
      coordinates: { lat: 40.7609, lng: -73.9784 },
    },
    rating: {
      average: 4.5,
      count: 7320,
      breakdown: { 1: 150, 2: 250, 3: 720, 4: 2100, 5: 4100 },
    },
    delivery: {
      is_available: true,
      fee: 1.99,
      free_above: 25,
      estimated_time_min: 20,
      estimated_time_max: 35,
      radius_miles: 3,
    },
    hours: {
      monday: { open: "11:00", close: "22:00", is_closed: false },
      tuesday: { open: "11:00", close: "22:00", is_closed: false },
      wednesday: { open: "11:00", close: "22:00", is_closed: false },
      thursday: { open: "11:00", close: "22:00", is_closed: false },
      friday: { open: "11:00", close: "23:00", is_closed: false },
      saturday: { open: "11:00", close: "23:00", is_closed: false },
      sunday: { open: "11:00", close: "21:00", is_closed: false },
    },
    tags: ["popular", "fresh", "burgers"],
    images: {
      cover: require("../assets/images/five-guys.png"),
      thumbnail:
        "https://www.starbucks.com/weblx/images/product-placeholder.png",
    },
    badges: ["Fan Favorite", "Top Rated"],
    menu: [
      {
        id: "item_0070",
        name: "Hamburger",
        description:
          "Two fresh beef patties on a toasted sesame bun with your choice of free toppings.",
        price: 11.29,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0071",
        name: "Cheeseburger",
        description:
          "Two patties, two slices of melted American cheese, toasted bun, free toppings.",
        price: 12.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0072",
        name: "Bacon Cheeseburger",
        description:
          "Two patties with crispy bacon and American cheese on a toasted bun.",
        price: 13.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0073",
        name: "Little Hamburger",
        description:
          "One fresh beef patty on a toasted sesame bun — same great taste, smaller portion.",
        price: 8.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0074",
        name: "Little Cheeseburger",
        description:
          "One patty with a slice of American cheese on a toasted bun. Simple and satisfying.",
        price: 9.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0075",
        name: "Veggie Sandwich",
        description:
          "Grilled bun loaded with fresh sautéed vegetables and all the free toppings you want.",
        price: 9.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
    ],
    contact: {
      phone: "+1-212-555-0808",
      email: "orders@fiveguys.com",
      website: "https://fiveguys.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_009",
    name: "Domino's Pizza",
    slug: "dominos-pizza",
    description:
      "Hot pizza delivered fast. Hand-tossed, thin crust, and pan pizzas with endless topping combinations.",
    category: "Pizza",
    cuisine: "American",
    type: ["Lunch", "Dinner"],
    address: {
      street: "118 Fulton Street",
      city: "New York",
      state: "NY",
      zip: "10038",
      country: "US",
      coordinates: { lat: 40.7084, lng: -74.0071 },
    },
    rating: {
      average: 4.2,
      count: 15400,
      breakdown: { 1: 300, 2: 700, 3: 2100, 4: 5100, 5: 7200 },
    },
    delivery: {
      is_available: true,
      fee: 0,
      free_above: 0,
      estimated_time_min: 20,
      estimated_time_max: 35,
      radius_miles: 5,
    },
    hours: {
      monday: { open: "10:30", close: "00:00", is_closed: false },
      tuesday: { open: "10:30", close: "00:00", is_closed: false },
      wednesday: { open: "10:30", close: "00:00", is_closed: false },
      thursday: { open: "10:30", close: "00:00", is_closed: false },
      friday: { open: "10:30", close: "01:00", is_closed: false },
      saturday: { open: "10:30", close: "01:00", is_closed: false },
      sunday: { open: "10:30", close: "00:00", is_closed: false },
    },
    tags: ["free-delivery", "late-night", "popular", "fast"],
    images: {
      cover: require("../assets/images/dominos.png"),
      thumbnail:
        "https://www.starbucks.com/weblx/images/product-placeholder.png",
    },
    badges: ["Free Delivery", "Most Ordered"],
    menu: [
      {
        id: "item_0080",
        name: "ExtravaganZZa",
        description:
          "Pepperoni, ham, beef, hot sausage, onions, green peppers, mushrooms, and black olives.",
        price: 17.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0081",
        name: "MeatZZa",
        description:
          "American cheese topped with ham, pepperoni, and Italian sausage, all under a layer of provolone.",
        price: 16.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0082",
        name: "Pacific Veggie",
        description:
          "Roasted red peppers, baby spinach, onions, mushrooms, tomatoes, and black olives.",
        price: 16.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0083",
        name: "Pepperoni Passion",
        description:
          "Three layers of pepperoni — under the cheese, on top, and extra on top of that.",
        price: 15.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0084",
        name: "Buffalo Chicken",
        description:
          "Grilled chicken, buffalo sauce, onions, and banana peppers with a ranch drizzle.",
        price: 16.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0085",
        name: "Cheese Pizza",
        description:
          "Classic hand-tossed dough with robust tomato sauce and a generous layer of mozzarella.",
        price: 12.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
    ],
    contact: {
      phone: "+1-212-555-0909",
      email: "orders@dominos.com",
      website: "https://dominos.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_010",
    name: "Chick-fil-A",
    slug: "chick-fil-a",
    description:
      "Pressure-cooked chicken sandwiches with a secret seasoning blend. Closed Sundays.",
    category: "Burgers",
    cuisine: "American",
    type: ["Lunch", "Dinner"],
    address: {
      street: "1000 Ave of the Americas",
      city: "New York",
      state: "NY",
      zip: "10018",
      country: "US",
      coordinates: { lat: 40.7536, lng: -73.9878 },
    },
    rating: {
      average: 4.6,
      count: 9870,
      breakdown: { 1: 150, 2: 270, 3: 750, 4: 2500, 5: 6200 },
    },
    delivery: {
      is_available: true,
      fee: 1.49,
      free_above: 20,
      estimated_time_min: 20,
      estimated_time_max: 35,
      radius_miles: 3,
    },
    hours: {
      monday: { open: "06:30", close: "22:00", is_closed: false },
      tuesday: { open: "06:30", close: "22:00", is_closed: false },
      wednesday: { open: "06:30", close: "22:00", is_closed: false },
      thursday: { open: "06:30", close: "22:00", is_closed: false },
      friday: { open: "06:30", close: "23:00", is_closed: false },
      saturday: { open: "06:30", close: "23:00", is_closed: false },
      sunday: { open: null, close: null, is_closed: true },
    },
    tags: ["popular", "fast", "chicken"],
    images: {
      cover: require("../assets/images/chick-fil-a.png"),
      thumbnail:
        "https://www.starbucks.com/weblx/images/product-placeholder.png",
    },
    badges: ["Top Rated", "Most Ordered"],
    menu: [
      {
        id: "item_0090",
        name: "Chick-fil-A Chicken Sandwich",
        description:
          "Pressure-cooked chicken breast fillet on a toasted buttered bun with two dill pickle chips.",
        price: 5.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0091",
        name: "Spicy Deluxe Sandwich",
        description:
          "Spicy chicken fillet with pepper jack cheese, lettuce, tomato, and pickles on a brioche bun.",
        price: 6.99,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0092",
        name: "Grilled Chicken Sandwich",
        description:
          "Marinated, grilled chicken breast with lettuce and tomato on a multigrain bun.",
        price: 6.49,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0093",
        name: "Deluxe Chicken Sandwich",
        description:
          "Original chicken fillet with colby-jack cheese, lettuce, tomato, and pickles.",
        price: 6.79,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0094",
        name: "Spicy Chicken Sandwich",
        description:
          "Spicy seasoned chicken breast fillet on a toasted bun with two dill pickle chips.",
        price: 6.19,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
      {
        id: "item_0095",
        name: "Grilled Chicken Club Sandwich",
        description:
          "Grilled chicken with colby-jack cheese, bacon, lettuce, and tomato on a multigrain bun.",
        price: 8.19,
        image: "https://www.starbucks.com/weblx/images/product-placeholder.png",
      },
    ],
    contact: {
      phone: "+1-212-555-1010",
      email: "orders@chick-fil-a.com",
      website: "https://chick-fil-a.com",
    },
    is_open_now: true,
  },
];

export default restaurants;
