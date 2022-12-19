const fs = require( "fs" );

let route = fs.readFileSync( "day09-test.txt", { encoding: "utf-8" } ) // read .txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" )
  .map( ( movement ) => {
    const [ dir, steps ] = movement.split( " " );
    return { dir, steps };
  } );

console.log( route );

// console.log( movements[0].direction, movements[0].amount );

function part1() {
  let grid = [];
  let visited = [];
  let a = 0;
  let b = 0;
  let x = 0;
  let y = 0;

  console.log( grid );

  function moveTowardsH2( a, b ) {
    // console.log( "a", a, "b", b, "x", x, "y", y );
    if ( x === a + 2 && y === b ) {        // Moving UP
      x = x + 1;
    } else if ( x === a - 2 && y === b ) { // moving DOWN
      x = x - 1;
    } else if ( y === b + 2 && x === a ) { // moving RIGHT
      y = y + 1;
    } else if ( y === b - 2 && x === a ) { // moving LEFT
      y = y - 1;

    } else if ( x === a + 1 && y === b + 2 ) {
      x++;
      y--;
    } else if ( x === a + 1 && y === b + 2 ) {
      x--;
      y--;
    } else if ( x === a + 2 && y === b + 1 ) {
      x--;
      y--;
    } else if ( x === a + 2 && y === b - 1 ) {
      x--;
      y++;
    } else if ( x === a + 1 && y === b - 2 ) {
      x--;
      y++;
    } else if ( x === a - 1 && y === b - 2 ) {
      x++;
      y++;
    } else if ( x === a - 2 && y === b - 1 ) {
      x++;
      y++;
    } else if ( x === a - 2 && y === b + 1 ) {
      x++;
      y--;
    }
    visited.push( [ x, y ] );
  }

  // adding steps
  for ( let i = 0 ; i < route.length ; i++ ) {
    console.log( route[i].dir, route[i].steps, a, b );

    let s = 0;
    if ( route[i].dir === "R" ) {
      // console.log( "route[i].steps", route[i].steps );
      while ( s < parseInt( route[i].steps ) ) {
        b++;
        // console.log( "a", a ,'b',b,'x', x,'y',y);
        grid.push( [ a, b ] );
        moveTowardsH2( a, b );
        s++;
      }
      // break;
    }
    if ( route[i].dir === "L" ) {
      while ( s < parseInt( route[i].steps ) ) {
        b--;
        // console.log( "a", a ,'b',b,'x', x,'y',y);

        grid.push( [ a, b ] );
        moveTowardsH2( a, b );
        s++;
      }
    }
    if ( route[i].dir === "U" ) {
      while ( s < parseInt( route[i].steps ) ) {
        a--;
        // console.log( "a", a ,'b',b,'x', x,'y',y);
        grid.push( [ a, b ] );
        moveTowardsH2( a, b );
        s++;
      }
    }
    if ( route[i].dir === "D" ) {
      while ( s < parseInt( route[i].steps ) ) {
        a++;
        console.log( "a", a, "b", b );
        grid.push( [ a, b ] );
        moveTowardsH2( a, b );
        s++;
      }
    }
    console.log( "grid", grid, "visited", visited );
  }
}

part1();

// part2()