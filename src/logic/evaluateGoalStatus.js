"use strict"



// **Outcome:**

// Determine whether a goal is:

// - on-track
// - at-risk
// - unreachable

// **Tasks:**

// - Compare projected total vs target
// - Apply clear rules
// - Return status enum/string 

// rules - 
// - green: goal is less than 5 years because the monthly conditions are high enough
//             = there needs to be an option to change maximum year

// = orange: goal can be achieved in less than 5 years but only if conditions do not change;   monthly contribution cannot change

// = red: goal more than 5 years (or optional maximum)


// 5 years in months = 60 months
// monthsRequired (from projectSavings) > 60
// if true Red
// monthsRequired < 60 > 48
// if true Orange
// else monthsRequired =< 36
// Green


export const GOAL_STATUS = {
    GREEN: "on-track",
    ORANGE: "at-risk",
    RED: "unreachable",
}

export function determineGoalStatus({monthsRequired}) {
    console.log("INSIDE FUNCTION:", monthsRequired, typeof monthsRequired);

    if (monthsRequired > 60) return GOAL_STATUS.RED;
    if (monthsRequired > 48 && monthsRequired <= 60) return GOAL_STATUS.ORANGE;
    return GOAL_STATUS.GREEN;
    
}



