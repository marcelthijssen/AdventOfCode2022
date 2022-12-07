const fs = require( "fs" );

const datastream = fs.readFileSync( "day06.txt", { encoding: "utf-8" } ) // read day??.txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .trimEnd(); // Remove ending whitespace

// console.log( datastream );


function part1() {
  const lengthOfMarker= 4
  let isStartOfPackets = false;
  for ( let i = 0 ; i < datastream.length ; i++ ) {
    let fourteen = datastream.substring( i, i + lengthOfMarker ).split( "" );
    isStartOfPackets = fourteen.every( ( char, index ) => {
      return fourteen.indexOf( char ) === index;
    } );
    if ( isStartOfPackets ) {
      console.log( "Day06-part 1. FIRST start-of-packet marker: ", i + lengthOfMarker );
      break;
    }
  }
}

function part2() {
  const lengthOfMarker= 14
  let isStartOfMessage = false;
  for ( let i = 0 ; i < datastream.length ; i++ ) {
    let fourteen = datastream.substring( i, i + lengthOfMarker ).split( "" );
    isStartOfMessage = fourteen.every( ( char, index ) => {
      return fourteen.indexOf( char ) === index;
    } );
    if ( isStartOfMessage ) {
      console.log( "Day06-part 2. FIRST start-of-message marker: ", i + lengthOfMarker );
      break;
    }
  }
}

part1();

part2();