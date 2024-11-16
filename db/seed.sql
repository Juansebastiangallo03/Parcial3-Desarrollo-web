INSERT INTO specialty (name) VALUES 
    ('Medicina General'),
    ('Cardiología'),
    ('Urología'),
    ('Fisiología'),
    ('Pediatría');

INSERT INTO doctor (name, age, email, password, specialty_id) VALUES
    ('Dr. Juan Gallo', 45, 'juan.gallo@clinic.com', '$2b$10$hashedpassword1', 1),
    ('Dr. Maria Martinez', 50, 'maria.martinez@clinic.com', '$2b$10$hashedpassword2', 2),
    ('Dr. Luis Ruiz', 38, 'luis.ruiz@clinic.com', '$2b$10$hashedpassword3', 3),
    ('Dr. Carla Fernandez', 42, 'carla.fernandez@clinic.com', '$2b$10$hashedpassword4', 4),
    ('Dr. Ana Gomez', 33, 'ana.gomez@clinic.com', '$2b$10$hashedpassword5', 5);

INSERT INTO patient (name, age, email, password) VALUES
    ('Pedro Garcia', 30, 'pedro.garcia@gmail.com', '$2b$10$hashedpassword6'),
    ('Laura Torres', 27, 'laura.torres@gmail.com', '$2b$10$hashedpassword7'),
    ('Carlos Rivera', 33, 'carlos.rivera@gmail.com', '$2b$10$hashedpassword8'),
    ('Ana Martinez', 40, 'ana.martinez@gmail.com', '$2b$10$hashedpassword9'),
    ('Roberto Gonzalez', 35, 'roberto.gonzalez@gmail.com', '$2b$10$hashedpassword10'),
    ('Lucia Perez', 29, 'lucia.perez@gmail.com', '$2b$10$hashedpassword11'),
    ('Jorge Torres', 22, 'jorge.torres@gmail.com', '$2b$10$hashedpassword12'),
    ('Sara Jimenez', 31, 'sara.jimenez@gmail.com', '$2b$10$hashedpassword13'),
    ('Luis Ramirez', 34, 'luis.ramirez@gmail.com', '$2b$10$hashedpassword14'),
    ('Maria Fernandez', 26, 'maria.fernandez@gmail.com', '$2b$10$hashedpassword15');
