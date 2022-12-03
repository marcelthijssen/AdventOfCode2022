const fs = require( "fs" );

const items = fs
  .readFileSync( "day03.txt", { encoding: "utf-8" } ) // read day??.txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" ) // Split on newline
  .filter( Boolean ); // Remove empty lines

// console.log( items );

function part1() {

  let allChars =[];
  let scores = [];
  items.forEach( ( line ) => {
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
  allChars.push(...chars);
  } );
  allChars.forEach( ( char ) => {
    scores.push( char.charCodeAt( 0 ) > 96 ? char.charCodeAt( 0 ) - 96 : char.charCodeAt( 0 ) - 38 );
  } );
    const totalScore = scores.reduce( ( a, b ) => a + b, 0 );
    console.log( "Day03-part 1: totalScore", totalScore );
}

part1();

/*
parseInt( char.charCodeAt( 1 ) - 38 )
 */