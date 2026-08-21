#!/usr/bin/env bash
# Genera config.js en el build del deploy (Vercel o Netlify) a partir de la
# variable de entorno MAPBOX_TOKEN. El token público de Mapbox (pk...) se lee
# de $MAPBOX_TOKEN y se escribe en config.js, que index.html carga antes de
# app.js. Así el token no vive en el código fuente y se puede rotar desde el
# panel del hosting sin tocar el repo.
set -e
: "${MAPBOX_TOKEN:=}"
printf 'window.MAPBOX_TOKEN = "%s";\n' "$MAPBOX_TOKEN" > config.js
if [ -n "$MAPBOX_TOKEN" ]; then
  echo "config.js generado — MAPBOX_TOKEN presente."
else
  echo "config.js generado — MAPBOX_TOKEN vacío (la cotización instantánea quedará oculta)."
fi
