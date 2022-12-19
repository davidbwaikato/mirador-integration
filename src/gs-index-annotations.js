import Mirador from 'mirador/dist/es/src/index';

import annotationPlugins from 'mirador-annotations/es';
import LocalStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter';
//import AnnototAdapter from 'mirador-annotations/es/AnnototAdapter';

//const endpointUrl = 'http://127.0.0.1:3000/annotations';

const config = {
  annotation: {
    adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
    // adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
    exportLocalStorageAnnotations: true, // display annotation JSON export button
  },
  id: 'mirador3-viewer',
  window: {
    defaultSideBarPanel: 'annotations',
    sideBarOpenByDefault: true,
  },
  windows: [{
    loadedManifest: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
  }],
};


export function initMirador3Viewer() {
    
    let mirador3_viewer = Mirador.viewer(config, [...annotationPlugins]);

    return mirador3_viewer;
}






