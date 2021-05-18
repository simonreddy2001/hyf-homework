const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
];

const lifeSpan = 80 * 365 * 24 * 60
let totalSeriesTime = 0

function logOutSeriesText(seriesDurations) {

    for (let i = 0; i < seriesDurations.length; i++) {
        seriesTimeInMinutes = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes
        console.log(`${seriesDurations[i].title} took ${((seriesTimeInMinutes/lifeSpan)*100).toFixed(4)}% of my life`)
        totalSeriesTime += (seriesTimeInMinutes/lifeSpan)*100
    }
    
    console.log(`In total that is ${totalSeriesTime.toFixed(4)}% of my life`)
}

logOutSeriesText(seriesDurations);

// Game of thrones took 0.01 % of my life
// Sopranos took 0.012 % of my life
// The Wire took 0.007 % of my life

// In total that is 0.2 % of my life