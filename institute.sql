CREATE DATABASE routine_db;

USE routine_db;

CREATE TABLE institutes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    institute_name VARCHAR(255) NOT NULL,
    institute_type VARCHAR(50) NOT NULL,
    school_type VARCHAR(50),
    school_category VARCHAR(50),
    college_type VARCHAR(50),
    college_category VARCHAR(50),
    university_name VARCHAR(255),
    university_type VARCHAR(50),
    hoi VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    contact VARCHAR(10) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    location VARCHAR(255)
);
