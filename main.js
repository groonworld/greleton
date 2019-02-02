/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */


/* Simple extension which adds "File > Insert HTML Skeleton" and "File > Insert CSS Skeleton" menu items. Haven't yet figured out how to insert text on multiple lines. */

/*********************************************************************************
 *                                                                               *
 * TO DO: Figure out how to make the inserted strings span multiple lines.       *   
 * This extension is quite useless until that works.                             *
 *                                                                               *
 * FUTURE: Set document syntax highlighting to CSS or HTML, accordingly.         *
 * FUTURE: Add settings to allow users to individualize their template-skeletons *
 *                                                                               *
 *********************************************************************************/


define(function (require, exports, module) {
    "use strict";

    let CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus"),
        stringHTML     = ["<!DOCTYPE html>", 
                          "<html lang=\"de\">"], //currently trying to get this to span multiple lines.
        stringCSS      = "This is where the CSS skeleton is going to be.";   // TODO: Provide actual CSS Skeleton
        
    
    // Functions to run when the menu item is clicked
    function insertHTML() {
        console.log("1. insertHMTL() has been called.")
        let editor = EditorManager.getFocusedEditor();
        if (editor) {
            let insnPos = {line: 0, ch: 0};
            
            console.log("2. " + insPos);
            console.log("3. " + stringHTML);
            for (var i = 0; i < stringHTML.length; i++) {
                console.log("4. i: " + i);
                insPos.line = i + 5;
                console.log("5. " + stringHTML[i] + ", Line:" + insPos.line);
                editor.document.replaceRange(stringHTML[i], insPos, insPos);
            };
        }
    }
    
    function insertCSS() {
        let editor = EditorManager.getFocusedEditor();
        if (editor) {
            let insPos = {line: 0, ch: 0};
            editor.document.replaceRange(stringCSS, insPos);
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
    menu.addMenuItem(COMMAND_ID_HTML);
    menu.addMenuItem(COMMAND_ID_CSS);
    
    // We could also add a key binding at the same time:
    //menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-W");
    // (Note: "Ctrl" is automatically mapped to "Cmd" on Mac)
});













