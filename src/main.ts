import "leaflet/dist/leaflet.css";
import "./style.css";
import * as L from "leaflet";
import ayunMap from "./assets/Ayun Map Aktuell.jpg";

console.log("He");
// Coordinates in CRS.Simple take the form of [y, x] instead of [x, y].
const AYUN_MAP_HEIGHT = 2483;
const AYUN_MAP_WIDTH = 3513;
const AYUN_MAP_RATIO = AYUN_MAP_HEIGHT / AYUN_MAP_WIDTH;

//#region Map
// TODO: fix the bounds
const bounds: L.LatLngBoundsLiteral = [
  [0, 0],
  [2483, 3513],
];

const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -1.7,
  maxBounds: bounds,
});
L.imageOverlay(ayunMap, bounds).addTo(map);

map.fitBounds(bounds);
