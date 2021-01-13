'use strict'

let money=prompt("Ваш бюджет на месяц?");
let time=prompt("Введите дату в формате YYYY-MM-DD");

let appData={
    moneys: money,
    timeDate: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};

let a1=prompt("Введите обязательную статью расходов в этом месяце"),
    a2=prompt("Во сколько обойдется?"),
    a3=prompt("Введите обязательную статью расходов в этом месяце"),
    a4=prompt("Во сколько обойдется?");

appData.expenses.a1 = a3;
appData.expenses.a2 = a4;

console.log(appData.moneys/30);