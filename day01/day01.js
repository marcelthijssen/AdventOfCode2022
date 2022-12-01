const fs = require( "fs" );
const collect = require( "collect.js" );

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
  let score = [];
  input.forEach( ( index ) => {     // Different loop
    score = index.reduce( ( a, b ) => a + b, 0 );
    total.push( score );     // Add score to new array 'total'
  } );

  const topThreeTotal = collect( total.sort( ( a, b ) => b - a ) )
    .take( 3 )
    .reduce( ( a, b ) => a + b, 0 );
  console.log( "Day01-part 1: maxCalories", topThreeTotal );
}

part1();

part2();
