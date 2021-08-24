module.exports = function toReadable (number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];   
    let tensTitles = ['','','twenty','thirty','forty', 'fifty', 'sixty','seventy','eighty','ninety'];

   let numberUnits = number%10;
    let convertUnits = units[numberUnits];

    if (number === 0){
      return 'zero';
    };

    if (number<=9){
      return convertUnits};

    let numberTens = number%100;
 
    let convertTens = '';

    if (numberTens>=10&&numberTens<=19){
      convertTens = ' '+teens[numberTens-10];
      convertUnits = ''
    }
    else {
      numberTens = Math.floor(numberTens/10);
      convertTens = numberTens!==0 ? ' '+tensTitles[numberTens]:'';
    }

    if (number<=99){
      return (convertTens+' '+convertUnits).trim()};

    numberHundreds = Math.floor(number/100);
    let convertHundreds = '';

    convertHundreds = units[numberHundreds];


    return (convertHundreds+' hundred'+convertTens+' '+convertUnits).trim();
}
