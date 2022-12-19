const fs = require( "fs" );

let instructions = fs.readFileSync( "day10" +
  ".txt", { encoding: "utf-8" } ) // read .txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" )
  .map( ( movement ) => {
    const [ type, amount ] = movement.split( " " );
    return { type, amount };
  } );

function part1() {
  let x = 1;
  let signalStrengthTotal = 0;
  let numberOfCycles = 0;

  for ( let i = 0 ; i < instructions.length ; i++ ) {
    numberOfCycles++;

    if ( instructions[i].type !== "noop" ) {
      signalStrength( numberOfCycles );
      numberOfCycles++;
      signalStrength( numberOfCycles );
      x += parseInt( instructions[i].amount );
    } else {
      signalStrength( numberOfCycles );
    }
  }

  function signalStrength( numberOfCycles ) {
    if ( numberOfCycles === 20 || numberOfCycles === 60 || numberOfCycles === 100 || numberOfCycles === 140 || numberOfCycles === 180 || numberOfCycles === 220 ) {
      signalStrengthTotal += Math.abs( numberOfCycles * x );
    }
  }

  console.log( "Day10-part 1: SignalStrength", signalStrengthTotal );
}

function part2() {
  let inputScreen = "";
  let x = 1;
  let numberOfCycles = 0;

  for ( let i = 0 ; i < instructions.length ; i++ ) {
    numberOfCycles++;

    if ( instructions[i].type !== "noop" ) {
      ctr( x, numberOfCycles );
      numberOfCycles++;
      ctr( x, numberOfCycles );
      x += parseInt( instructions[i].amount );
    } else {
      ctr( x, numberOfCycles );
    }
  }

  function ctr( x, numberOfCycles ) {

    if ( numberOfCycles > 40 && numberOfCycles <= 79 ) { numberOfCycles -= 40; }
    if ( numberOfCycles > 80 && numberOfCycles <= 119 ) { numberOfCycles -= 80; }
    if ( numberOfCycles > 120 && numberOfCycles <= 159 ) { numberOfCycles -= 120; }
    if ( numberOfCycles > 160 && numberOfCycles <= 199 ) { numberOfCycles -= 160; }
    if ( numberOfCycles > 200 && numberOfCycles <= 239 ) { numberOfCycles -= 200; }

    if ( numberOfCycles === x + 1 || x === numberOfCycles || numberOfCycles === x + 2 ) {
      inputScreen += "#";
    } else {
      inputScreen += " ";
    }
  }

  console.log( "Day10-part 2: KAPITALS FPGPHFGH", "\n", inputScreen.substring( 0, 39 ) + "\n" + inputScreen.substring( 40, 79 ) + "\n" + inputScreen.substring( 80, 119 )
    + "\n" + inputScreen.substring( 120, 159 ) + "\n" + inputScreen.substring( 160, 199 ) + "\n" + inputScreen.substring( 200, 239 ) );
}

part1();

part2();