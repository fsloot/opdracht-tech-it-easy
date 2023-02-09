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
const totaTvSold = document.getElementById('total-tv-sold');

console.log(totaTvSold);

totaTvSold.textContent = counterTvSold;


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