/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'webapp.Application',

    name: 'webapp',

    requires: [
        // This will automatically load all classes in the webapp namespace
        // so that application classes do not need to require each other.
        'webapp.*'
    ],

    // The name of the initial view to create.
    //mainView: 'webapp.view.main.Main'
});
