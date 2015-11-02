# EditorGrid
Test Widget for CMV for study purpose

Looks like ESRI js dont incldue all the most current dgrid component, so we need to inculde the packages by ourself

I renamed the dgrid and dstore to dgrid1 and dstore1, so it wont interfere with those included in ESRI's package

            var dojoConfig = {
                async: true,
                packages: [{
                    name: 'viewer',
                    location: location.pathname.replace(/[^\/]+$/, '') + 'js/viewer'
                },{
                    name: 'config',
                    location: location.pathname.replace(/[^\/]+$/, '') + 'js/config'
                },{
                    name: 'gis',
                    location: location.pathname.replace(/[^\/]+$/, '') + 'js/gis'
                },{
                    name: 'widgets',
                    location: location.pathname.replace(/[^\/]+$/, '') + './widgets'
                }
                ,{
                    name: 'dgrid1',
                    location: '//cdn.rawgit.com/SitePen/dgrid/v0.4.0'
                },
                {
                    name: 'dstore1',
                    location: '//cdn.rawgit.com/SitePen/dstore/v1.0.0'
                }
                ]
            };


in the EditorGrid.js, we reference dgrid1 and dstore1

This test widget added the editor grid to the content pane, so we need to add the following code in the EditorGrid.js
(we will need to figure out a better way to do it later)

			var currentPane = dojo.byId('editorGrid_parent');
			currentPane.appendChild(grid.domNode);


then in the viewer.js file

add the widget, 

            editorGrid: {
                include: true,  
                id: 'editorGrid',
                type: 'titlePane',
                canFloat: true,
                title: '<i class="icon-large icon-road"></i>&nbsp;&nbsp;Editor Grid',
                path: 'widgets/EditorGrid',
                position: 23,
                open: true,
                options: {
                    map: true,
                }
            },   
            
if you uss different id, then you need to change the following line of code accrodingly.
			var currentPane = dojo.byId('editorGrid_parent');
