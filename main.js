/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */


/** Simple extension that adds "File > Insert HTML Skeleton" and "File > Insert CSS Skeleton" menu items. 
Inserts  at cursor pos. */
define(function (require, exports, module) {
    "use strict";

    let CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager  = brackets.getModule("editor/EditorManager"),
        Menus          = brackets.getModule("command/Menus"),
        stringHTML     = "This is going to be the HTML skeleton.",  // TODO: Provide actual HTML Skeleton
        stringCSS      = "This is going to be the CSS skeleton.";   // TODO: Provide actual CSS Skeleton
        
    
    // Function to run when the menu item is clicked
    function insertSkeleton() {
        let editor = EditorManager.getFocusedEditor();
        if (editor) {
            let insertionPos = editor.getCursorPos();
            editor.document.replaceRange(stringHTML, insertionPos);
        }
    }
    let insertHTML = insertSkeleton(stringHTML);
    let insertCSS  = insertSkeleton(stringCSS);
    
    // First, register a command - a UI-less object associating an id to a handler.
    // Use package-style naming to avoid collisions
    const COMMAND_ID_HTML = "greleton.insertHTML";
    const COMMAND_ID_CSS  = "greleton.insertCSS";     
    
    CommandManager.register("Insert HTML skeleton", COMMAND_ID_HTML, insertSkeleton); 
    CommandManager.register("Insert CSS skeleton" , COMMAND_ID_CSS,  insertSkeleton); 

    // Then create  menue items bound to the commands
    // The label of the menu items is the name we gave the command (see above)
    const menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    menu.addMenuItem(COMMAND_ID_HTML);
    menu.addMenuItem(COMMAND_ID_CSS);
    
    // We could also add a key binding at the same time:
    //menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-W");
    // (Note: "Ctrl" is automatically mapped to "Cmd" on Mac)
});



// FUTURE: Set document highlighting to .css or .html, accordingly.
// FUTURE: Add settings allowing for individualized template-skeletons













