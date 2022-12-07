const fs = require( "fs" );

const stacksInput = fs.readFileSync( "day05.txt", { encoding: "utf-8" } ) // read day??.txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .trimEnd(); // Remove ending whitespace

const [ stacks, moves ] = stacksInput.split( "\n\n" ).map( ( x ) => x.split( "\n" ) );

const allStacks = stacks.map( ( stack ) =>
  [ ...stack ].filter( ( value, index ) => index % 4 === 1 )
);

const numberOfStack = 9;

function part1() {
  let horizontalStacks = [];
  for ( let i = 0 ; i < numberOfStack ; i++ ) for ( let j = 0 ; j < numberOfStack - 1 ; j++ ) {
    if ( allStacks[j][i] === undefined || allStacks[j][i] === " " ) {
      allStacks[j][i] = "";
    }
    horizontalStacks.splice( 0, 0, allStacks[j][i] );
  }

  // every three items insidea embedded array
  const newStacks = [];
  for ( let z = 0 ; z < horizontalStacks.length ; z += numberOfStack - 1 ) { // i+=3 can solve your problem
    const nine = horizontalStacks[z] + horizontalStacks[z + 1] + horizontalStacks[z + 2]
      + horizontalStacks[z + 3] + horizontalStacks[z + 4] + horizontalStacks[z + 5] + horizontalStacks[z + 6] + horizontalStacks[z + 7];
    newStacks.push( nine );
  }
  newStacks.reverse();

  const actions = []; // get actions
  for ( const move of moves ) {
    const match = /move (\d+) from (\d+) to (\d+)/g.exec( move );
    actions.push( {
      amount: parseInt( match[1] ),
      from: parseInt( match[2] ),
      to: parseInt( match[3] ),
    } );
  }

  for ( let i = 0 ; i <= actions.length - 1 ; i++ ) {
    let cratesToMove;
    for ( let j = 0 ; j < actions[i].amount ; j++ ) {
      cratesToMove = newStacks[actions[i].from - 1].slice( -1 ); // save
      newStacks[actions[i].from - 1] = newStacks[actions[i].from - 1].slice( 0, -1 );
      newStacks[actions[i].to - 1] += cratesToMove;
    }
  }

  let result = "";
  for ( let topCrates of newStacks ) {
    result += topCrates.slice( -1 ) ;
  }
  console.log( "Day05-part 1. TopCrates with old crane: ", result)
}


function part2() {
  let horizontalStacks = [];
  for ( let i = 0 ; i < numberOfStack ; i++ ) for ( let j = 0 ; j < numberOfStack - 1 ; j++ ) {
    if ( allStacks[j][i] === undefined || allStacks[j][i] === " " ) {
      allStacks[j][i] = "";
    }
    horizontalStacks.splice( 0, 0, allStacks[j][i] );
  }

  // every three items insidea embedded array
  const newStacks = [];
  for ( let z = 0 ; z < horizontalStacks.length ; z += numberOfStack - 1 ) { // i+=3 can solve your problem
    const nine = horizontalStacks[z] + horizontalStacks[z + 1] + horizontalStacks[z + 2]
      + horizontalStacks[z + 3] + horizontalStacks[z + 4] + horizontalStacks[z + 5] + horizontalStacks[z + 6] + horizontalStacks[z + 7];
    newStacks.push( nine );
  }
  newStacks.reverse();

  const actions = []; // get actions
  for ( const move of moves ) {
    const match = /move (\d+) from (\d+) to (\d+)/g.exec( move );
    actions.push( {
      amount: parseInt( match[1] ),
      from: parseInt( match[2] ),
      to: parseInt( match[3] ),
    } );
  }

  for ( let i = 0 ; i <= actions.length - 1 ; i++ ) {
    let cratesToMove;

    cratesToMove = newStacks[actions[i].from - 1].slice( -actions[i].amount ); // save
    newStacks[actions[i].from - 1] = newStacks[actions[i].from - 1].slice( 0, -actions[i].amount );
    newStacks[actions[i].to - 1] += cratesToMove;
  }

  let result = "";
  for ( let topCrates of newStacks ) {
    result += topCrates.slice( -1 ) ;
  }
  console.log( "Day05-part 2. TopCrates with better crane: ", result)
}

part1();

part2();