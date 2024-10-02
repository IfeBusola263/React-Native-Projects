import * as SQLite from "expo-sqlite";
import Place from "../models/place";

const db = SQLite.openDatabaseSync("place.db");

export function init() {
  // const result = db.runSync('DROP TABLE IF EXISTS places');
  // console.log(result);
  return db.runAsync(
    `CREATE TABLE IF NOT EXISTS places (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
title TEXT NOT NULL,
imageUrl TEXT NOT NULL,
address TEXT NOT NULL,
lat REAL NOT NULL,
lng REAL NOT NULL
)
`,
  );
}

export async function insertPlace(place) {
  return db
    .runAsync(
      `INSERT INTO places (title, imageUrl, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
      [
        place.title,
        place.imageUrl,
        place.address,
        place.location.lat,
        place.location.lng,
      ],
    )
    .then(() => console.log("inserted"))
    .catch((error) => console.log(error));
}

export async function fetchPlaces() {
  const places = [];
  const allPlaces = await db.getAllAsync("SELECT * FROM places");
  for (const place of allPlaces) {
    places.push(
      new Place(
        place.id,
        place.title,
        place.address,
        { lat: place.lat, lng: place.lng },
        place.imageUrl,
      ),
    );
  }

  return places;
}

export async function fetchPlace(id) {
  const place = await db.getFirstAsync("SELECT * FROM places WHERE id = ?", [
    id,
  ]);
  return place;
}
