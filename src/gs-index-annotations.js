import Mirador from 'mirador/dist/es/src/index';

import annotationPlugins   from 'mirador-annotations/es';
import LocalStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter';
import SimpleAnnotationServerV2Adapter from 'mirador-annotations/es/SimpleAnnotationServerV2Adapter';

import { miradorImageToolsPlugin } from 'mirador-image-tools/es';

//
// Minimal config for a Mirador3 Viewer with an activated Annotations editor plugin
//
const minimalMiradorConfig = {
    annotation: {
	adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
	// adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
	//adapter: (canvasId) => new SimpleAnnotationServerV2Adapter(canvasId, endpointUrl),
	exportLocalStorageAnnotations: true // display annotation JSON export button
    },
    window: {
	defaultSideBarPanel: 'annotations',
	sideBarOpenByDefault: true
    }
};


export function initMirador3Viewer(divID, mainMiradorConfig) {

    if (mainMiradorConfig) {
	    
	// The following would be good when in editing mode!
/*
	if (!mainMiradorConfig.window) {
	    mainMiradorConfig.window = {
		defaultSideBarPanel: 'annotations',
		sideBarOpenByDefault: true
	    };
	}
*/
    }
    else {
	mainMiradorConfig = minimalMiradorConfig;
    }
    
    mainMiradorConfig.id = divID;

    let mirador3_viewer;
    if (mainMiradorConfig.annotation) {
	mirador3_viewer = Mirador.viewer(mainMiradorConfig, [...miradorImageToolsPlugin,...annotationPlugins]);
    }
    else {
	mirador3_viewer = Mirador.viewer(mainMiradorConfig, [...miradorImageToolsPlugin]);
    }
    
    return mirador3_viewer;
}

export { LocalStorageAdapter, SimpleAnnotationServerV2Adapter }





