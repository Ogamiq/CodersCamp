//Growth of a Population
function nbYear(p0, percent, aug, p) {
    let currentPopulation = p0;
    let currentYear = 0;
    
    while(currentPopulation < p) {
      currentPopulation = currentPopulation * (1 + percent*0.01) + aug;
      currentYear += 1;
    }
    return currentYear;
}
