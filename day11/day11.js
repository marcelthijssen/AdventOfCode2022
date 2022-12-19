const fs = require( "fs" );

let route = fs.readFileSync( "day11-test.txt", { encoding: "utf-8" } ) // read .txt content
  .replace( /\r/g, "" ) // remove all \r characters to avoid issues on Windows
  .split( "\n" )
  ;

console.log( route );