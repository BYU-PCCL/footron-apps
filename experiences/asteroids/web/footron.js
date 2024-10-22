// import { entities } from "./registered_entities";
/*
Script options
app 
    .cameraScripts // there is a way to set "cinematic to true"
        goToCelestialObject("NAME")
        goToSpacecraft("NAME")
        goToSystem("NAME")
    .getManager("time")
        .setDisplayUTC(BOOL)
        .parseTime(???, ???)
        .getTime()
        .getTimeUrl()
        .getDateFormat(???) "date"/"time"/"meridiem"
        .isUTC() ???
        .forcedPause
        .resetLimits()
        .setTimeRate(SECONDS_PER_SECOND
        .setToNow()
        .setToStart() ???
        .isNow()
        .getNow()
        .isWithinLimits(???)
        .momentToET()
        .pause()
        .play()
        .setMax()
        .resetMax()

    .getManager("camera")
        .zoomIn() TRUE / FALSE for clicked or held
        .zoomOut()
        .zoom(ratio) zooms in or out according to the ratio given 0.5 = half way
        .getContext()

    .getManager("scene")
    .getManager("layer")
        Layers = 
            "ui"
            "planets"
            "asteroids"
            "comets"
            "dwarfPlanets"
            "spacecraft"
            "trails"
            "orbits"
            "labels"
            "icons"
            "starfield"
            "constelations"
        .getLayer("LAYER")
        .toggleLayer("LAYER")
        .getLayerFromCategory(???)
        .addCallback("LAYER", ???)
        .resetTarget() ???
        .setTarget(???)
    .getManager("filters")

  .getComponent(COMPONENT)
    "asteroidPanel"
    "asteroid_menu_bottom"
    "asteroid_menu_top"
    "asteroid_modals"
    "auroras"
    "basic"
    "breadcrumb"
    "cameraFollowSearch"
    "clock"
    "clockShortcut"
    "contentPanel"
    "definitionOverlay"
    "filtersModal"
    "followingPanel"
    "infoPanel"
    "kioskSessionClock"
    "laser1"
    "laser2"
    "layerPanel"
    "loadIcon"
    "magnetosphere"
    "microwave"
    "missionPanel"
    "overlay"
    "radiation_belt_1"
    "radiation_belt_2"
    "radiation_belt_3"
    "radiation_belt_4"
    "search"
    "searchDesktop"
    "settings"
      .toggleLightOptions("SETTING")  "flood", "natural", "shadow"
      .toggleUnit()
    "splashScreen"
    "story"
    "timeSlider"
    "toast"
    "tutorialOverlay"
    "viewOptionsBlock"
    "watchPanel"

app.camaeraScrips.gotoCelestialObject()
app.getManager("time").setTimeRate(1) (takes int seconds per second)
*/

// TIME METHODS
/**
 * Sets time to current date and time and the speed of time to 1s/s
 */
async function live() {
  await setTimeRate(1);
  await app.getManager("time").setToNow();
}

/**
 * Sets time to current date and time and the speed of time to 5d/s
 */
function defaultTimeSettings() {
  setTimeRate(432000);
  app.getManager("time").setToNow();
}

/**
 * Sets the speed of time in the experience
 *
 * @param {*} rate - number sim-seconds per second positive or negative
 */
async function setTimeRate(rate) {
  await app.getManager("time").setTimeRate(rate);
}

// FLY METHODS
/**
 * Moves the camera smoothly to destination specified
 *
 * @param {*} destination - The requested destination. Must have a parameters type and target
 */
async function flyTo(destination) {
  if (destination.target == null)
    throw "destination " + destination + " is missing parameter 'target'";
  if ((destination.type = "celestialBody"))
    await app.cameraScripts.goToCelestialObject(destination.target);
  else if ((destination.type = "spaceCraft"))
    await app.cameraScripts.goToSpacecraft(destination.target);
  else if ((destination.type = "system"))
    await app.cameraScripts.goToSystem(destination.target);
  else throw "destination " + destination + " is missing parameter 'type'";
}

async function flyToObject(destination) {
  await flyToSystem("inner_solar_system");
  await app.cameraScripts.goToCelestialObject(destination, { cinematic: true, duration: 5 });
}

async function flyToSpacecraft(destination) {
  await app.cameraScripts.goToSpacecraft(destination);
}

async function flyToSystem(destination) {
  await app.cameraScripts.goToSystem(destination);
}

/* TODO: zoom needs to be either 
  managed and set set directly by footron eg: currZoom++ && setZoom(currZoom);
  or 
  deferred to the app layer: app.zoomIn() app.zoomOut()
  the ui will probably decide this, maybe we keep a state variable in an update loop that is set when the ui slider changes
  putting both in, but both shouldn't be used.
  goTo scripts set zoom automatically so zoomIn should be okay if it can be smooth.
  */

/**
 * zooms the camera in
 */
function zoomIn() {
  app.getManager("camera").zoomIn(true);
}

/**
 * zooms the camera out
 */
function zoomOut() {
  app.getManager("camera").zoomOut(true);
}

/**
 * zooms the camera in or out based on the zoom ratio given. 0.5 zooms in halfway
 *
 * @param {number} zoomRatio
 */
function zoom(zoomRatio) {
  // 5% seems a little fast.
  app.getManager("camera").zoom(zoomRatio);
}

// SETTINGS METHODS
/**
 * changes the lighting mode
 *
 * @param {string} lightOption - accepts either "flood", "natural", or "shadow"
 */
function setLighting(lightOption) {
  if (
    lightOption !== "flood" &&
    lightOption !== "natural" &&
    lightOption !== "shadow"
  )
    throw lightOption + " is not a valid light setting";
  app.getComponent("settings").toggleLightOptions(lightOption);
}

function resetFilters() {
  showPHOs(false);
  showComets(false);
  showAsteroids(false);
}

/**
 * Changes units... only on the asteroid watch view. Eyes doesn't have the unit switch implemented elsewhere
 */
function toggleUnits() {
  app.getComponent("settings").toggleUnit();
  app.getManager("watch").toggleUnit();
}

function filters() {
  app.getManager("router").navigate({ modal: "filters" });
}

async function showAsteroids(show) {
  let result = null;
  await new Promise((resolve) => {
    app.getManager("filters").setFilter("asteroids", show, (t) => {
      result = t;
      resolve();
    });
  });
  return result;
}

async function showComets(show) {
  let result = null;
  await new Promise((resolve) => {
    app.getManager("filters").setFilter("comets", show, (t) => {
      result = t;
      resolve();
    });
  });
  return result;
}

async function showPHOs(show) {
  let result = null;
  await new Promise((resolve) => {
    app.getManager("filters").setFilter("phos", show, (t) => {
      result = t;
      resolve();
    });
  });
  return result;
}

/**
 * Toggles layers in the ui like star field or labels
 *
 * @param {*} layer - the layer to turn on or off
 */
function toggleLayer(layer) {
  app.getManager("layer").toggleLayer(layer);
}

// ASTEROID WATCH METHODS
function cycleWatchView() {
  app.getManager("watch").setSlideIndex(0);
}

/**
 * Removes the compenent from the screen
 *
 * @param {*} component
 */
function hideComponent(component) {
  app.getComponent(component).hide();
}

/**
 * adds the compenent to the screen
 *
 * @param {*} component
 */
function showComponent(component) {
  app.getComponent(component).show();
}

function minimizeWatch() {
  app.getManager("watch").updateURL("");
}

function nextAsteroidWatch() {
  index = app.getManager("watch")._slideIndex;
  console.log(index);
  app.getManager("watch").setSlideUrlByIndex((index + 1) % 5);
}

function prevAsteroidWatch() {
  index = app.getManager("watch")._slideIndex;
  console.log(index);
  app.getManager("watch").setSlideUrlByIndex((index + 4) % 5);
}

// GENERAL METHODS
function goHome() {
  app.getManager("router").navigate({ __remove: "all" }, "/home");
}

function learn() {
  app.getManager("router").navigate({ modal: "learn" });
}

async function watch() {
  live();
  if (!app.getComponent("watchPanel").isEnabled())
    app.getManager("watch").onWatchClick();
}

// STORY METHODS
function startStoryAsteroids() {
  let t = {};
  t.path = "asteroids_101";
  app.getComponent("learnModal").goToStory(t);
  client.sendMessage(asteroids101Slides[0])
}

function startStoryCloseApproaches() {
  let t = {};
  t.path = "asteroids_close_approach";
  app.getComponent("learnModal").goToStory(t);
}

function startStoryMissions() {
  let t = {};
  t.path = "asteroids_missions";
  app.getComponent("learnModal").goToStory(t);
}

function getStorySlideIndex() {
  return app.getComponent("story")._state.currentIndex + 1;
}

function nextSlide() {
  app.getComponent("story").goToNextSlide();
  let index = getStorySlideIndex()
  client.sendMessage(app.getComponent("story")._info[index].content)
}

async function prevSlide() {
  await app.getComponent("story").goToPrevSlide();
  let index = getStorySlideIndex()
  client.sendMessage(app.getComponent("story")._info[index].content)
}

function firstSlide() {
  app.getComponent("story").goToFirstSlide();
  let index = getStorySlideIndex()
  client.sendMessage(app.getComponent("story")._info[index].content)
}

function closeStory() {
  app.getComponent("story").close();
}

function getSlideInfo() {
  app.getComponent("story")._info[getStorySlideIndex()].content;
}
