"use strict"


// calculate number of months

export function generateSavingsTimeline({startDate, goalAmount, monthlyContributions}) {
    const monthsRequired = Math.ceil(goalAmount / monthlyContributions);
    const start = new Date(startDate);
    
    const timeline = Array.from({length: monthsRequired}).map((_, index) => {
        const date = new Date(start);
        date.setMonth(start.getMonth() + index);

        const remaining = goalAmount - monthlyContributions * (index + 1);

        return {
            month: index + 1,
            date,
            contribution: monthlyContributions,
            remainingBalance: Math.max(remaining, 0),
        };
    });

    const result = {
        timeline,
        monthsRequired,
        completionDate: timeline.at(-1).date,
    };

    console.log("generateSavingsTimeline result:",result);
    return result;
}
   

export default generateSavingsTimeline;


