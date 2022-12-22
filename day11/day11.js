const fs = require( "fs" );
let stringMath = require( "string-math" );

let route = fs.readFileSync( "day11.txt", { encoding: "utf-8" } ) // read .txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n\n" )
  .filter( Boolean )
  .map( monkeys => {
    let [ monkey, items, operation, test, istrue, isfalse, times ] = monkeys.split( "\n" );
    items = items.split( ": " ).pop().split( ", " ).map( Number );
    operation = operation.split( "= old " ).pop();
    test = test.split( "by " ).pop();
    istrue = istrue.slice( -1 );
    isfalse = isfalse.slice( -1 );
    times = 0;
    return { monkey, items, operation, test, istrue, isfalse, times };
  } )
;

console.log( route );


function part1() {
  // 20 rounds the monkey inspects and through
  let monkey0 = route[0].items.length;
  let monkey1 = route[1].items.length;
  let monkey2 = route[2].items.length;
  let monkey3 = route[3].items.length;
  console.log( monkey0, monkey1, monkey2, monkey3 );
  for ( let i = 0 ; i < 20 ; i++ ) { // 20 times

    for ( let j = 0 ; j < route.length ; j++ ) { // times monkeys
      if ( route[j].items.length === undefined ) { // if monkey has no items

      } else {
        let items = route[j].items;
        let newWorryLevel;
        let operation = route[j].operation;
        let istrue = route[j].istrue;
        let isfalse = route[j].isfalse;
        let test = route[j].test;

        while ( items.length > 0 ) { // number of items
          route[j].times++;
          let item = items.shift();
          if ( operation.slice( -3 ) === "old" ) {
            newWorryLevel = Math.floor( (item * item) / 3 );
          } else {
            let letItem = item + operation; // makes it a string
            let worrying = stringMath( letItem ) / 3;
            newWorryLevel = Math.floor( worrying );
          }

          if ( newWorryLevel % test === 0 ) {
            route[istrue].items.push( newWorryLevel );
          } else {
            route[isfalse].items.push( newWorryLevel );
          }
        }
      }
    }
  }
  route.sort( ( a, b ) => a.times - b.times );
  const monkeyBusiness = route[route.length-1].times * route[route.length-2].times;

  console.log( "Day11 part 1. Monkey Business: ", monkeyBusiness );

}

part1();