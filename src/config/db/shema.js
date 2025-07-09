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

CREATE TABLE Appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    sex CHAR(1),
    birthday DATE NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    time INT DEFAULT 0 ,
    service_id INTEGER NOT NULL,
    motif TEXT,
    state TEXT CHECK(state IN ('WAITING', 'CONFIRMED', 'CANCELED')) DEFAULT 'WAITING',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (service_id) REFERENCES services(id),
);

INSERT INTO services(name, description) VALUES
('General Medicine', 'General medical consultations and check-ups'),
('Pediatrics', 'Medical care for children and adolescents'),
('Gynecology', 'Women’s health services including reproductive health'),
('Dermatology', 'Skin-related medical services'),
('Cardiology', 'Heart and cardiovascular health services'),
('Orthopedics', 'Bone and joint health services'),
('Ophthalmology', 'Eye care and vision services'),
('ENT', 'Ear, Nose, and Throat medical services'),
('Psychiatry', 'Mental health services and counseling'),
('Dentistry', 'Dental care and oral health services');
`;

export default shema;
