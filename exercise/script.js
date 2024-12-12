let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], true);

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) {
            index += 1;
        }
        if (entry.squirrel) {
            index += 2;
        }
        table[index] += 1;
    }
    return table;
}

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
                 (table[0] + table[1]) *
                 (table[1] + table[3]) *
                 (table[0] + table[2]));
}

function calculateCorrelation(event) {
    return phi(tableFor(event, journal));
}

// Find all unique events in the journal
let events = [];
for (let entry of journal) {
    for (let event of entry.events) {
        if (!events.includes(event)) {
            events.push(event);
        }
    }
}

// Calculate correlations for each event
console.log("Event correlations:");
for (let event of events) {
    let correlation = calculateCorrelation(event);
    if (correlation !== 0) {
        console.log(event + ":", correlation.toFixed(4));
    }
}

// Display results in HTML
let demo = document.getElementById("demo");
demo.innerHTML = "<h2>Event Correlations:</h2>";
for (let event of events) {
    let correlation = calculateCorrelation(event);
    if (correlation !== 0) {
        demo.innerHTML += `<p>${event}: ${correlation.toFixed(4)}</p>`;
    }
}