/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "libhpdftbl", "index.html", [
    [ "Introduction to hpdftbl", "index.html", [
      [ "What is this?", "index.html#autotoc_md7", null ],
      [ "Features", "index.html#autotoc_md9", null ],
      [ "Some Examples", "index.html#autotoc_md11", [
        [ "Example 1 - Plain table with cell labels", "index.html#autotoc_md12", null ],
        [ "Example 2 - Table with cell labels", "index.html#autotoc_md13", null ],
        [ "Example 2 - Plain table with row/column spanning and table title", "index.html#autotoc_md15", null ],
        [ "Example 3 - Table with labels and cell widgets", "index.html#autotoc_md16", null ]
      ] ]
    ] ],
    [ "Building the library", "md_Building.html", [
      [ "The short version; TL; DR", "md_Building.html#autotoc_md37", null ],
      [ "Pre-requisites", "md_Building.html#pre-req", [
        [ "Different versions of iconv on OSX", "md_Building.html#autotoc_md38", null ],
        [ "OSX native libiconv", "md_Building.html#autotoc_md39", null ],
        [ "OSX GNU port of libiconv", "md_Building.html#autotoc_md40", null ],
        [ "Troubleshooting OSX <tt>libiconv</tt>", "md_Building.html#autotoc_md41", null ]
      ] ],
      [ "Building the library from source", "md_Building.html#building-from-source", [
        [ "Rebuilding using av existing build environment", "md_Building.html#autotoc_md42", null ],
        [ "Rebuilding from a cloned repo", "md_Building.html#autotoc_md44", null ]
      ] ],
      [ "Miscellaneous", "md_Building.html#autotoc_md46", [
        [ "Some notes on Compiling for debugging", "md_Building.html#lib-debug", null ],
        [ "Some notes on updating the documentation", "md_Building.html#autotoc_md48", null ],
        [ "Some notes on Windows build", "md_Building.html#autotoc_md49", null ],
        [ "Some notes on using C or C++ to build", "md_Building.html#autotoc_md50", null ]
      ] ]
    ] ],
    [ "Getting started", "md_GettingStarted.html", [
      [ "Creating a PDF page infrastructure", "md_GettingStarted.html#autotoc_md45", null ],
      [ "Your first table", "md_GettingStarted.html#autotoc_md51", null ],
      [ "Your second table - disconnecting program structure from data", "md_GettingStarted.html#autotoc_md52", null ],
      [ "Adding a header row", "md_GettingStarted.html#autotoc_md54", null ],
      [ "Using labels in the table cells", "md_GettingStarted.html#autotoc_md55", null ],
      [ "Adding a table title", "md_GettingStarted.html#autotoc_md56", null ],
      [ "Adjusting fonts and colors", "md_GettingStarted.html#autotoc_md57", null ]
    ] ],
    [ "Adjusting the layout of the table", "md_CellAndRowSpanning.html", [
      [ "Cell and row spanning", "md_CellAndRowSpanning.html#autotoc_md10", null ],
      [ "Adjusting column width", "md_CellAndRowSpanning.html#autotoc_md14", null ]
    ] ],
    [ "Content and label callbacks", "md_ContentLabelCallbacks.html", [
      [ "Introducing content callback functions", "md_ContentLabelCallbacks.html#autotoc_md17", null ],
      [ "A content callback example", "md_ContentLabelCallbacks.html#autotoc_md19", null ]
    ] ],
    [ "Error handling", "md_ErrorHandling.html", [
      [ "Translating HPDF error codes", "md_ErrorHandling.html#autotoc_md21", null ],
      [ "Example of setting up error handler", "md_ErrorHandling.html#autotoc_md25", null ]
    ] ],
    [ "Style and font setting", "ch_styleandfontsetting.html", [
      [ "Adjusting fonts and colors", "ch_styleandfontsetting.html#sec_specifyingfontsandcolors", null ],
      [ "Using style callbacks", "ch_styleandfontsetting.html#autotoc_md43", [
        [ "Style callback example", "ch_styleandfontsetting.html#autotoc_md47", null ]
      ] ],
      [ "Using style themes", "ch_styleandfontsetting.html#sec-themes", null ],
      [ "Adjusting grid line styles", "ch_styleandfontsetting.html#sec_borderstyles", null ],
      [ "Adding zebra lines in a table", "ch_styleandfontsetting.html#autotoc_md53", null ]
    ] ],
    [ "Tables layout from data", "md_TablesFromData.html", [
      [ "Defining a table in data", "md_TablesFromData.html#autotoc_md28", null ],
      [ "A first example of defining table as data", "md_TablesFromData.html#autotoc_md35", null ],
      [ "A second example of defining a table as data", "md_TablesFromData.html#autotoc_md36", null ]
    ] ],
    [ "Widgets", "md_UsingWidgets.html", [
      [ "Overview", "md_UsingWidgets.html#autotoc_md18", [
        [ "1. Segmented horizontal bar example", "md_UsingWidgets.html#autotoc_md20", null ],
        [ "2. Horizontal bar example", "md_UsingWidgets.html#autotoc_md22", null ],
        [ "3. Signal strength meter example", "md_UsingWidgets.html#autotoc_md23", null ],
        [ "4. Radio sliding button example", "md_UsingWidgets.html#autotoc_md24", null ],
        [ "5. Boxed letters example", "md_UsingWidgets.html#autotoc_md26", null ]
      ] ],
      [ "Widget functions", "md_UsingWidgets.html#autotoc_md27", [
        [ "Segmented horizontal bar defining function", "md_UsingWidgets.html#autotoc_md29", null ],
        [ "Horizontal bar defining function", "md_UsingWidgets.html#autotoc_md30", null ],
        [ "Signal strength defining function", "md_UsingWidgets.html#autotoc_md31", null ],
        [ "Radio sliding button defining function", "md_UsingWidgets.html#autotoc_md32", null ],
        [ "Boxed letters defining function", "md_UsingWidgets.html#autotoc_md33", null ]
      ] ],
      [ "Usage", "md_UsingWidgets.html#autotoc_md34", null ]
    ] ],
    [ "HPDFTBL API Overview", "md_APIOverview.html", [
      [ "Table creation related functions", "md_APIOverview.html#autotoc_md59", null ],
      [ "Table error handling", "md_APIOverview.html#autotoc_md60", null ],
      [ "Theme handling methods", "md_APIOverview.html#autotoc_md61", null ],
      [ "Table layout adjusting functions", "md_APIOverview.html#autotoc_md62", null ],
      [ "Table style modifying functions", "md_APIOverview.html#autotoc_md63", null ],
      [ "Content handling", "md_APIOverview.html#autotoc_md64", null ],
      [ "Callback handling", "md_APIOverview.html#autotoc_md65", null ],
      [ "Text encoding", "md_APIOverview.html#autotoc_md66", null ],
      [ "Misc utility function", "md_APIOverview.html#autotoc_md67", null ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", null ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"hpdftbl_8h.html#aba528c256747e75c1166acdd76864e14",
"structtext__style.html#a619758665ef84d588ff83b68aedca64b"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';