let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
    costs = prompt("Введите обязательную статью расходов в этом месяце"),
    howMuch = +prompt("Во сколько обойдеться?");
    console.log(money , time);

    let appData = {
        wallet: money,
        timeData:  time,
        expenses: {
         costs , howMuch
        },
        income: [],
        savings: false
}
console.log(appData);
alert('Вашь бюджет в день ' + money / 30)