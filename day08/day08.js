const fs = require( "fs" );

let treeTop = fs.readFileSync( "day08.txt", { encoding: "utf-8" } ) // read .txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" )
;

// console.log( treeTop );
const checkEvery = ( treesToCheck = [], currentTree ) => {
  // console.log( treesToCheck, currentTree );

  return treesToCheck.every( tree => {
    return tree < currentTree;
  } );
};

function isVisibleRight( i, j ) {
  let currentTree = treeTop[i][j];
  const treesToCheck = [];
  for ( let x = j + 1 ; x < treeTop.length ; x++ ) {
    treesToCheck.push( treeTop[i][x] );
  }
  return checkEvery( treesToCheck, currentTree );
}

function isVisibleLeft( i, j ) {
  let currentTree = treeTop[i][j];
  const treesToCheck = [];
  for ( let x = j - 1 ; x >= 0 ; x-- ) {
    treesToCheck.push( treeTop[i][x] );
  }
  return checkEvery( treesToCheck, currentTree );
}

function isVisibleTop( i, j ) {
  let currentTree = treeTop[i][j];
  const treesToCheck = [];
  for ( let x = i - 1 ; x >= 0 ; x-- ) {
    // console.log("TREE CHECKTOP: ", x, j);
    treesToCheck.push( treeTop[x][j] );
  }
  return checkEvery( treesToCheck, currentTree );
}

function isVisibleBottom( i, j ) {
  let currentTree = treeTop[i][j];
  const treesToCheck = [];
  for ( let x = i + 1 ; x < treeTop[i].length ; x++ ) {
    treesToCheck.push( treeTop[x][j] );
  }
  return checkEvery( treesToCheck, currentTree );
}

function part1() {
  let countVisibleTrees = (treeTop.length * 2) + (treeTop[0].length * 2) - 4;
  // console.log( "countVisibleTrees", countVisibleTrees );
  let loop = 1;
  for ( let i = 1 ; i <= treeTop.length - 2 ; i++ ) {
    let treeTopLine = treeTop[i];
    for ( let j = 1 ; j <= treeTopLine.length - 2 ; j++ ) {

      // console.log( "TREE: ", i, j );
      // console.log( loop++ );

      if ( isVisibleRight( i, j ) ) {
        // console.log('RIGHT', isVisibleRight( i, j ), "TREE: ", i, j);
        countVisibleTrees++;
      } else if ( isVisibleLeft( i, j ) ) {
        // console.log('LEFT', isVisibleLeft( i, j ),"TREE: ", i, j);
        countVisibleTrees++;
      } else if ( isVisibleTop( i, j ) ) {
        // console.log('TOP', isVisibleTop( i, j ),"TREE: ", i, j);
        countVisibleTrees++;
      } else if ( isVisibleBottom( i, j ) ) {
        // console.log('BOTTOM', isVisibleBottom( i, j ),"TREE: ", i, j);
        countVisibleTrees++;
      } else {
        // console.log('NOT VISIBLE');
      }
    }
  }
  console.log( "Day08-part 1. Trees with visibility: ", countVisibleTrees );
}

function part2() {

  let absoluteScenicScore = 0;
  for ( let i = 1 ; i <= treeTop.length - 2 ; i++ ) {
    for ( let j = 1 ; j <= treeTop[0].length - 2 ; j++ ) {
      let newScenicScore = 1;
      let currentTree = treeTop[i][j];

      function treesVisibleRight() {
        let treesScenicScoreRight = 0;
        let x = j + 1;
        while ( treeTop[i][x] !== undefined ) {
          treesScenicScoreRight++;
          if ( treeTop[i][x] >= currentTree ) {
            break;
          }
          x++;
        }
        return treesScenicScoreRight;
      }

      function treesVisibleLeft() {
        let treesScenicScoreLeft = 0;
        let x = j - 1;
        while ( treeTop[i][x] !== undefined ) {
          treesScenicScoreLeft++;
          if ( treeTop[i][x] >= currentTree ) {
            break;
          }
          x--;
        }
        return treesScenicScoreLeft;
      }

      function treesVisibleTop() {
        let x = i - 1;
        let treesScenicScoreTop = 0;
        while ( treeTop[i][x] !== undefined ) {
          treesScenicScoreTop++;
          if ( x <= 0 || treeTop[x][j] >= currentTree ) {
            break;
          }
          x--;
        }
        return treesScenicScoreTop;
      }

      function treesVisibleBottom() {
        let x = i + 1;
        let treesScenicScoreBottom = 0;
        while ( treeTop[i][x] !== undefined ) {
          treesScenicScoreBottom++;
          if ( treeTop[x][j] >= currentTree ) {
            break;
          }
          x++;
        }
        return treesScenicScoreBottom;
      }

      newScenicScore *= treesVisibleRight() * treesVisibleLeft() * treesVisibleTop() * treesVisibleBottom();
      if ( newScenicScore > absoluteScenicScore ) {
        absoluteScenicScore = newScenicScore;
      } else {
      }
    }
  }
    console.log( "Day08-part 2. Tree Scenic Score: ", absoluteScenicScore );
}

part1();

part2();