function cityInfo(name, population, treasury) {
    let city = { name: name, population: population, treasury: treasury, taxRate: 10, collectTaxes, applyGrowth, applyRecession};

function collectTaxes() {
    city.treasury += city.population * city.taxRate;
}

function applyGrowth(percentage) {
    city.population += city.population * percentage / 100;
}

function applyRecession(percentage) {
    city.treasury -= city.treasury * percentage / 100;
}

    return city;
}