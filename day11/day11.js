const fs = require( "fs" );
let stringMath = require( "string-math" );

let monkeys = fs.readFileSync( "day11.txt", { encoding: "utf-8" } ) // read .txt content
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

// console.log( route );


function part1() {
  // 20 rounds the monkey inspects and through

  for ( let i = 0 ; i < 20 ; i++ ) { // 20 times

    for ( let j = 0 ; j < monkeys.length ; j++ ) { // times monkeys
      if ( monkeys[j].items.length === undefined ) { // if monkey has no items

      } else {
        let items = monkeys[j].items;
        let newWorryLevel;
        let operation = monkeys[j].operation;
        let istrue = monkeys[j].istrue;
        let isfalse = monkeys[j].isfalse;
        let test = monkeys[j].test;

        while ( items.length > 0 ) { // number of items
          monkeys[j].times++;
          let item = items.shift();
          if ( operation.slice( -3 ) === "old" ) {
            newWorryLevel = Math.floor( (item * item) / 3 );
          } else {
            let letItem = item + operation; // makes it a string
            let worrying = stringMath( letItem ) / 3;
            newWorryLevel = Math.floor( worrying );
          }

          if ( newWorryLevel % test === 0 ) {
            monkeys[istrue].items.push( newWorryLevel );
          } else {
            monkeys[isfalse].items.push( newWorryLevel );
          }
        }
      }
    }
  }
  monkeys.sort( ( a, b ) => a.times - b.times );
  const monkeyBusiness = monkeys[monkeys.length-1].times * monkeys[monkeys.length-2].times;

  console.log( "Day11 part 1. Monkey Business: ", monkeyBusiness );

}


part1();
