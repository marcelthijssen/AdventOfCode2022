const fs = require( "fs" );

const sections = fs
  .readFileSync( "day04.txt", { encoding: "utf-8" } ) // read day??.txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" ) // Split on newline
  .filter( Boolean )
  .map( ( section ) => {
    const [ first, second ] = section.split( "," ).map( ( point ) => {
      const [ x, y ] = point.split( "-" ).map( Number );
      return { x, y };
    } );
    return { first, second };
  } );


function part1() {
  let count = 0;
  sections.forEach( ( set ) => {
    if ( set.first.x <= set.second.x && set.first.y >= set.second.y || set.first.x >= set.second.x && set.first.y <= set.second.y ) {
      count++;
    }
  } );
  console.log( "Day04-part 1: Fully containing sets", count );
}

function part2() {
  let count = 0;
  sections.forEach( ( set ) => {
    if ( set.second.y >= set.first.x && set.second.x <= set.first.y || set.second.x >= set.first.x && set.second.x <= set.first.y ) {
      count++;
    }
  } );
  console.log( "Day04-part 2: Overlapping sets", count );
}

part1();

part2();