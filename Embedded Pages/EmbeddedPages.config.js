tau.mashups
    .addModule('EmbeddedPages.config', function() {
        var EmbeddedPagesConfig = {
            tabs: [{
                /*Sample embedded page of the 'CustomPageUrl' Custom Field of a User Story of a Project with the 'Scrum' Process*/
                entityTypeName: 'UserStory',
                customFieldName: 'CustomPageUrl',
                processName: 'Scrum'
            },{
                /*Sample embedded page of the 'CustomPageUrl' Custom Field of a Bug of any Project*/
                entityTypeName: 'Bug',
                customFieldName: 'CustomPageUrl'				
            },{
                /*Sample embedded page of the 'CustomEmbeddedVideoUrl' Custom Field with the overridden template of the tab frame*/
                entityTypeName: 'Project',
                customFieldName: 'CustomEmbeddedVideoUrl',
                frameTemplate: '<iframe src="${url}" width="854" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
            }]
        };

        return EmbeddedPagesConfig;
    });