export const capitalize = function (word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const BASE_URL =
  "https://raw.githubusercontent.com/bhoamikhona/feastie/main/frontend/assets/images";

// Maps local require() item images to GitHub raw URLs by item ID
const ITEM_IMAGE_URLS = {
  item_0001: `${BASE_URL}/menus/pizza-express/margherita.jpg`,
  item_0002: `${BASE_URL}/menus/pizza-express/american-hot.jpg`,
  item_0003: `${BASE_URL}/menus/pizza-express/la-reine.jpg`,
  item_0004: `${BASE_URL}/menus/pizza-express/padana.jpg`,
  item_0005: `${BASE_URL}/menus/pizza-express/pollo-ad-astra.jpg`,
  item_0006: `${BASE_URL}/menus/pizza-express/queen-margherita.jpg`,
  item_0010: `${BASE_URL}/menus/starbucks/caramel-macchiato.jpg`,
  item_0011: `${BASE_URL}/menus/starbucks/caffe-latte.jpg`,
  item_0012: `${BASE_URL}/menus/starbucks/cold-brew.jpg`,
  item_0013: `${BASE_URL}/menus/starbucks/mocha-cookie-crumble-frappuccino.jpg`,
  item_0014: `${BASE_URL}/menus/starbucks/iced-hazelnut-oatmilk-shaken-espresso.jpg`,
  item_0015: `${BASE_URL}/menus/starbucks/flat-white.jpg`,
  item_0020: `${BASE_URL}/menus/krispy-kreme/original-glazed.png`,
  item_0021: `${BASE_URL}/menus/krispy-kreme/chocolate-iced-glazed.png`,
  item_0022: `${BASE_URL}/menus/krispy-kreme/strawberry-sprinkles.png`,
  item_0023: `${BASE_URL}/menus/krispy-kreme/kreme-filled.png`,
  item_0024: `${BASE_URL}/menus/krispy-kreme/oreo-cookies-and-kreme-filled.png`,
  item_0025: `${BASE_URL}/menus/krispy-kreme/new-york-cheesecake-filled.png`,
  item_0030: `${BASE_URL}/menus/cheesecake-factory/original.jpg`,
  item_0031: `${BASE_URL}/menus/cheesecake-factory/fresh-strawberry.jpg`,
  item_0032: `${BASE_URL}/menus/cheesecake-factory/oreo-dream-extreme.jpg`,
  item_0033: `${BASE_URL}/menus/cheesecake-factory/salted-caramel.jpg`,
  item_0034: `${BASE_URL}/menus/cheesecake-factory/ultimate-red-velvet.jpg`,
  item_0035: `${BASE_URL}/menus/cheesecake-factory/lemon-raspberry-cream.jpg`,
  item_0040: `${BASE_URL}/menus/olive-garden/fettuccine-alfredo.jpg`,
  item_0041: `${BASE_URL}/menus/olive-garden/five-cheese-ziti-al-forno.jpg`,
  item_0042: `${BASE_URL}/menus/olive-garden/spaghetti-and-meatballs.jpg`,
  item_0043: `${BASE_URL}/menus/olive-garden/chicken-parmigiana.jpg`,
  item_0044: `${BASE_URL}/menus/olive-garden/lasagna-classico.jpeg`,
  item_0045: `${BASE_URL}/menus/olive-garden/shrimp-scampi.jpg`,
  item_0050: `${BASE_URL}/menus/chowking/beef-wonton.jpg`,
  item_0051: `${BASE_URL}/menus/chowking/wonton-noodle-soup.jpg`,
  item_0052: `${BASE_URL}/menus/chowking/chicken-mami.jpg`,
  item_0053: `${BASE_URL}/menus/chowking/pancit-canton.jpg`,
  item_0060: `${BASE_URL}/menus/five-guys/hamburger.jpg`,
  item_0061: `${BASE_URL}/menus/five-guys/cheeseburger.jpg`,
  item_0062: `${BASE_URL}/menus/five-guys/bacon-cheeseburger.jpg`,
  item_0063: `${BASE_URL}/menus/five-guys/little-hamburger.jpg`,
  item_0064: `${BASE_URL}/menus/five-guys/little-cheeseburger.jpg`,
  item_0065: `${BASE_URL}/menus/five-guys/veggie-sandwich.jpg`,
  item_0070: `${BASE_URL}/menus/dominos/extravaganzza.png`,
  item_0071: `${BASE_URL}/menus/dominos/meatzza.png`,
  item_0072: `${BASE_URL}/menus/dominos/pacific-veggie.png`,
  item_0073: `${BASE_URL}/menus/dominos/pepperoni-passion.png`,
  item_0074: `${BASE_URL}/menus/dominos/spinach-and-feta.png`,
  item_0075: `${BASE_URL}/menus/dominos/cheese.png`,
  item_0080: `${BASE_URL}/menus/chick-fil-a/chick-fil-a-chicken.png`,
  item_0081: `${BASE_URL}/menus/chick-fil-a/spicy-delux.png`,
  item_0082: `${BASE_URL}/menus/chick-fil-a/grilled-chicken.png`,
  item_0083: `${BASE_URL}/menus/chick-fil-a/chick-fil-a-delux.png`,
  item_0084: `${BASE_URL}/menus/chick-fil-a/spicy-chicken.png`,
  item_0085: `${BASE_URL}/menus/chick-fil-a/grilled-chicken-club.png`,
};

export const getItemImageUrl = (itemId) => ITEM_IMAGE_URLS[itemId] || "";
