

	var raycaster;
	var mouse;
	var particle;

	function getMenuDetailsFlights() {

		var particleMaterial;

		menuDetailsAltitude =


				'<details id=flightsStatistics open >' +

					'<summary><h3>Flights Statistics</h3></summary>' +

					'<p id=flightsStats ></p>' +
					'<p id=flightData >When you click on a flight, position and altitude details appear here. Clicking on the line is tricky.</p>' +

				'</details>' + 

		b;

		return menuDetailsAltitude;

	}


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

		var intersects, intersect, face, intersected;

		event.preventDefault();

		mouse = new THREE.Vector2();
		mouse.x = ( event.clientX / renderer.domElement.width ) * 2 - 1;
		mouse.y = - ( event.clientY / renderer.domElement.height ) * 2 + 1;

// scene.updateMatrixWorld();

		raycaster = new THREE.Raycaster();

		raycaster.setFromCamera( mouse, camera );
		raycaster.linePrecision = 5;

		intersects = raycaster.intersectObjects( flights.children, true );

		if ( intersects.length > 0 ) {

console.log( '', event );

			intersect = intersects[ 0 ];
//			face = intersect.face;
//			intersected = intersect.object;

console.log( 'interescts[0]', intersect );

//			particle.position.copy( intersect.point );

//			altitudeDetails.setAttribute('open', 'open');

			flightData.innerHTML =

				'callsign: ' + intersect.object.userData.fid.callsign + b +
				'model: ' + intersect.object.userData.fid.model + b +
				'waypoints: ' + intersect.object.userData.fid.coordinates.length + b +

			b;


		} else {

			intersected = null;

			document.body.style.cursor = 'auto';

		}

	}
