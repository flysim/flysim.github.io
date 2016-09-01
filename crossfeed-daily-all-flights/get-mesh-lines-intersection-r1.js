

	var raycaster;
	var mouse;
	var particle;


	function initGetMeshLinesIntersection() {


//		raycaster = new THREE.Raycaster();
//		mouse = new THREE.Vector2();

		renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
		renderer.domElement.addEventListener( 'touchstart', onDocumentTouchStart, false ); // for mobile

	}


	function onDocumentTouchStart( event ) {

		event.preventDefault();

		event.clientX = event.touches[0].clientX;
		event.clientY = event.touches[0].clientY;

		onDocumentMouseDown( event );

	}

	function onDocumentMouseDown( event ) {

//		var intersects, intersect, face, intersected;

		event.preventDefault();

		mouse = new THREE.Vector2();
		mouse.x = ( event.clientX / renderer.domElement.width ) * 2 - 1;
		mouse.y = - ( event.clientY / renderer.domElement.height ) * 2 + 1;

// scene.updateMatrixWorld();

		raycaster = new THREE.Raycaster();

		raycaster.setFromCamera( mouse, camera );
		raycaster.linePrecision = 5;

		intersects = raycaster.intersectObjects( placards, true );

		if ( intersects.length > 0 ) {

//console.log( '', event );

			intersect = intersects[ 0 ];
//			face = intersect.face;
//			intersected = intersect.object;

//console.log( 'interescts[0]', intersect );

//			particle.position.copy( intersect.point );

//			altitudeDetails.setAttribute('open', 'open');

			flightData.innerHTML =

				'callsign: ' + intersect.object.parent.userData.fid.callsign + b +
				'model: ' + intersect.object.parent.userData.fid.model + b +
				'waypoints: ' + intersect.object.parent.userData.fid.coordinates.length + b +

			b;


		} else {

			intersected = null;

			document.body.style.cursor = 'auto';

		}

	}
