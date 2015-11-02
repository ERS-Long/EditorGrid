define([
	'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',	
	'dstore1/Memory',
	'dstore1/Trackable',
	'dstore1/Tree',
	'dgrid1/Grid',
	'dgrid1/Keyboard',
	'dgrid1/Selection',
	'dgrid1/Tree',
	'dgrid1/extensions/Pagination',
	'dgrid1/extensions/DijitRegistry',
	'dgrid1/extensions/DnD',
	'dgrid1/Editor',
	'dgrid1/extensions/ColumnHider',
	'dgrid1/extensions/ColumnReorder',
	'dgrid1/extensions/ColumnResizer',
	'dojo/text!./EditorGrid/templates/EditorGrid.html',
	'xstyle/css!./EditorGrid/css/EditorGrid.css'
], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Memory, Trackable, TreeStoreMixin, Grid, Keyboard, Selection, Tree, Pagination, 
	DijitRegistry, DnD, Editor, ColumnHider, ColumnReorder, ColumnResizer, template, css) {

	return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {	
		name: 'EditorGrid',
        widgetsInTemplate: true,
        templateString: template,
        map: true,

        postCreate: function(){
            this.inherited(arguments);
            map = this.map;

			console.log("in the editorgrid");

			var store = new (declare([Memory, Trackable, TreeStoreMixin]))({
				data: createData()
			});
			
			console.log(store);

			// Instantiate grid
			var grid = new (declare([Grid, Keyboard, Selection, Tree, Pagination, DijitRegistry, DnD, Editor, ColumnHider, ColumnReorder, ColumnResizer]))({
				collection: store,
				columns: {
					First_Name: {
						label: 'First Name',
						editor: 'text',
						editOn: 'dblclick',
						autoSave: true,
						renderExpando: true
					},
					Last_Name: {
						label: 'Last Name'
					},
					test: {
						label: 'test'
					}
				}
			}, 'editorgrid');


			var currentPane = dojo.byId('editorGrid_parent_pane');
			console.log(currentPane);

			console.log(dojo.byId('editorgrid'));

			currentPane.appendChild(grid.domNode);
		//	grid.resize();
			grid.startup();

			function createData () {
				var data = [];
				var column;
				var i;
				for (i = 0; i < 50; i++) {
					console.log("in the editorgrid loop " + i);
					data.push({});
					for (column in { First_Name: 1, Last_Name: 1, test: 1 }) {
						data[i].id = i;
						data[i][column] = column + '_' + (i + 1);
					}
					if (i > 1) {
						data[i].hasChildren = false;
						data[i].parent = i % 2;
					}
				}
				return data;
			}

        },
	});
});
