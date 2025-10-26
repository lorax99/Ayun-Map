import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import * as L from "leaflet";

export const getMarker = (icon: IconDefinition, latlng: L.LatLngExpression) => {
  const faIcon = L.divIcon({
    html: `<i class="fa-solid fa-${icon.iconName} fa-4x"></i>`,
    iconSize: [20, 20],
  });

  return L.marker(latlng, {
    icon: faIcon,
  });
};
