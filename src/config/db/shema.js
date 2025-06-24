const shema = `

CREATE TABLE services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    create_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('reception', 'medecin')),
    service_id INTEGER DEFAULT NULL,
    FOREIGN KEY (service_id) REFERENCES services(id)
);

CREATE TABLE reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    sex CHAR(1),
    birthday DATE NOT NULL,
    email TEXT NOT NULL,
    tel TEXT,
    day_date DATE NOT NULL DEFAULT CURRENT_DATE,
    day_time TEXT DEFAULT 'beforenoon' CHECK(day_time IN ('beforenoon', 'afternoon')),
    service_id INTEGER NOT NULL,
    reson TEXT,
    state TEXT CHECK(state IN ('waiting', 'confirmed', 'canceled')),
    medecin_id INTEGER DEFAULT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (service_id) REFERENCES services(id),
    FOREIGN KEY (medecin_id) REFERENCES users(id)
);


`;

export default shema;
