$("#quess_number").click(function() {
    let number = prompt('яке чісло від 1 до 5 було загадано?');
    let NumberToQuess = Math.floor(Math.random() *6)
    if (number == NumberToQuess) {
        alert ('правильно! гарна інтуіція')
    }else{
        alert(`не вгадав! було загадано${NumberToQuess}`)
    }
});