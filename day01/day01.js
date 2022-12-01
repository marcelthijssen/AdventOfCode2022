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
    total.push( score );
  }
// find highest number in array
  const maxCalories = Math.max( ...total );

  console.log('maxCalories', maxCalories);
}

function part2() {
  const total = [];

  for ( let i = 0 ; i < input.length ; i++ ) {
    const score = input[i].reduce( ( a, b ) => a + b, 0 );
    total.push( score );
  }

  let max = Math.max( ...total );
  let x = 1;
  let threeHighestScoreTotal=0;
  while ( x < 4 ) {
    max = Math.max( ...total );
    // Add max to
    threeHighestScoreTotal += max;
    // find indexOf HighestNumber
    const index = total.indexOf( max );
    //remove index with the highestNumber
    total.splice( index, 1 );
    x++;
  }

  console.log( "threeHighestScoreTotal", threeHighestScoreTotal );
}

part1();

part2();
