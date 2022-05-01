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
      [ "What is this?", "index.html#autotoc_md9", null ],
      [ "Features", "index.html#autotoc_md11", null ],
      [ "Some Examples", "index.html#autotoc_md19", [
        [ "Example 1 - Plain table with cell labels", "index.html#autotoc_md21", null ],
        [ "Example 2 - Table with cell labels", "index.html#autotoc_md23", null ],
        [ "Example 2 - Plain table with row/column spanning and table title", "index.html#autotoc_md25", null ],
        [ "Example 3 - Table with labels and cell widgets", "index.html#autotoc_md30", null ]
      ] ]
    ] ],
    [ "Building the library", "md__building.html", [
      [ "The short version", "md__building.html#autotoc_md32", [
        [ "Compiling the tar ball", "md__building.html#autotoc_md35", null ],
        [ "Compiling after cloning the git repo", "md__building.html#autotoc_md49", null ]
      ] ],
      [ "Pre-requisites", "md__building.html#autotoc_md50", null ],
      [ "Different versions of iconv on OSX", "md__building.html#autotoc_md51", [
        [ "OSX native libiconv", "md__building.html#autotoc_md52", null ],
        [ "OSX GNU port of libiconv", "md__building.html#autotoc_md53", null ],
        [ "Troubleshooting OSX <tt>libiconv</tt>", "md__building.html#autotoc_md54", null ]
      ] ],
      [ "Building the library from source", "md__building.html#autotoc_md55", [
        [ "Rebuilding using a existing build environment", "md__building.html#autotoc_md57", null ],
        [ "Rebuilding from the cloned repo", "md__building.html#autotoc_md58", null ]
      ] ],
      [ "Some notes on Windows build", "md__building.html#autotoc_md60", null ],
      [ "Using C or C++ to build", "md__building.html#autotoc_md62", null ]
    ] ],
    [ "Getting started", "md__getting_started.html", [
      [ "Creating a PDF page infrastructure", "md__getting_started.html#autotoc_md61", null ],
      [ "Your first table", "md__getting_started.html#autotoc_md63", null ],
      [ "Your second table - disconnecting program structure from data", "md__getting_started.html#autotoc_md64", null ],
      [ "Adding a header row", "md__getting_started.html#autotoc_md65", null ],
      [ "Using labels in the table cells", "md__getting_started.html#autotoc_md66", null ],
      [ "Adding a table title", "md__getting_started.html#autotoc_md67", null ],
      [ "Adjusting fonts and colors", "md__getting_started.html#autotoc_md68", null ]
    ] ],
    [ "Adjusting the layout of the table", "md__cell_and_row_apnning.html", [
      [ "Cell and row spanning", "md__cell_and_row_apnning.html#autotoc_md12", null ],
      [ "Adjusting column width", "md__cell_and_row_apnning.html#autotoc_md14", null ]
    ] ],
    [ "Content and label callbacks", "md__content_label_callbacks.html", [
      [ "Introducing content callback functions", "md__content_label_callbacks.html#autotoc_md18", null ],
      [ "A content callback example", "md__content_label_callbacks.html#autotoc_md29", null ]
    ] ],
    [ "Error handling", "md__error_handling.html", [
      [ "Translating HPDF error codes", "md__error_handling.html#autotoc_md36", null ],
      [ "Example of setting up error handler", "md__error_handling.html#autotoc_md44", null ]
    ] ],
    [ "Style and font setting", "ch_styleandfontsetting.html", [
      [ "Adjusting fonts and colors", "ch_styleandfontsetting.html#sec_specifyingfontsandcolors", null ],
      [ "Using style callbacks", "ch_styleandfontsetting.html#autotoc_md56", [
        [ "Style callback example", "ch_styleandfontsetting.html#autotoc_md59", null ]
      ] ],
      [ "Using style themes", "ch_styleandfontsetting.html#sec_themes", null ],
      [ "Adjusting grid line styles", "ch_styleandfontsetting.html#sec_borderstyles", null ]
    ] ],
    [ "Tables layout from data", "md__tables_from_data.html", [
      [ "Defining a table in data", "md__tables_from_data.html#autotoc_md41", null ],
      [ "A first example of defining table as data", "md__tables_from_data.html#autotoc_md47", null ],
      [ "A second example of defining a table as data", "md__tables_from_data.html#autotoc_md48", null ]
    ] ],
    [ "Widgets", "md__using_widgets.html", [
      [ "Overview", "md__using_widgets.html#autotoc_md20", [
        [ "1. Segmented horizontal bar example", "md__using_widgets.html#autotoc_md24", null ],
        [ "2. Horizontal bar example", "md__using_widgets.html#autotoc_md26", null ],
        [ "3. Signal strength meter example", "md__using_widgets.html#autotoc_md28", null ],
        [ "4. Radio sliding button example", "md__using_widgets.html#autotoc_md31", null ],
        [ "5. Boxed letters example", "md__using_widgets.html#autotoc_md33", null ]
      ] ],
      [ "Widget functions", "md__using_widgets.html#autotoc_md34", [
        [ "Segmented horizontal bar defining function", "md__using_widgets.html#autotoc_md37", null ],
        [ "Horizontal bar defining function", "md__using_widgets.html#autotoc_md39", null ],
        [ "Signal strength defining function", "md__using_widgets.html#autotoc_md42", null ],
        [ "Radio sliding button defining function", "md__using_widgets.html#autotoc_md43", null ],
        [ "Boxed letters defining function", "md__using_widgets.html#autotoc_md45", null ]
      ] ],
      [ "Usage", "md__using_widgets.html#autotoc_md46", null ]
    ] ],
    [ "HPDFTBL API Overview", "md__a_p_i_overview.html", [
      [ "Table creation related functions", "md__a_p_i_overview.html#autotoc_md10", null ],
      [ "Table error handling", "md__a_p_i_overview.html#autotoc_md13", null ],
      [ "Theme handling methods", "md__a_p_i_overview.html#autotoc_md15", null ],
      [ "Table layout adjusting functions", "md__a_p_i_overview.html#autotoc_md16", null ],
      [ "Table style modifying functions", "md__a_p_i_overview.html#autotoc_md17", null ],
      [ "Content handling", "md__a_p_i_overview.html#autotoc_md22", null ],
      [ "Callback handling", "md__a_p_i_overview.html#autotoc_md27", null ],
      [ "Text encoding", "md__a_p_i_overview.html#autotoc_md38", null ],
      [ "Misc utility function", "md__a_p_i_overview.html#autotoc_md40", null ]
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
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
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
"md__using_widgets.html#autotoc_md24"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';