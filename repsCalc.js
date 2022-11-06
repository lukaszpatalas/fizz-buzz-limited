function startTraining(max, cycle, program, bigPerc, widowmaker) {
    if (cycle >= 1 && cycle <= 5) {
        const fiveRep = max * 0.87;
        warmUpSets(fiveRep);
        switch (program) {
            case 0:
                boringHeavySets(max, cycle);
                slightlyLessBoringSets(max, cycle, bigPerc);
                break;
            case 1:
                firstHeavySets(max, cycle);
                if (widowmaker) {
                    widowmakerSets(max, cycle);
                } else {
                    firstLastSets(max, cycle);
                }
                break;
            case 2:
                originalFirstHeavySets(max, cycle);
                originalFirstSetLast(max, cycle);
                break;
            default:
                console.log("No program chosen.");
        }
    } else if (cycle === 6) {
        sickSets(max);
    } else {
        console.log("Sorry, please enter cycle number between 1 and 5 inclusive.");
    }
}

function originalFirstHeavySets(max, cycle) {
    if (cycle === 1) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 3`)
        console.log(`Heavy Set 2: ${Math.round((max * 0.8) / 2.5) * 2.5} kg * 3`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.9) / 2.5) * 2.5} kg * 3+ (PR Set)`);
    } else if (cycle === 2) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.65) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 2: ${Math.round((max * 0.75) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.85) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 3) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.75) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 2: ${Math.round((max * 0.85) / 2.5) * 2.5} kg * 3`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.95) / 2.5) * 2.5} kg * 1+ (PR Set)`);
    } else if (cycle === 4) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 2: ${Math.round((max * 0.8) / 2.5) * 2.5} kg * 3`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.9) / 2.5) * 2.5} kg * 1`);
    } else if (cycle === 5) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 2: ${Math.round((max * 0.8) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.9) / 2.5) * 2.5} kg * 1-3`);
    }
}

function originalFirstSetLast(max, cycle) {
    if (cycle === 1) {
        console.log(`FSL Set 1-3: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 2) {
        console.log(`FSL Set 1-3: ${Math.round((max * 0.65) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 3) {
        console.log(`FSL Set 1-3: ${Math.round((max * 0.75) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 4) {
        console.log(`PR Set: ${Math.round(max / 2.5) * 2.5} kg * 3-5`);
    } else if (cycle === 5) {
        console.log(`Deload Set: ${Math.round(max / 2.5) * 2.5} kg * 1`);
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
    } else if (cycle === 5) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 2: ${Math.round((max * 0.8) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.9) / 2.5) * 2.5} kg * 1-3`);
    }
}

function firstLastSets(max, cycle) {
    if (cycle === 1) {
        console.log(`FSL Set 1-3: ${Math.round((max * 0.65) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 2) {
        console.log(`FSL Set 1-3: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 3) {
        console.log(`FSL Set 1-3: ${Math.round((max * 0.75) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 4) {
        console.log(`PR Set: ${Math.round(max / 2.5) * 2.5} kg * 3-5`);
    } else if (cycle === 5) {
        console.log(`Deload Set: ${Math.round(max / 2.5) * 2.5} kg * 1`);
    }
}

function widowmakerSets(max, cycle) {
    if (cycle === 1) {
        console.log(`Widowmaker set: ${Math.round((max * 0.65) / 2.5) * 2.5} kg * 20`);
    } else if (cycle === 2) {
        console.log(`Widowmaker set: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 20`);
    } else if (cycle === 3) {
        console.log(`Widowmaker set: ${Math.round((max * 0.75) / 2.5) * 2.5} kg * 20`);
    } else if (cycle === 4) {
        console.log(`PR Set: ${Math.round(max / 2.5) * 2.5} kg * 3-5`);
    } else if (cycle === 5) {
        console.log(`Deload Set: ${Math.round(max / 2.5) * 2.5} kg * 1`);
    }
}

function warmUpSets(fiveRepMax) {
    console.log(`Warm up Set 1: ${Math.round((fiveRepMax * 0.4) / 2.5) * 2.5} kg * 5`);
    console.log(`Warm up Set 2: ${Math.round((fiveRepMax * 0.5) / 2.5) * 2.5} kg * 5`);
    console.log(`Warm up Set 3: ${Math.round((fiveRepMax * 0.6) / 2.5) * 2.5} kg * 3`);
}

function boringHeavySets(max, cycle) {
    if (cycle === 1 || cycle === 4) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 2: ${Math.round((max * 0.8) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.9) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 2) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.65) / 2.5) * 2.5} kg * 5`)
        console.log(`Heavy Set 2: ${Math.round((max * 0.75) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.85) / 2.5) * 2.5} kg * 5`);
    } else if (cycle === 3) {
        console.log(`Heavy Set 1: ${Math.round((max * 0.75) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 2: ${Math.round((max * 0.85) / 2.5) * 2.5} kg * 5`);
        console.log(`Heavy Set 3: ${Math.round((max * 0.95) / 2.5) * 2.5} kg * 5`);
    }
}

function sickSets(max) {
    console.log(`Sick Set 1: ${Math.round((max * 0.45) / 2.5) * 2.5} kg * 5`);
    console.log(`Sick Set 2: ${Math.round((max * 0.55) / 2.5) * 2.5} kg * 5`);
    console.log(`Sick Set 3: ${Math.round((max * 0.65) / 2.5) * 2.5} kg * 5`);
    console.log(`Sick Set 4: ${Math.round((max * 0.75) / 2.5) * 2.5} kg * 5`);
    console.log(`Sick Set 5: ${Math.round((max * 0.85) / 2.5) * 2.5} kg * 5`);
}

function slightlyLessBoringSets(max, cycle, biggerPerc) {
    if (cycle === 1) {
        if (biggerPerc === true) {
            console.log(`BBB Set 1-3: ${Math.round((max * 0.6) / 2.5) * 2.5} kg * 10`);
        } else {
            console.log(`BBB Set 1-3: ${Math.round((max * 0.5) / 2.5) * 2.5} kg * 10`);
        }
    } else if (cycle === 2) {
        if (biggerPerc === true) {
            console.log(`BBB Set 1-3: ${Math.round((max * 0.5) / 2.5) * 2.5} kg * 10`);
        } else {
            console.log(`BBB Set 1-3: ${Math.round((max * 0.4) / 2.5) * 2.5} kg * 10`);
        }
    } else if (cycle === 3) {
        if (biggerPerc === true) {
            console.log(`BBB Set 1-3: ${Math.round((max * 0.7) / 2.5) * 2.5} kg * 10`);
        } else {
            console.log(`BBB Set 1-3: ${Math.round((max * 0.6) / 2.5) * 2.5} kg * 10`);
        }
    } else if (cycle === 4) {
        console.log(`PR Set: ${Math.round(max / 2.5) * 2.5} kg * 3-5`);
    }
}