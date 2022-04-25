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
      [ "Features", "index.html#autotoc_md12", null ],
      [ "Some Examples", "index.html#autotoc_md14", [
        [ "Example 1 - Plain table with cell labels", "index.html#autotoc_md17", null ],
        [ "Example 2 - Table with cell labels", "index.html#autotoc_md18", null ],
        [ "Example 2 - Plain table with row/column spanning and table title", "index.html#autotoc_md19", null ],
        [ "Example 3 - Table with labels and cell widgets", "index.html#autotoc_md21", null ]
      ] ]
    ] ],
    [ "Building the library", "md__building.html", [
      [ "The short version", "md__building.html#autotoc_md32", [
        [ "Compiling the tar ball", "md__building.html#autotoc_md35", null ],
        [ "Compiling after cloning the git repo", "md__building.html#autotoc_md36", null ]
      ] ],
      [ "Pre-requisites", "md__building.html#autotoc_md38", null ],
      [ "Different versions of iconv on OSX", "md__building.html#autotoc_md40", [
        [ "OSX native libiconv", "md__building.html#autotoc_md42", null ],
        [ "OSX GNU port of libiconv", "md__building.html#autotoc_md43", null ],
        [ "Troubleshooting OSX <tt>libiconv</tt>", "md__building.html#autotoc_md45", null ]
      ] ],
      [ "Building the library from source", "md__building.html#autotoc_md46", [
        [ "Rebuilding using a build environment", "md__building.html#autotoc_md47", null ],
        [ "Rebuilding from the cloned repo", "md__building.html#autotoc_md49", null ]
      ] ],
      [ "Some notes on Windows build", "md__building.html#autotoc_md50", null ],
      [ "Using C or C++ to build", "md__building.html#autotoc_md51", null ]
    ] ],
    [ "Getting started", "md__getting_started.html", [
      [ "Creating a PDF page infrastructure", "md__getting_started.html#autotoc_md52", null ],
      [ "Your first table", "md__getting_started.html#autotoc_md53", null ],
      [ "Your second table - disconnecting program structure from data", "md__getting_started.html#autotoc_md54", null ],
      [ "Adding a header row", "md__getting_started.html#autotoc_md55", null ],
      [ "Using labels in the table cells", "md__getting_started.html#autotoc_md56", null ],
      [ "Adding a table title", "md__getting_started.html#autotoc_md57", null ],
      [ "Adjusting fonts and colors", "md__getting_started.html#autotoc_md58", null ]
    ] ],
    [ "Adjusting the layout of the table", "md__cell_and_row_apnning.html", [
      [ "Cell and row spanning", "md__cell_and_row_apnning.html#autotoc_md16", null ],
      [ "Adjusting column width", "md__cell_and_row_apnning.html#autotoc_md22", null ]
    ] ],
    [ "Content and label callbacks", "md__content_label_callbacks.html", [
      [ "Introducing content callback functions", "md__content_label_callbacks.html#autotoc_md24", null ],
      [ "A content callback example", "md__content_label_callbacks.html#autotoc_md28", null ]
    ] ],
    [ "Error handling", "md__error_handling.html", [
      [ "Translating HPDF error codes", "md__error_handling.html#autotoc_md27", null ],
      [ "Example of setting up error handler", "md__error_handling.html#autotoc_md30", null ]
    ] ],
    [ "Style and font setting", "md__font_and_style.html", [
      [ "Specifying fonts and colors", "md__font_and_style.html#autotoc_md33", null ],
      [ "Using style callbacks", "md__font_and_style.html#autotoc_md37", [
        [ "Style callback example", "md__font_and_style.html#autotoc_md44", null ]
      ] ],
      [ "Using style themes", "md__font_and_style.html#autotoc_md48", null ]
    ] ],
    [ "Tables layout from data", "md__tables_from_data.html", [
      [ "Defining a table in data", "md__tables_from_data.html#autotoc_md34", null ],
      [ "A first example of defining table as data", "md__tables_from_data.html#autotoc_md39", null ],
      [ "A second example of defining a table as data", "md__tables_from_data.html#autotoc_md41", null ]
    ] ],
    [ "Using Widgets", "md__using_widgets.html", null ],
    [ "HPDFTBL API Overview", "md__a_p_i_overview.html", [
      [ "Table creation related functions", "md__a_p_i_overview.html#autotoc_md11", null ],
      [ "Table error handling", "md__a_p_i_overview.html#autotoc_md13", null ],
      [ "Theme handling methods", "md__a_p_i_overview.html#autotoc_md15", null ],
      [ "Table layout adjusting functions", "md__a_p_i_overview.html#autotoc_md20", null ],
      [ "Table style modifying functions", "md__a_p_i_overview.html#autotoc_md23", null ],
      [ "Content handling", "md__a_p_i_overview.html#autotoc_md25", null ],
      [ "Callback handling", "md__a_p_i_overview.html#autotoc_md26", null ],
      [ "Text encoding", "md__a_p_i_overview.html#autotoc_md29", null ],
      [ "Misc utility function", "md__a_p_i_overview.html#autotoc_md31", null ]
    ] ],
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
"structhpdftbl.html#a5e5a45626c52978e134fe29dccae8b15"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';