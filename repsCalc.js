const programs = ["Boring But Big", "Last Set Last"];

function firstSetLast(max, cycle) {
    if (cycle >= 1 && cycle <= 4) {
        const fiveRep = max * 0.87;
        warmUpSets(fiveRep);
        firstHeavySets(max, cycle);
        firstLastSets(max, cycle);
    } else if (cycle === 5) {
        sickSets(max);
    } else {
        console.log("Sorry, please cycle number between 1 and 5 inclusive.");
    }
}

function boringButBig(max, cycle, bigPerc) {
    if (cycle >= 1 && cycle <= 4) {
        const fiveRep = max * 0.87;
        warmUpSets(fiveRep);
        boringHeavySets(max, cycle);
        boringSets(max, cycle, bigPerc);
    } else if (cycle === 5) {
        sickSets(max);
    } else {
        console.log("Sorry, please cycle number between 1 and 5 inclusive.");
    }
}

function firstHeavySets(max, cycle) {
    if (cycle === 1) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.65) / 2.5) * 2.5} kg * 5`)
        console.log(`Heavy Set 2: ${Math.round((max * 0.75) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.85) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 2) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 3`);
        console.log(`Heavy Set 2: ${Math.round((max * 0.8) / 2.5) * 2.5} kg * 3`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.9) / 2.5) * 2.5} kg * 3`);
    } else if (cycle === 3) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.75) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 2: ${Math.round((max * 0.85) / 2.5) * 2.5} kg * 3`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.95) / 2.5) * 2.5} kg * 1`);
    } else if (cycle === 4) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 2: ${Math.round((max * 0.8) / 2.5) * 2.5} kg * 3`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.9) / 2.5) * 2.5} kg * 1`);
    }
}

function firstLastSets(max, cycle) {
    if (cycle === 1) {
        console.log(`FSL Set 1-5: ${Math.round((max * 0.65) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 2) {
        console.log(`FSL Set 1-5: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 3) {
        console.log(`FSL Set 1-5: ${Math.round((max * 0.75) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 4) {
        console.log(`Deload Set: ${Math.round(max / 2.5) * 2.5} kg * 1`);
    }
}

function warmUpSets(fiveRepMax) {
    console.log(`Warm up Set 1: ${Math.round((fiveRepMax * 0.4) / 2.5) * 2.5} kg * 5`);
    console.log(`Warm up Set 2: ${Math.round((fiveRepMax * 0.5) / 2.5) * 2.5} kg * 5`);
    console.log(`Warm up Set 3: ${Math.round((fiveRepMax * 0.6) / 2.5) * 2.5} kg * 3`);
}

function boringHeavySets(maxRep, cycleNo) {
    if (cycleNo === 1 || cycleNo === 4) {
        console.log(`Heavy Set 1: ${Math.round((maxRep * 0.7) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 2: ${Math.round((maxRep * 0.8) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 3: ${Math.round((maxRep * 0.9) / 2.5) * 2.5} kg * 5`);
    } else if (cycleNo === 2) {
        console.log(`Heavy Set 1: ${Math.round((maxRep * 0.65) / 2.5) * 2.5} kg * 5`)
        console.log(`Heavy Set 2: ${Math.round((maxRep * 0.75) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 3: ${Math.round((maxRep * 0.85) / 2.5) * 2.5} kg * 5`);
    } else if (cycleNo === 3) {
        console.log(`Heavy Set 1: ${Math.round((maxRep * 0.75) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 2: ${Math.round((maxRep * 0.85) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 3: ${Math.round((maxRep * 0.95) / 2.5) * 2.5} kg * 5`);
    }
}

function sickSets(maxRep) {
    console.log(`Sick Set 1: ${Math.round((maxRep * 0.45) / 2.5) * 2.5} kg * 5`);
    console.log(`Sick Set 2: ${Math.round((maxRep * 0.55) / 2.5) * 2.5} kg * 5`);
    console.log(`Sick Set 3: ${Math.round((maxRep * 0.65) / 2.5) * 2.5} kg * 5`);
    console.log(`Sick Set 4: ${Math.round((maxRep * 0.75) / 2.5) * 2.5} kg * 5`);
    console.log(`Sick Set 5: ${Math.round((maxRep * 0.85) / 2.5) * 2.5} kg * 5`);
}

function boringSets(maxRep, cycleNo, biggerPerc) {
    if (cycleNo === 1) {
        if (biggerPerc === true) {
            console.log(`BBB Set 1-5: ${Math.round((maxRep * 0.6) / 2.5) * 2.5} kg * 10`);
        } else {
            console.log(`BBB Set 1-5: ${Math.round((maxRep * 0.5) / 2.5) * 2.5} kg * 10`);
        }
    } else if (cycleNo === 2) {
        if (biggerPerc === true) {
            console.log(`BBB Set 1-5: ${Math.round((maxRep * 0.5) / 2.5) * 2.5} kg * 10`);
        } else {
            console.log(`BBB Set 1-5: ${Math.round((maxRep * 0.4) / 2.5) * 2.5} kg * 10`);
        }
    } else if (cycleNo === 3) {
        if (biggerPerc === true) {
            console.log(`BBB Set 1-5: ${Math.round((maxRep * 0.7) / 2.5) * 2.5} kg * 10`);
        } else {
            console.log(`BBB Set 1-5: ${Math.round((maxRep * 0.6) / 2.5) * 2.5} kg * 10`);
        }
    } else if (cycleNo === 4) {
        console.log(`PR Set: ${Math.round(maxRep / 2.5) * 2.5} kg * 3-5`);
    }
}