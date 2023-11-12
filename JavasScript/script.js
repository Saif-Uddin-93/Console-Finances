//The total number of months included in the dataset.
let totalMonths = financesArr.length;
//console.log("Dictionary length: " + Object.keys(financesDic).length);


//The net total amount of Profit/Losses over the entire period.
let netProfitLoss = 0;
for(let i = 0; i<totalMonths; i++)
{
    netProfitLoss += financesArr[i][1];
}


//The average of the changes in Profit/Losses over the entire period.
/* You will need to track what the total change in Profit/Losses are from month to month and then find the average.
(Total/(Number of months - 1)) */
let avg = 0;
for (let i = 1; i < totalMonths; i++) 
{
    let difference = financesArr[i][1]-financesArr[i-1][1];
    avg += difference;
}
avg = avg/totalMonths;

//The greatest increase in Profit/Losses (date and amount) over the entire period.
//The greatest increase by default is -Infinity
//If there is no incease, then the greatest Increase will remain -Infitiny
let monthIncrease = [];
let greatestIncrease = -Infinity;
for (let i = 1; i < totalMonths; i++){
    let month = financesArr[i][0];
    let difference = financesArr[i][1] - financesArr[i-1][1];
    if(greatestIncrease < difference){
        greatestIncrease = difference;
        monthIncrease = [month, difference];
    }
}


//The greatest decrease in Profit/Losses (date and amount) over the entire period.
//The greatest decrease by default is Infinity
//If there is no decease, then the greatest decrease will remain Infitiny
let monthDecrease = [];
let greatestDecrease = Infinity;
for (let i = 1; i < totalMonths; i++){
    let difference = financesArr[i][1] - financesArr[i-1][1];
    if(greatestDecrease > difference){
        greatestDecrease = difference;
        monthDecrease = [financesArr[i][0], difference];
    }
}


console.log(
`Financial Analysis
----------------
Total Months: ${totalMonths}
Total: $${netProfitLoss}
Average Change: $${avg}
Greatest Increase in Profits/Losses: ${monthIncrease[0]} ($${monthIncrease[1]})
Greatest Decrease in Profits/Losses: ${monthDecrease[0]} ($${monthDecrease[1]})`
);