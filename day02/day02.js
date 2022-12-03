const fs = require( "fs" );

const rounds = fs
  .readFileSync( "day02.txt", { encoding: "utf-8" } ) // read day??.txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" ) // Split on newline
  .filter( Boolean ) // Remove empty lines
  .map( ( line ) => {
    const [ playerOne, playerTwo ] = line.split( " " );
    return { x: playerOne, y: playerTwo };
  } );

function part1() {
  let totalScore = 0;
  rounds.forEach( score => {
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
  } );
  console.log( "Day02-part 1: totalScore", totalScore );
}


function part2() {

  let totalNewScore = 0;
  rounds.forEach( score => {
    if ( score.y === "Y" ) { // DRAW
      totalNewScore += 3;
      if ( score.x === "A" ) { //rock
        totalNewScore += 1;
      }
      if ( score.x === "B" ) { //paper
        totalNewScore += 2;
      }
      if ( score.x === "C" ) { //scissor
        totalNewScore += 3;
      }
    }
    if ( score.y === "X" ) { // LOSE
      if ( score.x === "A" ) {
        totalNewScore += 3;
      }
      if ( score.x === "B" ) {
        totalNewScore += 1;
      }
      if ( score.x === "C" ) {
        totalNewScore += 2;
      }
    }
    if ( score.y === "Z" ) { // WIN
      totalNewScore += 6;
      if ( score.x === "A" ) {
        totalNewScore += 2;
      }
      if ( score.x === "B" ) {
        totalNewScore += 3;
      }
      if ( score.x === "C" ) {
        totalNewScore += 1;
      }
    }
  } );
  console.log( "Day02-part 2: totalNewScore", totalNewScore );
}

part1();

part2();