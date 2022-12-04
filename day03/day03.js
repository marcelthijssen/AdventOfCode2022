const fs = require( "fs" );

const ruckSacks = fs
  .readFileSync( "day03.txt", { encoding: "utf-8" } ) // read day??.txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" ) // Split on newline
  .filter( Boolean ); // Remove empty lines

function part1() {

  let allChars = [];
  let scores = [];
  ruckSacks.forEach( ( line ) => {
    let chars = [];

    let first = line.slice( 0, line.length / 2 ).split( "" );
    let second = line.slice( line.length / 2 ).split( "" );
    first.forEach( ( char, index ) => {
      if ( second.includes( char ) ) {
        if ( !chars.includes( char ) ) {
          chars.push( char );
        }
      }
    } );
    allChars.push( ...chars );
  } );
  allChars.forEach( ( char ) => {
    scores.push( char.charCodeAt( 0 ) > 96 ? char.charCodeAt( 0 ) - 96 : char.charCodeAt( 0 ) - 38 );
  } );
  const totalScore = scores.reduce( ( a, b ) => a + b, 0 );
  console.log( "Day03-part 1: totalScore", totalScore );
}

function part2() {

  const allItems = [];
  const priorities = [];
  let i;
  for ( i = 0 ; i < ruckSacks.length; i ) {
  const items = [];
    const ruckSack = ruckSacks[i];

    for ( let j = 0 ; j <= ruckSack.length ; j++ ) {
      if ( ruckSacks[i + 1].includes( ruckSack[j] ) && ruckSacks[i + 2].includes( ruckSack[j] ) ) {
        if ( !items.includes( ruckSack[j] ) ) {
          items.push( ...ruckSack[j] );
        }
      }
    }
    i+=3;
    allItems.push( ...items );
  }
  allItems.forEach( ( char ) => {
    priorities.push( char.charCodeAt( 0 ) > 96 ? char.charCodeAt( 0 ) - 96 : char.charCodeAt( 0 ) - 38 );
  } );
  const sumOfPriorities = priorities.reduce( ( a, b ) => a + b, 0 );
  console.log( "Day03-part 2: totalScore", sumOfPriorities );
}

part1();

part2();
