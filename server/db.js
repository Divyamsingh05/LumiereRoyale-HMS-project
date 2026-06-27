import Database from 'better-sqlite3';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'data.db');

const db = new Database(dbPath);

export function init() {
  db.prepare(`
    CREATE TABLE IF NOT EXISTS rooms (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      category TEXT,
      price INTEGER,
      guests INTEGER,
      size TEXT,
      image TEXT,
      banner TEXT,
      description TEXT
    );
  `).run();

  db.prepare(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      roomType TEXT,
      checkIn TEXT,
      checkOut TEXT,
      guests INTEGER,
      status TEXT DEFAULT 'PENDING',
      stripe_session TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `).run();
}

export function getRooms() {
  return db.prepare('SELECT id, name, category, price, guests, size, image FROM rooms').all();
}

export function getRoomById(id) {
  return db.prepare('SELECT * FROM rooms WHERE id = ?').get(id);
}

export function createBooking({ name, email, phone, roomType, checkIn, checkOut, guests }) {
  const stmt = db.prepare('INSERT INTO bookings (name, email, phone, roomType, checkIn, checkOut, guests, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
  const info = stmt.run(name, email, phone, roomType, checkIn, checkOut, guests, 'PENDING');
  return info.lastInsertRowid;
}

export function getBookings() {
  return db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all();
}

export function updateBookingPayment(id, { status, stripe_session }) {
  const stmt = db.prepare('UPDATE bookings SET status = COALESCE(?, status), stripe_session = COALESCE(?, stripe_session) WHERE id = ?');
  const info = stmt.run(status, stripe_session, id);
  return info.changes;
}

export function countRooms() {
  return db.prepare('SELECT COUNT(1) as c FROM rooms').get().c;
}

export function seedRooms(rooms) {
  const insert = db.prepare('INSERT INTO rooms (id, name, category, price, guests, size, image, banner, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
  const tx = db.transaction((rows) => {
    for (const r of rows) insert.run(r.id, r.name, r.category, r.price, r.guests, r.size, r.image, r.banner || null, r.desc || null);
  });
  tx(rooms);
}

export default db;
