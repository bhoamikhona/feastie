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
          "The hero here is our passata. It's been lovingly made using 100% Italian tomatoes by the Greci family in Parma since 1987. Truly the taste of PizzaExpress",
        price: 14.99,
        image: require("../assets/images/menus/pizza-express/margherita.jpg"),
      },
      {
        id: "item_0002",
        name: "American Hot",
        description:
          "Pepperoni, light mozzarella and tomato, with your choice of hot green pepper or jalapeño peppers",
        price: 16.99,
        image: require("../assets/images/menus/pizza-express/american-hot.jpg"),
      },
      {
        id: "item_0003",
        name: "La Reine",
        description:
          "The Queen. Ham, black olives, mushrooms, mozzarella and tomato",
        price: 16.49,
        image: require("../assets/images/menus/pizza-express/la-reine.jpg"),
      },
      {
        id: "item_0004",
        name: "Padana",
        description:
          "Goat's cheese, caramelised onions, spinach, mozzarella, tomato, garlic oil and red onions. A feast of tastes and textures.",
        price: 17.49,
        image: require("../assets/images/menus/pizza-express/padana.jpg"),
      },
      {
        id: "item_0005",
        name: "Pollo ad Astra",
        description:
          "Cajun spiced chicken, red onions, mozzarella, tomato, garlic oil and sweet red peppers really deliver on Southern Swing",
        price: 17.99,
        image: require("../assets/images/menus/pizza-express/pollo-ad-astra.jpg"),
      },
      {
        id: "item_0006",
        name: "Queen Margherita",
        description:
          "All hail the queen. A whole creamy burrata sitting atop a tomato with garlic and mozzarella base. With basil & pine kernel pesto and Gran Milano cheese",
        price: 15.49,
        image: require("../assets/images/menus/pizza-express/queen-margherita.jpg"),
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
        image: require("../assets/images/menus/starbucks/caramel-macchiato.jpg"),
      },
      {
        id: "item_0011",
        name: "Caffè Latte",
        description:
          "Rich full-bodied espresso with steamed milk and a light layer of foam.",
        price: 4.95,
        image: require("../assets/images/menus/starbucks/caffe-latte.jpg"),
      },
      {
        id: "item_0012",
        name: "Cold Brew Coffee",
        description:
          "Slow-steeped for 20 hours for a smooth, sweet taste served over ice.",
        price: 4.45,
        image: require("../assets/images/menus/starbucks/cold-brew.jpg"),
      },
      {
        id: "item_0013",
        name: "Mocha Cookie Crumble Frappuccino",
        description:
          "Frappuccino roast coffee, mocha sauce, and vanilla syrup blended with milk and ice, topped with whipped cream and chocolate cookie crumbles.",
        price: 6.25,
        image: require("../assets/images/menus/starbucks/mocha-cookie-crumble-frappuccino.jpg"),
      },
      {
        id: "item_0014",
        name: "Iced Hazelnut Oatmilk Shaken Espresso",
        description:
          "Blonde espresso, hazelnut syrup, and oatmilk shaken together over ice for a smooth, nutty, dairy-free pick-me-up.",
        price: 5.75,
        image: require("../assets/images/menus/starbucks/iced-hazelnut-oatmilk-shaken-espresso.jpg"),
      },
      {
        id: "item_0015",
        name: "Flat White",
        description:
          "Ristretto shots of espresso combined with a thin layer of velvety steamed whole milk.",
        price: 5.25,
        image: require("../assets/images/menus/starbucks/flat-white.jpg"),
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
        image: require("../assets/images/menus/krispy-kreme/original-glazed.png"),
      },
      {
        id: "item_0021",
        name: "Chocolate Iced Glazed",
        description:
          "Original glazed doughnut topped with smooth chocolate icing.",
        price: 1.79,
        image: require("../assets/images/menus/krispy-kreme/chocolate-iced-glazed.png"),
      },
      {
        id: "item_0022",
        name: "Strawberry Sprinkles",
        description:
          "Fluffy doughnut with strawberry-flavored icing and rainbow sprinkles on top.",
        price: 1.99,
        image: require("../assets/images/menus/krispy-kreme/strawberry-sprinkles.png"),
      },
      {
        id: "item_0023",
        name: "Kreme Filled",
        description:
          "Glazed doughnut filled with our signature Kreme — light, fluffy, and sweet.",
        price: 1.99,
        image: require("../assets/images/menus/krispy-kreme/kreme-filled.png"),
      },
      {
        id: "item_0024",
        name: "OREO® Cookies & Kreme™ Filled Doughnut",
        description:
          "Chocolate iced doughnut filled with OREO® Kreme, topped with white icing and OREO® cookie pieces.",
        price: 2.49,
        image: require("../assets/images/menus/krispy-kreme/oreo-cookies-and-kreme-filled.png"),
      },
      {
        id: "item_0025",
        name: "New York Cheesecake Filled Doughnut",
        description:
          "Smooth cheesecake Kreme filled doughnut with strawberry icing and graham cracker crumble on top.",
        price: 2.49,
        image: require("../assets/images/menus/krispy-kreme/new-york-cheesecake-filled.png"),
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
    name: "The Cheesecake Factory",
    slug: "the-cheesecake-factory",
    description:
      "Over 30 legendary cheesecake varieties made fresh daily with premium ingredients.",
    category: "Cake",
    cuisine: "Italian",
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
        id: "item_0030",
        name: "Original Cheesecake",
        description:
          "The classic. Rich and creamy cheesecake on a buttery graham cracker crust.",
        price: 9.95,
        image: require("../assets/images/menus/cheesecake-factory/original.jpg"),
      },
      {
        id: "item_0031",
        name: "Fresh Strawberry Cheesecake",
        description:
          "Creamy cheesecake topped with glazed fresh strawberries on a graham cracker crust.",
        price: 10.95,
        image: require("../assets/images/menus/cheesecake-factory/fresh-strawberry.jpg"),
      },
      {
        id: "item_0032",
        name: "Oreo Dream Extreme Cheesecake",
        description:
          "Oreo cookie cheesecake topped with layers of Oreo mousse, chocolate icing, and cookies.",
        price: 11.5,
        image: require("../assets/images/menus/cheesecake-factory/oreo-dream-extreme.jpg"),
      },
      {
        id: "item_0033",
        name: "Salted Caramel Cheesecake",
        description:
          "Caramel cheesecake with a caramel swirl, finished with a sea salt caramel topping.",
        price: 11.5,
        image: require("../assets/images/menus/cheesecake-factory/salted-caramel.jpg"),
      },
      {
        id: "item_0034",
        name: "Ultimate Red Velvet Cheesecake",
        description:
          "Creamy cheesecake layered between moist red velvet cake, topped with cream cheese frosting.",
        price: 11.95,
        image: require("../assets/images/menus/cheesecake-factory/ultimate-red-velvet.jpg"),
      },
      {
        id: "item_0035",
        name: "Lemon Raspberry Cream Cheesecake",
        description:
          "Lemon cheesecake with raspberry sauce swirled in, topped with whipped cream.",
        price: 10.95,
        image: require("../assets/images/menus/cheesecake-factory/lemon-raspberry-cream.jpg"),
      },
    ],
    contact: {
      phone: "+1-212-555-0404",
      email: "orders@thecheesecakefactory.com",
      website: "https://thecheesecakefactory.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_005",
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
        id: "item_0040",
        name: "Fettuccine Alfredo",
        description:
          "Fresh fettuccine tossed in a rich parmesan cream sauce. Simple, indulgent, timeless.",
        price: 17.99,
        image: require("../assets/images/menus/olive-garden/fettuccine-alfredo.jpg"),
      },
      {
        id: "item_0041",
        name: "Five Cheese Ziti al Forno",
        description:
          "Ziti tossed with marinara, five Italian cheeses, and topped with a breadcrumb crust.",
        price: 16.99,
        image: require("../assets/images/menus/olive-garden/five-cheese-ziti-al-forno.jpg"),
      },
      {
        id: "item_0042",
        name: "Spaghetti & Meatballs",
        description:
          "Spaghetti with homemade beef and pork meatballs in a slow-simmered marinara sauce.",
        price: 18.49,
        image: require("../assets/images/menus/olive-garden/spaghetti-and-meatballs.jpg"),
      },
      {
        id: "item_0043",
        name: "Chicken Parmigiana",
        description:
          "Lightly breaded chicken breast in marinara sauce over angel hair pasta with parmesan.",
        price: 19.99,
        image: require("../assets/images/menus/olive-garden/chicken-parmigiana.jpg"),
      },
      {
        id: "item_0044",
        name: "Lasagna Classico",
        description:
          "Layers of pasta, seasoned ground beef, Italian sausage, and three cheeses with marinara.",
        price: 18.99,
        image: require("../assets/images/menus/olive-garden/lasagna-classico.jpeg"),
      },
      {
        id: "item_0045",
        name: "Shrimp Scampi",
        description:
          "Shrimp tossed with angel hair pasta in a garlic, lemon, and white wine butter sauce.",
        price: 20.99,
        image: require("../assets/images/menus/olive-garden/shrimp-scampi.jpg"),
      },
    ],
    contact: {
      phone: "+1-212-555-0505",
      email: "orders@olivegarden.com",
      website: "https://olivegarden.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_006",
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
        id: "item_0050",
        name: "Beef Wonton",
        description:
          "Beef soup with al dente noodles, tender beef chunks, and wonton balls, garnished with fresh cabbage, fresh green onion, and fried onion.",
        price: 10.99,
        image: require("../assets/images/menus/chowking/beef-wonton.jpg"),
      },
      {
        id: "item_0051",
        name: "Wonton Noodle Soup",
        description:
          "Rich and flavorful soup with al dente noodles and 4pcs of wonton balls, garnished with fresh cabbage, fresh green onion, and fried onion.",
        price: 9.99,
        image: require("../assets/images/menus/chowking/wonton-noodle-soup.jpg"),
      },
      {
        id: "item_0052",
        name: "Chicken Mami",
        description:
          "Chicken with al dente noodles, tender chicken strips garnished with fresh cabbage, fried garlic, fried onion, egg slices, and fresh green onion.",
        price: 11.49,
        image: require("../assets/images/menus/chowking/chicken-mami.jpg"),
      },
      {
        id: "item_0053",
        name: "Pancit Canton (Chow Mein)",
        description:
          "Stir fried noodles with a sweet-salty soy-based sauce, topped with succulent fish balls slices, chicken slices, crisp carrots, cabbage and garnished with fried onions.",
        price: 10.49,
        image: require("../assets/images/menus/chowking/pancit-canton.jpg"),
      },
    ],
    contact: {
      phone: "+1-718-555-0606",
      email: "orders@chowking.com",
      website: "https://chowking.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_007",
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
        id: "item_0060",
        name: "Hamburger",
        description:
          "Two fresh beef patties on a toasted sesame bun with your choice of free toppings.",
        price: 11.29,
        image: require("../assets/images/menus/five-guys/hamburger.jpg"),
      },
      {
        id: "item_0061",
        name: "Cheeseburger",
        description:
          "Two patties, two slices of melted American cheese, toasted bun, free toppings.",
        price: 12.49,
        image: require("../assets/images/menus/five-guys/cheeseburger.jpg"),
      },
      {
        id: "item_0062",
        name: "Bacon Cheeseburger",
        description:
          "Two patties with crispy bacon and American cheese on a toasted bun.",
        price: 13.99,
        image: require("../assets/images/menus/five-guys/bacon-cheeseburger.jpg"),
      },
      {
        id: "item_0063",
        name: "Little Hamburger",
        description:
          "One fresh beef patty on a toasted sesame bun — same great taste, smaller portion.",
        price: 8.49,
        image: require("../assets/images/menus/five-guys/little-hamburger.jpg"),
      },
      {
        id: "item_0064",
        name: "Little Cheeseburger",
        description:
          "One patty with a slice of American cheese on a toasted bun. Simple and satisfying.",
        price: 9.49,
        image: require("../assets/images/menus/five-guys/little-cheeseburger.jpg"),
      },
      {
        id: "item_0065",
        name: "Veggie Sandwich",
        description:
          "Grilled bun loaded with fresh sautéed vegetables and all the free toppings you want.",
        price: 9.99,
        image: require("../assets/images/menus/five-guys/veggie-sandwich.jpg"),
      },
    ],
    contact: {
      phone: "+1-212-555-0707",
      email: "orders@fiveguys.com",
      website: "https://fiveguys.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_008",
    name: "Domino's",
    slug: "dominos",
    description:
      "Hot pizza delivered fast. Hand-tossed, thin crust, and pan pizzas with endless topping combinations.",
    category: "Pizza",
    cuisine: "Italian",
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
        id: "item_0070",
        name: "ExtravaganZZa",
        description:
          "Pepperoni, ham, Italian sausage, beef, fresh onions, fresh green peppers, fresh mushrooms and black olives, all sandwiched between two layers of provolone and cheese made with 100% real mozzarella.",
        price: 17.99,
        image: require("../assets/images/menus/dominos/extravaganzza.png"),
      },
      {
        id: "item_0071",
        name: "MeatZZa",
        description:
          "Pepperoni, ham, Italian sausage and beef, all sandwiched between two layers of provolone and cheese made with 100% real mozzarella.",
        price: 16.99,
        image: require("../assets/images/menus/dominos/meatzza.png"),
      },
      {
        id: "item_0072",
        name: "Pacific Veggie",
        description:
          "Fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives, feta, provolone, cheese made with 100% real mozzarella and sprinkled with a garlic herb seasoning.",
        price: 16.49,
        image: require("../assets/images/menus/dominos/pacific-veggie.png"),
      },
      {
        id: "item_0073",
        name: "Pepperoni Passion",
        description:
          "Two layers of pepperoni sandwiched between provolone, Parmesan-Asiago and cheese made with 100% real mozzarella then sprinkled with oregano.",
        price: 15.99,
        image: require("../assets/images/menus/dominos/pepperoni-passion.png"),
      },
      {
        id: "item_0074",
        name: "Spinach & Feta",
        description:
          "Creamy Alfredo sauce, fresh spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella.",
        price: 16.99,
        image: require("../assets/images/menus/dominos/spinach-and-feta.png"),
      },
      {
        id: "item_0075",
        name: "Cheese Pizza",
        description:
          "Feta, provolone, cheddar, Parmesan-Asiago, cheese made with 100% real mozzarella and sprinkled with oregano.",
        price: 12.99,
        image: require("../assets/images/menus/dominos/cheese.png"),
      },
    ],
    contact: {
      phone: "+1-212-555-0808",
      email: "orders@dominos.com",
      website: "https://dominos.com",
    },
    is_open_now: true,
  },
  {
    id: "rest_009",
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
        id: "item_0080",
        name: "Chick-fil-A Chicken Sandwich",
        description:
          "Pressure-cooked chicken breast fillet on a toasted buttered bun with two dill pickle chips.",
        price: 5.99,
        image: require("../assets/images/menus/chick-fil-a/chick-fil-a-chicken.png"),
      },
      {
        id: "item_0081",
        name: "Spicy Deluxe Sandwich",
        description:
          "Spicy chicken fillet with pepper jack cheese, lettuce, tomato, and pickles on a brioche bun.",
        price: 6.99,
        image: require("../assets/images/menus/chick-fil-a/spicy-delux.png"),
      },
      {
        id: "item_0082",
        name: "Grilled Chicken Sandwich",
        description:
          "Marinated, grilled chicken breast with lettuce and tomato on a multigrain bun.",
        price: 6.49,
        image: require("../assets/images/menus/chick-fil-a/grilled-chicken.png"),
      },
      {
        id: "item_0083",
        name: "Deluxe Chicken Sandwich",
        description:
          "Original chicken fillet with colby-jack cheese, lettuce, tomato, and pickles.",
        price: 6.79,
        image: require("../assets/images/menus/chick-fil-a/chick-fil-a-delux.png"),
      },
      {
        id: "item_0084",
        name: "Spicy Chicken Sandwich",
        description:
          "Spicy seasoned chicken breast fillet on a toasted bun with two dill pickle chips.",
        price: 6.19,
        image: require("../assets/images/menus/chick-fil-a/spicy-chicken.png"),
      },
      {
        id: "item_0085",
        name: "Grilled Chicken Club Sandwich",
        description:
          "Grilled chicken with colby-jack cheese, bacon, lettuce, and tomato on a multigrain bun.",
        price: 8.19,
        image: require("../assets/images/menus/chick-fil-a/grilled-chicken-club.png"),
      },
    ],
    contact: {
      phone: "+1-212-555-0909",
      email: "orders@chick-fil-a.com",
      website: "https://chick-fil-a.com",
    },
    is_open_now: true,
  },
];

export default restaurants;
