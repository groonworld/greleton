/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */


/* Simple extension which adds "File > Insert HTML Skeleton" and "File > Insert CSS Skeleton" menu items. */

/*********************************************************************************
 *                                                                               *
 * TO DO:                                                                        *
 *                                                                               *
 * FUTURE: Set document syntax highlighting to CSS or HTML, accordingly.         * -> currently working on this
 * FUTURE: Make it so the menu item both creates a new doc and fills it with     *
 *         the template code.                                                    *
 * FUTURE: Add settings to allow users to individualize their template-skeletons *
 *                                                                               *
 *********************************************************************************/


define(function (require, exports, module) {
    "use strict";

    let CommandManager = brackets.getModule("command/CommandManager");
    let EditorManager  = brackets.getModule("editor/EditorManager");
    let Menus          = brackets.getModule("command/Menus");
    let docCounter     = 1;
    let stringHTML     = "<!DOCTYPE html>\n" +
                         " \n" +
                         "<html lang=\"de\">\n" +
                         "    <head>\n" +
                         "        <title>Project Title</title>\n" +
                         " \n" +
                         "        <meta charset=\"UTF-8\">\n" +
                         "        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                         "        <meta name=\"description\" content=\"Description goes here.\">\n" +
                         "        <meta name=\"keywords\" content=\"keyword1, keyword2, keyword3\">\n" +
                         "        <meta name=\"author\" content=\"@Groonworld\">\n" +
                         "        <meta name=\"copyright\" content=\"@Groonworld\">\n" +
                         " \n" +
                         "        <link type=\"text/css\" rel=\"stylesheet\" href=\"style.css\">\n" +
                         "    </head>\n" +
                         "    <body>\n" +
                         "        <div class=\"wrapper-grid\">\n" +
                         " \n" +
                         "        </div>\n" +
                         "    </body>\n" +
                         "</html>";

    let stringCSS      = "/*===================*/\n" +
                         "/*    BASIC SETUP    */\n" +
                         "/*===================*/\n" +
                         " \n" +
                         ":root {\n" +
                         "    --main-color: ##e67e22; // orange\n" +
                         "    --main-darkshade: #cf6d17; // slightly darker shade of main\n" +
                         "    --text-color: #555;\n" +
                         "}\n" +
                         " \n" +
                         "* {\n" +
                         "       margin: 0;\n" +
                         "       padding: 0;\n" +
                         "       box-sizing: border-box;\n" +
                         "}\n" +
                         " \n" +
                         " html, body {\n" +
                         "       background: #fff;\n" +
                         "       color: var(--text-color);\n" +
                         "       font-family: 'Lato', 'Arial', sans-serif;\n" +
                         "       font-weight: 300;\n" +
                         "       font-size: 20px;\n" +
                         "       text-rendering: optimizeLegibility;\n" +
                         "       overflow-x: hidden;\n" +
                         "}\n" +
                         " \n" +
                         "/*===========================*/\n" +
                         "/*    REUSABLE COMPONENTS    */\n" +
                         "/*===========================*/\n" +
                         " \n" +
                         "/*-----Headings-----*/\n" +
                         "h1, h2, h3 {\n" +
                         "    font-weight: 300;\n" +
                         "    text-transform: uppercase;\n" +
                         "}\n" +
                         " \n" +
                         "h1 {\n" +
                         "    margin-top: 0;\n" +
                         "    margin-bottom: 1rem;\n" +
                         "    color: #fff;\n" +
                         "    font-size: 2.5rem;\n" +
                         "    word-spacing: 6px;\n" +
                         "    letter-spacing: 2px;\n" +
                         "}\n" +
                         " \n";                             
   
    
    // Functions to run when the menu item is clicked
    function insertHTML() {
        let editor = EditorManager.getFocusedEditor();
        if (editor) {
            editor.document.setText(stringHTML);
        }
    }
    
    function insertCSS() {
        let editor = EditorManager.getFocusedEditor();
        if (editor) {
            editor.document.setText(stringCSS);
        }
    }
 
    
    // First, register a command - a UI-less object associating an id to a handler.
    // Use package-style naming to avoid collisions
    const COMMAND_ID_HTML = "greleton.insertHTML";
    const COMMAND_ID_CSS  = "greleton.insertCSS";     
    
    CommandManager.register("Insert HTML skeleton", COMMAND_ID_HTML, insertHTML); 
    CommandManager.register("Insert CSS skeleton" , COMMAND_ID_CSS,  insertCSS); 

    // Then create  menue items bound to the commands
    // The label of the menu items is the name we gave the command (see above)
    const menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    menu.addMenuDivider();
    menu.addMenuItem(COMMAND_ID_HTML);
    menu.addMenuItem(COMMAND_ID_CSS);    
});

