const generateOrdersData = (users) => {
  const bhoami = users.find((u) => u.email === "bhoami@email.com");
  const aniruddha = users.find((u) => u.email === "aniruddha@email.com");
  const tafadzwa = users.find((u) => u.email === "tafadzwa@email.com");

  return [
    {
      user: bhoami._id,
      items: [
        {
          itemId: "item_0001",
          name: "Margherita",
          restaurant: "Pizza Express",
          restaurantId: "rest_001",
          price: 14.99,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/pizza-express/margherita.jpg",
        },
        {
          itemId: "item_0003",
          name: "La Reine",
          restaurant: "Pizza Express",
          restaurantId: "rest_001",
          price: 16.49,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/pizza-express/la-reine.jpg",
        },
      ],
      subtotal: 31.48,
      deliveryFee: 1.99,
      tax: 2.79,
      total: 36.26,
      status: "delivered",
      deliveryAddress: bhoami.address,
      createdAt: new Date("2026-04-10T18:30:00Z"),
    },
    {
      user: bhoami._id,
      items: [
        {
          itemId: "item_0010",
          name: "Caramel Macchiato",
          restaurant: "Starbucks",
          restaurantId: "rest_002",
          price: 5.95,
          quantity: 2,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/starbucks/caramel-macchiato.jpg",
        },
        {
          itemId: "item_0015",
          name: "Flat White",
          restaurant: "Starbucks",
          restaurantId: "rest_002",
          price: 5.25,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/starbucks/flat-white.jpg",
        },
      ],
      subtotal: 17.15,
      deliveryFee: 0.99,
      tax: 1.52,
      total: 19.66,
      status: "delivered",
      deliveryAddress: bhoami.address,
      createdAt: new Date("2026-04-22T09:15:00Z"),
    },
    {
      user: bhoami._id,
      items: [
        {
          itemId: "item_0062",
          name: "Bacon Cheeseburger",
          restaurant: "Five Guys",
          restaurantId: "rest_007",
          price: 13.99,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/five-guys/bacon-cheeseburger.jpg",
        },
        {
          itemId: "item_0060",
          name: "Hamburger",
          restaurant: "Five Guys",
          restaurantId: "rest_007",
          price: 11.29,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/five-guys/hamburger.jpg",
        },
      ],
      subtotal: 25.28,
      deliveryFee: 1.99,
      tax: 2.24,
      total: 29.51,
      status: "delivered",
      deliveryAddress: bhoami.address,
      createdAt: new Date("2026-05-01T20:00:00Z"),
    },

    {
      user: aniruddha._id,
      items: [
        {
          itemId: "item_0042",
          name: "Spaghetti & Meatballs",
          restaurant: "Olive Garden",
          restaurantId: "rest_005",
          price: 18.49,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/olive-garden/spaghetti-and-meatballs.jpg",
        },
        {
          itemId: "item_0040",
          name: "Fettuccine Alfredo",
          restaurant: "Olive Garden",
          restaurantId: "rest_005",
          price: 17.99,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/olive-garden/fettuccine-alfredo.jpg",
        },
      ],
      subtotal: 36.48,
      deliveryFee: 2.49,
      tax: 3.24,
      total: 42.21,
      status: "delivered",
      deliveryAddress: aniruddha.address,
      createdAt: new Date("2026-04-15T19:00:00Z"),
    },
    {
      user: aniruddha._id,
      items: [
        {
          itemId: "item_0070",
          name: "ExtravaganZZa",
          restaurant: "Domino's",
          restaurantId: "rest_008",
          price: 17.99,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/dominos/extravaganzza.png",
        },
        {
          itemId: "item_0075",
          name: "Cheese Pizza",
          restaurant: "Domino's",
          restaurantId: "rest_008",
          price: 12.99,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/dominos/cheese.png",
        },
      ],
      subtotal: 30.98,
      deliveryFee: 0,
      tax: 2.75,
      total: 33.73,
      status: "delivered",
      deliveryAddress: aniruddha.address,
      createdAt: new Date("2026-04-28T21:30:00Z"),
    },

    {
      user: tafadzwa._id,
      items: [
        {
          itemId: "item_0080",
          name: "Chick-fil-A Chicken Sandwich",
          restaurant: "Chick-fil-A",
          restaurantId: "rest_009",
          price: 5.99,
          quantity: 2,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/chick-fil-a/chick-fil-a-chicken.png",
        },
        {
          itemId: "item_0081",
          name: "Spicy Deluxe Sandwich",
          restaurant: "Chick-fil-A",
          restaurantId: "rest_009",
          price: 6.99,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/chick-fil-a/spicy-delux.png",
        },
      ],
      subtotal: 18.97,
      deliveryFee: 1.49,
      tax: 1.68,
      total: 22.14,
      status: "delivered",
      deliveryAddress: tafadzwa.address,
      createdAt: new Date("2026-04-18T12:45:00Z"),
    },
    {
      user: tafadzwa._id,
      items: [
        {
          itemId: "item_0030",
          name: "Original Cheesecake",
          restaurant: "The Cheesecake Factory",
          restaurantId: "rest_004",
          price: 9.95,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/cheesecake-factory/original.jpg",
        },
        {
          itemId: "item_0034",
          name: "Ultimate Red Velvet Cheesecake",
          restaurant: "The Cheesecake Factory",
          restaurantId: "rest_004",
          price: 11.95,
          quantity: 1,
          image:
            "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images/menus/cheesecake-factory/ultimate-red-velvet.jpg",
        },
      ],
      subtotal: 21.9,
      deliveryFee: 2.99,
      tax: 1.94,
      total: 26.83,
      status: "delivered",
      deliveryAddress: tafadzwa.address,
      createdAt: new Date("2026-05-03T16:00:00Z"),
    },
  ];
};

export default generateOrdersData;
