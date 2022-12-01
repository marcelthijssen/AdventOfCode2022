const fs = require( "fs" );

const input = fs
  .readFileSync( "day01.txt", { encoding: "utf-8" } ) // read day??.txt content
  .split( "\n\n" )
  .filter( ( x ) => Boolean( x ) )
  .map( ( x ) =>
    x
      .replace( /[\n ,]+/g, " " )
      .trim().split( " " )
      .map( ( y ) => parseInt( y ) ) );

// console.log( "input", input );

function part1() {
  const total = [];

  for ( let i = 0 ; i < input.length ; i++ ) {
    const score = input[i].reduce( ( a, b ) => a + b, 0 );
    total.push( score );     // Add score to new array 'total'
  }
  const maxCalories = Math.max( ...total ); // find highest number in array
  console.log( "Day01-part 1: maxCalories", maxCalories );
}

function part2() {
  const total = [];

  input.forEach( ( index ) => {     // Different loop
    const score = index.reduce( ( a, b ) => a + b, 0 );
    total.push( score );     // Add score to new array 'total'
  });
  let max = Math.max( ...total );
  let x = 1;
  let threeHighestScoreTotal = 0;
  while ( x <= 3 ) {
    max = Math.max( ...total );
    threeHighestScoreTotal += max;     // Add max to threeHighestScoreTotal
    const index = total.indexOf( max );     // find indexOf HighestNumber
    total.splice( index, 1 );    //remove index with the highestNumber
    x++;
  }
  console.log( "Day01-part 2: threeHighestScoreTotal", threeHighestScoreTotal );
}

part1();

part2();
