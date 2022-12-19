const fs = require( "fs" );

let route = fs.readFileSync( "day09.txt", { encoding: "utf-8" } ) // read .txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" )
  .map( ( movement ) => {
    const [ dir, steps ] = movement.split( " " );
    return { dir, steps };
  } );

function part1() {
  let visited = [];
  let a = 0;
  let b = 0;
  let x = 0;
  let y = 0;

  // adding steps
  for ( let i = 0 ; i < route.length ; i++ ) {
    let s = 0;
    if ( route[i].dir === "R" ) {
      while ( s < parseInt( route[i].steps ) ) {
        b++;
        // grid.push( [ a, b ] );
        moveTowardsH2( a, b );
        s++;
      }
    }
    if ( route[i].dir === "L" ) {
      while ( s < parseInt( route[i].steps ) ) {
        b--;
        // grid.push( [ a, b ] );
        moveTowardsH2( a, b );
        s++;
      }
    }
    if ( route[i].dir === "U" ) {
      while ( s < parseInt( route[i].steps ) ) {
        a--;
        // grid.push( [ a, b ] );
        moveTowardsH2( a, b );
        s++;
      }
    }
    if ( route[i].dir === "D" ) {
      while ( s < parseInt( route[i].steps ) ) {
        a++;
        // grid.push( [ a, b ] );
        moveTowardsH2( a, b );
        s++;
      }
    }
  }

  function moveTowardsH2( a, b ) {
    if ( x + 2 === a ) {
      x++;
      if ( y + 1 === b ) {
        y++;
      } else if ( y - 1 === b ) {
        y--;
      }
      addToVisited( x, y );
    } else if ( x - 2 === a ) {
      x--;
      if ( y + 1 === b ) {
        y++;
      } else if ( y - 1 === b ) {
        y--;
      }
      addToVisited( x, y );
    }
    if ( y + 2 === b ) {
      y++;
      if ( x + 1 === a ) {
        x++;
      } else if ( x - 1 === a ) {
        x--;
      }
      addToVisited( x, y );
    } else if ( y - 2 === b ) {
      y--;
      if ( x + 1 === a ) {
        x++;
      } else if ( x - 1 === a ) {
        x--;
      }
    }
    addToVisited( x, y );
  }

  function addToVisited( x, y ) {
    let item = "" + x + y;
    if ( visited.includes( item ) ) {
    } else {
      visited.push( item );
    }
  }

  console.log( "visited", visited, "total visited", visited.length );
}

part1();

// part2()