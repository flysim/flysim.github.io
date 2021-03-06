<span style=display:none; >[You are now in a GitHub source code view - click this link to view Read Me file as a web page]
( http://flysim.github.io/#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='http://github.com/flysim/flysim.github.io/tree/master/'; 
value='You are now in a GitHub web page view - Click this button to view this read me file as source code' >


[flySim Read Me]( http://flysim.github.io/#readme.md )
===

## Concept

Flight simulators are often proprietary - but not always (thank you Flight Gear ) - and always ponderous programs that you have to download and install.

Wouldn't it be nice for you to be able to create, edit and share flight simulators that are quite easy to code, easy to host and work in your browser

The project will take time to create. In the meantime we will build applets that are stepping stones toward the larger goals.

### flySim Globe

* Display the Earth as a Globe
	* offer a variety of terrain and overlay options
* Enables you to see quickly who flew when and where on what
	* Helps you identify popular and new destinations


### flySim unFlatland

* Planar maps with 3D terrain
* Display the vicinity of selected airports
* Includes ILS, STAR and waypoints data
* Historical data
* Real-time data

### Standard Options

* All maps to have at least three versions - possibly more
	* Historical data - all flights in a day
	* Historical data - replay
	* Real-time data
* Create your own 3D terrain 
	* Any latitude and longitude
	* Select terrain to cover
* Select choice of terrain and overlays
	* Current versions having issues with terrain suppliers that do not support HTTPS
	* Some suppliers may have to be dropped
	* The terrain overlays involve many hundreds of bitmaps.
		* The first time you load a map, the results may be incomplete. 
		* Reloading the web page can really help
* Import your CSV, or KML data
	* Create, edit and share your own flight paths
* Multiple types of camera actions
	* First person controls
		* Enable you to fly your own models
	* Other camera actions control the view you view replays
* Select choice of aircraft models
	* From FGx aircraft
	* Others?
* Physics
	* So you can bump into mountains
* Inflight navigation aids
	* Current versions include a ghostly heading or bearing indicator at top right of screen
	* North is toward the top of the screen
	* Roll, pitch and yaw to be added
* All code is written beginner to middle level coding skills 
	* All pure JavaScript
	* Embeds easily into your existing templates


## Mission

A place for:

* Being able to create, edit fly and replay things in 3D in your browser - all FOSS.
* Having a supportive group of peeps that produce cool updates in a timely manner
* Designing tools coded and created by the group that do things like help with housekeeping, promotion and communication. 


### Vision

* Enable you to program your own simulators
	* Any location on earth
	* Any model - from drone to deathstar
	* Any flight path


## Thanks

* @GeoffMcl for [FGx Crossfeed Dailies]( https://github.com/fgx/crossfeed-dailies )
* @Peteffs for [Free Flight Sim]( https://github.com/freeflightsim )
* Hazuki Amamiya for [FlightGear Tracker]( http://mpserver15.flightgear.org/modules/fgtracker/ )


## full screen: [Globe Crossfeed Inflight]( http://flysim.github.io/globe-crossfeed-inflight/ )


<img src="" style=display:none; width=800 >

<iframe src=http://flysim.github.io/globe-crossfeed-inflight/ width=100% height=600px onload=this.contentWindow.controls.enableZoom=false; ></iframe>

_Globe Crossfeed Inflight_

The aircraft flying right now



## full screen: [Globe Crossfeed Daily All Flights]( https://flysim.github.io/globe-crossfeed-daily-all-flights/ )


<img src="https://cloud.githubusercontent.com/assets/547626/18041644/ee0df882-6d6f-11e6-8592-d62439c5bf36.png" style=display:none; width=800 >

<iframe src=http://flysim.github.io/globe-crossfeed-daily-all-flights/ width=100% height=600px onload=this.contentWindow.controls.enableZoom=false; ></iframe>

_Globe Crossfeed Daily All Flights_

All the flights that occurred on the selected day displayed all at once.



## full screen: [Globe Crossfeed Daily Replay]( https://flysim.github.io/globe-crossfeed-daily-replay/ )


<img src="https://cloud.githubusercontent.com/assets/547626/18229175/05e1ea42-7223-11e6-97af-40adf68a42d6.png" style=display:none; width=800 >

<iframe src=https://flysim.github.io/globe-crossfeed-daily-replay/ width=100% height=600px onload=this.contentWindow.controls.enableZoom=false; ></iframe>

_Globe Crossfeed Daily Replay_

A replay of the days flying activities.



## Links of Interest

* https://fgx.github.io/crossfeed-dailies/html/20160829.htm#mod.time

### locations for public announcements

Possible locations for submitting notices of product updates

* [Board index ‹ FlightGear ‹ Multiplayer events]( https://forum.flightgear.org/viewforum.php?f=10
* http://wiki.flightgear.org/Links
* https://www.reddit.com/r/flightsim/
* http://www.avsim.com/
* http://www.flightsim.com/


## Copyright and License

* Copyright &copy; 2015 flySim authors
* MIT license




## Change Log

### 2016-09-03


* Now have access to both replay nd all flights
* Folder and file names updated
* Major update to this read me


### 2016-08-28

* First commit
* Add read me
* Add Crossfeed Daily All Flights R1

