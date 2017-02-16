//EXERCISE 10-11
//Generator function
function * makeNames() {
    let firstNames = ["Lars", "Jan", "Ida", "Tine", "Thomas"];
    let lastNames = ["Mortensen", "Peterson", "Obama", "Jensen", "Hansen"];

    //an infinite iterator
   while(true){
        let rnd1 = Math.floor((Math.random() * 4) + 1); 
        let rnd2 = Math.floor((Math.random() * 4) + 1); 
        let person = yield {fName: firstNames[rnd1], lName: lastNames[rnd2]}; //gets a random firstNames and lastNames
    }

}


let index = 0 ;
for ( let name of makeNames()) {
    console.log(name);
    if (index++ === 50) {
        break;
    }
}