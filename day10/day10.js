const fs = require( "fs" );

let instructions = fs.readFileSync( "day10.txt", { encoding: "utf-8" } ) // read .txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" )
  .map( ( movement ) => {
    const [ type, amount ] = movement.split( " " );
    return { type, amount };
  } );

function part1() {
  let x = 1;
  let signalStrength = 0;
  let numberOfCycles = 0;

  for ( let i = 0 ; i < instructions.length ; i++ ) {

    numberOfCycles++;
    if ( instructions[i].type !== "noop" ) {
      signalStrengthAdded( numberOfCycles );

      numberOfCycles++;
      signalStrengthAdded( numberOfCycles );

      x = x + parseInt( instructions[i].amount ); // add amount to X
    } else {
      signalStrengthAdded( numberOfCycles );
    }
  }

  function signalStrengthAdded( numberOfCycles ) {
    if ( numberOfCycles === 20 || numberOfCycles === 60 || numberOfCycles === 100 || numberOfCycles === 140 || numberOfCycles === 180 || numberOfCycles === 220 ) {
      signalStrength += Math.abs( numberOfCycles * x );
    }
  }

  console.log( "Day10-part 1: SignalStrength", signalStrength );
}

part1();
