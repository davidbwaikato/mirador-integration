import Mirador from 'mirador/dist/es/src/index';

import annotationPlugins   from 'mirador-annotations/es';
import LocalStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter';
//import AnnototAdapter from 'mirador-annotations/es/AnnototAdapter';

//const endpointUrl = 'http://127.0.0.1:3000/annotations';

//
// Minimal config for a Mirador3 Viewer with an activated Annotations editor plugin
//
const minimalMiradorConfig = {
    annotation: {
	adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
	// adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
	exportLocalStorageAnnotations: true // display annotation JSON export button
    },
    //id: 'mirador3-viewer',
    window: {
	defaultSideBarPanel: 'annotations',
	sideBarOpenByDefault: true
    },
    //windows: [{
//	loadedManifest: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
    //}],
};


export function initMirador3Viewer(divID, mainMiradorConfig) {

    if (mainMiradorConfig) {
	mainMiradorConfig.annotation = {
	    adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
	    // adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
	    exportLocalStorageAnnotations: true, // display annotation JSON export button
	};
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
    
    //mainMiradorConfig.windows =  [{
//	//loadedManifest: 'https://iiif.harvardartmuseums.org/manifests/object/299843'
//	loadedManifest: manifestURL
  //  }];    
	    
    let mirador3_viewer = Mirador.viewer(mainMiradorConfig, [...annotationPlugins]);

    return mirador3_viewer;
}






