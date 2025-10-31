CREATE DATABASE IF NOT EXISTS myapp;
USE myapp;

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    role VARCHAR(100)
);

INSERT INTO users (name, role) VALUES
('Ahmad', 'DevOps Engineer'),
('Siti', 'System Engineer'),
('Ali', 'Backend Developer'),
('Fatimah', 'Frontend Developer'),
('Kumar', 'Database Admin');