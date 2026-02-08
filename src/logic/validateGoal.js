"use strict"

import { savingsGoalData, startDate } from "../models/savingsGoal.js";
import {generateSavingsTimeline} from "../logic/projectSavings.js";
import {determineGoalStatus} from "./evaluateGoalStatus.js";

// prevent invalid goals from existing

// valid target amount > 0

let goalAmount = savingsGoalData.goal_one.goalAmount
let contribution = savingsGoalData.goal_one.monthlyContributions

const result = generateSavingsTimeline({
    startDate,
    goalAmount,
    monthlyContributions: contribution,
});

const status = determineGoalStatus({
    monthsRequired: result.monthsRequired,
});


const {timeline, monthsRequired, completionDate} = result;

// validations

function validTargetAmount(goalAmount) {
    if (goalAmount < 0) {
        console.error("Invalid target amount. Must be more than £0.00");
         return false
    }
    return true;
}    

// validate monthly contribution > 0

function  validMonthlyContributions(contribution) {
    if (contribution < 0) {
      console.error("Invalid monthly contribution. Must be more than £0.00");  
      return false;  
    } 
    return true;
    
}

// validate target date > start date

function validTargetDate(startDate, completionDate){
    if (startDate >= completionDate) {
        console.error("Invalid completion date. Start date must be before the Target date");
        return false;
    } 
    return true;
}



console.log("validateTargetAmount:", validTargetAmount(goalAmount));
console.log("validateMonthlyContribution:", validMonthlyContributions(contribution));
console.log("validateTargetDate:", validTargetDate(startDate, completionDate));
console.log(monthsRequired, typeof monthsRequired);


console.log({
    goalAmount,
    contribution,
    startDate,
    completionDate,
    monthsRequired,
    status,
});

// return clear error messages