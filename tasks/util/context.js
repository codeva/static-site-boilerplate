var Path = require( "path" );
var Fs = require( "fs" );
var Async = require( "async" );

var rootDirectory = process.cwd();

exports.readContext = function() {
  context = require( Path.join( rootDirectory, "context.json" ) );
  if ( context.pages ) {
    readArticles( context.pages );
  }
  return context;
}

var readArticles = function( pages ) {
  Async.eachSeries(
    pages,
    function( page, cb ) {
      if ( page.article && page.article.path ){
        page.article.content = Fs.readFileSync( Path.join( rootDirectory, page.article.path ) );
      }
      cb();
    },
    function( err ){
      if( err ) {
        throw new Error( err );
      }
    }
  );
}
