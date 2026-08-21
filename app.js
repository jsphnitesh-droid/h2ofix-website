// H2OFIX Lead Engine v2 & Product Data
const WEBHOOK_URL = ""; // Paste Google Apps Script URL here after deployment

const PRODUCTS = [
["3M","3M AP902 Water Softener","Hard Water","₹18,000–₹25,000",18000],
["3M","3M AP431 RO Purifier","Drinking Water","₹12,000–₹18,000",12000],
["3M","3M Aqua-Pure Whole House","Whole House","₹8,000–₹15,000",8000],
["3M","3M Scale Guardian","Descaling","₹6,000–₹10,000",6000],
["3M","3M Commercial Softener","Community","₹85,000–₹1,50,000",85000],
["3M","3M Under Sink RO","Drinking Water","9,000–₹14,000",9000],
["AO Smith","AO Smith Z8 RO","Drinking Water","₹15,000–₹22,000",15000],
["AO Smith","AO Smith X4 RO+","Drinking Water","₹12,000–₹18,000",12000],
["AO Smith","HSE-VES-X Plus Geyser","Hot Water","₹8,000–₹14,000",8000],
["AO Smith","ENO Storage Geyser","Hot Water","₹6,000–₹12,000",6000],
["AO Smith","ProPlanet B4","Drinking Water","₹18,000–₹28,000",18000],
["Eureka Forbes","Aquaguard Marvel","Drinking Water","₹10,000–₹16,000",10000],
["Eureka Forbes","Aquaguard Enhance","Drinking Water","₹14,000–₹20,000",14000],
["Eureka Forbes","Dr. Aquaguard","Drinking Water","₹18,000–₹25,000",18000],
["Eureka Forbes","Classic UV","Drinking Water","6,000–₹10,000",6000],
["Eureka Forbes","Smart RO","Drinking Water","₹12,000–₹18,000",12000],
["Kent","Kent Grand Plus RO","Drinking Water","₹14,000–₹20,000",14000],
["Kent","Kent Pride Plus","Drinking Water","₹10,000–₹16,000",10000],
["Kent","Kent Water Softener","Hard Water","₹20,000–₹35,000",20000],
["Kent","Kent Ace Mineral RO","Drinking Water","₹16,000–22,000",16000],
["V-Guard","Victo Storage Geyser","Hot Water","₹5,000–₹10,000",5000],
["V-Guard","Sprinhot Plus","Hot Water","₹4,000–₹8,000",4000],
["V-Guard","Divino Geyser","Hot Water","₹8,000–₹14,000",8000],
["Racold","Eterno Pro Geyser","Hot Water","₹8,000–₹15,000",8000],
["Racold","Altro Pro","Hot Water","₹6,000–₹12,000",6000],
["Racold","Solar Water Heater","Solar","₹25,000–₹50,000",25000],
["Venus","Magnum Plus Geyser","Hot Water","₹5,000–₹10,000",5000],
["Venus","Mini Instant Geyser","Hot Water","₹3,000–₹6,000",3000],
["Grundfos","CM Pressure Booster","Pressure","₹18,000–₹35,000",18000],
["Grundfos","SCALA2 Smart Pump","Pressure","₹25,000–₹45,000",25000],
["Grundfos","Community Booster","Community","₹60,000–₹1,20,000",60000],
["Zero B","Eco RO","Drinking Water","8,000–₹14,000",8000],
["Zero B","Grand Plus","Drinking Water","₹12,000–₹18,000",12000],
["Kamal Solar","Solar Heater 100L","Solar","₹18,000–₹28,000",18000],
["Kamal Solar","Solar Heater 200L","Solar","₹28,000–₹45,000",28000],
["Rainy","Rainwater Harvesting","Rainwater","₹35,000–₹80,000",35000],
["Rainy","Pre-Filter System","Filtration","₹8,000–₹15,000",8000],
["Exide","Solar Battery 150Ah","Solar","₹12,000–₹18,000",12000],
["Exide","Inverter Battery","Power Backup","₹8,000–₹15,000",8000],
["H2OFIX","Tablet Salt (25kg)","Consumable","₹800–₹1,200/bag",800],
["H2OFIX","AMC Plan","Service","2,500–₹8,000/yr",2500]
];

function inr(n){return "₹"+Math.round(n).toLocaleString("en-IN")}

function renderProducts(list) {
    const grid = document.getElementById('grid');
    if(!grid) return;
    grid.innerHTML = list.map(p => `
        <div class="card">
            <span class="tag">${p[0]}</span>
            <h3>${p[1]}</h3>
            <p>${p[2]}</p>
            <p class="price">${p[3
