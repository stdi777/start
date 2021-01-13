'use strict'

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeDate: time,
    savings: false
};



for(let i =0; i<2;i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if((typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a!='' && b!='' ){
        console.log('done');
        appData.expenses[a] = b;
    }else{
        console.log("bad result");
        i--;
    }

    
    
}
appData.moneyPerDay=appData.budget/30;

alert("Бюджет на деньЖ "+appData.moneyPerDay);

if(appData.moneyPerDay<100){
    console.log("min urov doctatka");
}else if (appData.moneyPerDay>100 &&appData.moneyPerDay<2000){
    console.log("sredn urov doctatka");
}else if (appData.moneyPerDay>2000){
    console.log("vysok urov doctatka");
}else{
    console.log("Error!!!")
}