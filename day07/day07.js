const fs = require( "fs" );

const terminal = fs.readFileSync( "day07-test.txt", { encoding: "utf-8" } ) // read day??.txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" ); // Remove ending whitespace

console.log( terminal );

function isFileSize( output ) {
  return /^[0-9]+$/.test( output );
}

for ( let i = 0 ; i < terminal.length ; i++ ) {

  console.log( terminal[i] );
// THIS WILL ADD ALL SIZES IN a Directory. AND AdD IT TO A ARRAY
  if ( terminal[i].includes( "$ ls" ) ) {
    let j = i;
    let totalSize = 0;

    j++;
    if ( isFileSize( terminal[j].split( " " )[0] ) ) {
      totalSize = totalSize + parseInt( terminal[j].split( " " )[0] );
      console.log( "TOTALSIZE", terminal[j], totalSize );
    } else if ( !terminal[j].includes( "$" ) ) {
      console.log( terminal[j] );
    }
  }
}