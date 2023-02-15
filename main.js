// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];


// Opdracht 1a:
const tvType = inventory.map((inventoryTv) => {
  return inventoryTv.type;
});
console.log(tvType);


// Opdracht 1b:
const tvSoldout = inventory.filter((inventorySoldout) => {
  return inventorySoldout.originalStock === inventorySoldout.sold;
})
console.log(tvSoldout);


// Opdracht 1c:
// declareer een variabele waarin we de ambilight opslaan
// loop over de array heen van tv's
// check voor iedere vgl of die ambilight heeft

const tvAmbilight = inventory.filter((inventoryAmbilight) => {
  return inventoryAmbilight.options.ambiLight ;
});
console.log(tvAmbilight);


// Opdracht 1d:
inventory.sort((a, b) =>
    a.price - b.price);
console.log(inventory);


//Opdracht 2a:
const tvSold = inventory.map((inventorySold) => {
  return inventorySold.sold;
});
console.log(tvSold);

let counterTvSold = 0;
for (let i = 0; i < tvSold.length; i++) {
  counterTvSold += tvSold[i];
};
console.log(counterTvSold);


//Opdracht 2b:
const totalTvSold = document.getElementById('total-tv-sold');

console.log(totalTvSold);

totalTvSold.textContent = counterTvSold;


//Opdracht 2c:
const tvPurchased = inventory.map((inventoryPurchased) => {
  return inventoryPurchased.originalStock;
});
console.log(tvPurchased);

let counterTvPurchased = 0;
for (let i = 0; i < tvPurchased.length; i++) {
  counterTvPurchased += tvPurchased[i];
};
console.log(counterTvPurchased);


//opdracht 2d:
const totalTvPurchased = document.getElementById('total-tv-purchased');
console.log(totalTvPurchased);

totalTvPurchased.textContent = counterTvPurchased;


//Opdracht 2e:
const totalTvLeft = document.getElementById('total-tv-left');
console.log(totalTvLeft);

const tvLeft = counterTvPurchased - counterTvSold;
console.log(tvLeft);

totalTvLeft.textContent = tvLeft;
// Hier vind hij echter dat type number not assignable is to type string?
// terwijl dat eerder wel kon?


//Opdracht 3a:
const tvList = document.getElementById('tv-list');
const listItem = inventory.map((tvItem) => {
  return `<li>${tvItem.brand}</li>`;
});
tvList.innerHTML = `${listItem.join("")}`;


//Opdracht 3b:
function getTvList(tvObject) {
  const tvList = document.getElementById('tv-list');
  const listItem = tvObject.map((tvItem) => {
    return `<li>${tvItem.brand}</li>`;
  });
  return tvList.innerHTML = `${listItem.join("")}`;
};

getTvList(inventory);


//Opdracht 4a;
// Ik krijg en hele array met tv's, ik weet niet goed hoe ik er 1 pecifieke uit moet krijgen dmv een functie
function getOneTv(getTv) {
  const oneTvString = getTv.map((oneTv) => {
    return oneTv.brand + " " + oneTv.type + " - " + oneTv.name;
  });
  return oneTvString;
};

console.log(getOneTv(inventory));


//Opdracht 4b;
function getTvPrice(price) {
  return "€" + price + ",-";
};

// of:
// function getTvPrice(getPriceArray) {
//   const oneTvPrice = getPriceArray.map((getPrice) => {
//     return "€" + getPrice.price + ",-";
//   });
//   return oneTvPrice;
// };

console.log(getTvPrice(inventory[0].price));


//Opdracht 4c:
function tvScreenSizes(tvArray) {
  const tvSizes = tvArray.map((screenSize) => {
    const newSizesArray = [];
    for (let i = 0; i < screenSize.availableSizes.length; i++) {
      if (i > 0 && i < screenSize.availableSizes.length) {
        newSizesArray.push(" | " + screenSize.availableSizes[i] + " inches" + "(" + Math.round(screenSize.availableSizes[i] * 2.54) + " cm)");
      } else {
        newSizesArray.push(screenSize.availableSizes[i] + " inches" + "(" + Math.round(screenSize.availableSizes[i] * 2.54) + " cm)");
      }
    };
    return newSizesArray;
  });
  return tvSizes;
};

console.log(tvScreenSizes(inventory));


//Opdracht 4d;
// Er komt wel de juiste info op het scherm maar ik heb het gevoel dat ik het veel te omslachtig doe
const specificTv = getOneTv(inventory);
for (let i = 0; i < specificTv.length; i++) {
  if (specificTv[i].includes("43PUS6504/12")) {
    const tvSpecific = document.getElementById('specific-tv');
    tvSpecific.textContent = specificTv[i];
  };
};

const priceList = (inventory);
for (let i = 0; i < priceList.length; i++) {
  if (priceList[i].type.includes("43PUS6504/12")) {
    const tvSpecificPrice = document.getElementById('tv-price');
    tvSpecificPrice.textContent = getTvPrice(priceList[i].price);
  };
};

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].type.includes("43PUS6504/12")) {
    const tvSpecificSize = document.getElementById('inches');
    tvSpecificSize.textContent = tvScreenSizes(inventory)[i].join("");
  };
};


// Bonusopdracht 1:
function showTvSoldout(showSoldout) {
  const tvSoldout = showSoldout.filter((inventorySoldout) => {
    return inventorySoldout.originalStock === inventorySoldout.sold;
  });
  return tvSoldout;
};

function showAmbiLight(AmbilightArray) {
  const tvAmbilight = AmbilightArray.filter((inventoryAmbilight) => {
    return inventoryAmbilight.options.ambiLight;
  });
  return tvAmbilight;
};


function showSortedPrice(priceSorted) {
  return priceSorted.sort((a, b) =>
      a.price - b.price);
};


// Ik kom er niet goed uit, weet niet hoe ik eea aan een button moet linken
function myFunction() {
  document.getElementById("sold-out").innerHTML = showTvSoldout(inventory);
};
