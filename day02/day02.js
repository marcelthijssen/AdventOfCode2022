const fs = require( "fs" );

const input = fs
  .readFileSync( "day02.txt", { encoding: "utf-8" } ) // read day??.txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" ) // Split on newline
  .filter( Boolean ) // Remove empty lines
  .map( ( line ) => {
    const [ x, y ] = line.split( " " );
    return { x, y };
  } );

console.log( input );

// 1 for Rock, 2 for Paper, and 3 for Scissors
// A X = Rock
// B Y = paper
// C Z = scissor

// if x = a && y=X
// +1+6
// x = b && y=y
// +2+6
// x = c && y = z
// +3+6

function part1() {
  let totalScore = 0;
  input.forEach( score => {
    console.log( score );
    if ( score.y === "X" ) { // rock
      totalScore += 1;
      if ( score.x === "C" ) { // scissor
        totalScore += 6;
      }
    }
    if ( score.y === "Y" ) { // paper
      totalScore += 2;
      if ( score.x === "A" ) { // rock
        totalScore += 6;
      }
    }
    if ( score.y === "Z" ) { // scissor
      totalScore += 3;
      if ( score.x === "B" ) { // Paper
        totalScore += 6;
      }
    }
    if ( score.x === "A" && score.y === "X"
      || score.x === "B" && score.y === "Y"
      || score.x === "C" && score.y === "Z" ) {
      totalScore += 3;
    }
    console.log( totalScore );

});
}


// console.log( input[0].x, input[0].y );

part1();