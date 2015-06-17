var Path = require( "path" );
var Fs = require( "fs" );
var Async = require( "async" );
var Markdown = require( "markdown").markdown;

var rootDirectory = process.cwd();

exports.readContext = function() {
  context = require( Path.join( rootDirectory, "context.json" ) );
  if ( context.pages ) {
    readArticles( context.pages );
  }
  return context;
}

var readArticles = function( pages ) {
  for (var key in pages) {
    if (pages.hasOwnProperty(key)) {
      page = pages[key];
      if ( page.article && page.article.path ){
        page.article.content = Fs.readFileSync( Path.join( rootDirectory, page.article.path )).toString();
        if ( endsWith( page.article.path, ".md" ) ) {
          page.article.content = Markdown.toHTML( page.article.content );
        }
      }
    }
  }
}

var endsWith = function( str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
