#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //$
let myPin = 13579

let pinAns = await inquirer.prompt(
    {
        name : "pin",
        message : "enter your pin number",
        type : "number"
    })
    if (pinAns.pin === myPin) {
        console.log("correct pin code!!")}
           
        let operationAns = await inquirer.prompt(
            [
                {
                    name : "operations",
                    message : "what do you want to do?",
                    type : "list",
                    choices : ["withdraw","check balance","fast cash"]
                }]
            );
            if (operationAns.operations === "withdraw"){
                let amountAns = await inquirer.prompt (
                    
                        {
                            name : "amount",
                            message : "enter a valid ammount",
                            type : "number",
                            validate : function (value){
                                if (value <= myBalance) {
                                    return true;

                                } return "Insuficient funds!!"}});
                                myBalance = myBalance - amountAns.amount;
                                console.log(`Withdrawn $${amountAns.amount}. Remaining balance: $${myBalance}`);
                            }
            if (operationAns.operations === "check balance") {
                console.log (`your current balance is : $${myBalance}`);
            }                
        if (operationAns.operations === "fast cash") {
            //fast cash enabled 
            inquirer.prompt (
                {
                    name : "fast cash",
                    message : "plz select amount from:",
                    type : "list",
                    choices :["2000","4000","5000","6000","8000","10000"] 
                }
            )
        }
   else {console.log("Incorrect pin code!!")}



            
    
