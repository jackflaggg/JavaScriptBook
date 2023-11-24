let count = 0;
let sum = 0;
function cc(card) {
// Only change code below this line

    if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6){
        count++;
        //sum += count;
    } else if (card === 7 || card === 8 || card === 9){
        count--;
        //sum -= count;
    } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count--;
        //sum -= count;
    }

    //return console.log(count)
   return (count > 0) ? console.log(count + " Bet") : console.log(count + " Hold ");
    // return "Change Me";
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');