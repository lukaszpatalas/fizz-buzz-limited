function repsCalculator(max, cycle, bigPerc) {
    if (cycle >= 1 && cycle <= 4) {
        const fiveRep = max * 0.87;
        warmUpSets(fiveRep);
        heavySets(max, cycle);
        lastSets(max, cycle, bigPerc);
    } else if (cycle === 5) {
        sickSets(max);
    } else {
        console.log("Sorry, please cycle number between 1 and 4 inclusive.");
    }
}

function warmUpSets(fiveRepMax) {
    console.log(`Warm up Set 1: ${Math.round((fiveRepMax * 0.4) / 2.5) * 2.5} kg * 5`);
    console.log(`Warm up Set 2: ${Math.round((fiveRepMax * 0.5) / 2.5) * 2.5} kg * 5`);
    console.log(`Warm up Set 3: ${Math.round((fiveRepMax * 0.6) / 2.5) * 2.5} kg * 3`);
}

function heavySets(maxRep, cycleNo) {
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

function lastSets(maxRep, cycleNo, biggerPerc) {
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