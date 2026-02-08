'use strict'

// a single data shape for savings goal

export const startDate = new Date("February, 2026")

export const savingsGoalData = {
    goal_one: {
        savingsGoal: " ",       // (*)
        reasonForGoal: " ",     // (opt)
        goalAmount: 1000,        // (*)
        startDate: startDate,           // calender to input date
        monthlyContributions: 220,           //  to be labled weekly/monthly contributions // (*)
        timeframe: 0,   // goalAmount / contributions years months // (*)
    },
    goal_two: {
        savingsGoal: " ",       // (*)
        reasonForGoal: " ",     // (opt)
        goalAmount: 0,        // (*)
        startDate: 0,
        monthlyContributions: 0,           // weekly/monthly contributions // (*)
        timeframe: 0,   // goalAmount / contributions years months // (*)
    },
    goal_three: {
        savingsGoal: " ",       // (*)
        reasonForGoal: " ",     // (opt)
        goalAmount: 0,        // (*)
        startDate: 0,
        monthlyContributions: 0,           // weekly/monthly contributions // (*)
        timeframe: 0,   // goalAmount / contributions  // (*)
    },
    goal_four: {
        savingsGoal: " ",       // (*)
        reasonForGoal: " ",     // (opt)
        goalAmount: 0,        // (*)
        startDate: 0,
        MonthlyCcontributions: 0,           // weekly/monthly contributions // (*)
        timeframe: 0,   // goalAmount / contributions years months // (*)
    },
    goal_five: {
        savingsGoal: " ",       // (*)
        reasonForGoal: " ",     // (opt)
        goalAmount: 0,        // (*)
        startDate: 0,
        monthlyContributions: 0,           // weekly/monthly contributions // (*)
        timeframe: 0,   // goalAmount / contributions years months // (*)
    },
}

export default {startDate, savingsGoalData};