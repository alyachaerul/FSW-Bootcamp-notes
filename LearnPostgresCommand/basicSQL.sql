----------------- BASIC SQL QUERY -----------------


-- Create Table : 
    CREATE TABLE users (
        id INT,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        gender VARCHAR(7),
        date_of_birth TIMESTAMP
    )

-- Edit Data Type : 
    ALTER TABLE users
    ALTER COLUMN gender TYPE BOOL;
    ALTERN COLUMN gender TYPE VARCHAR(1);

-- Edit Nama Column : 
    ALTER TABLE users
    RENAME COLUMN date_of_birth TO date_birth;

-- Nambah Column : 
    ALTER TABLE users
    ADD COLUMN full_name VARCHAR(100);

-- Delete Column : 
    ALTER TABLE users
    DROP COLUMN full_name;

-- Delete Table : 
    DROP TABLE users;

-- # Dengan Constraint(penahan) # --

-- Create Table : 
    CREATE TABLE users (
        id BIGSERIAL PRIMARY KEY, -- Big Serial : auto-increment integer data. Primary Key : ngebuat ID sebagai kunci utama
        first_name VARCHAR(50) NOT NULL UNIQUE,
        last_name VARCHAR(50) NOT NULL,
        gender VARCHAR(7) NOT NULL,
        date_of_birth TIMESTAMP
    )

-- Edit Constraint : 
    ALTER TABLE users
    ALTER COLUMN gender DROP NOT NULL; -- ngedrop not NULL

-- Masukin data ke table  :
    INSERT INTO users (first_name, last_name, gender, date_of_birth)
    VALUES('Alya', 'Chaerul', 'Female', '1998-10-10 23:15:10');

-- Masukin data ke table cara singkat :
    INSERT INTO users 
    VALUES('Alya', 'Chaerul', 'Female', '1998-10-10 23:15:10');

    --Tapi kelemahannya harus ditulis urut semuanya per kolom

-- Masukin data ke table cara singkat sekalian banyak :
    INSERT INTO users 
    VALUES(120, 'Alya', 'Chaerul'),
    (121, 'Al', 'Cha');

-- Lihat data yang sudah dimasukkan : 
    SELECT * FROM users;

-- Lihat data tapi beberapa column aja : 
    SELECT first_name, gender * FROM users;

-- Edit Data : 
    UPDATE users
    SET 
    last_name = 'Mahendra'
    WHERE id = 5; // spesifik mau yang mana

-- Delete Data : 
    DELETE FROM users
    WHERE id = 5;





-------------- PRACTICE -------------
-- Create table dengan constraint
CREATE TABLE users (
	id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL UNIQUE,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    date_of_birth TIMESTAMP
);

INSERT INTO users (first_name, last_name, gender, date_of_birth)
    VALUES('Alya', 'Chaerul', 'Female', '1998-10-10 23:15:10');
	
INSERT INTO users 
    VALUES(120, 'Mahendra', 'Okza', 'Male'),
    (121, 'Okza', 'Pradhana', 'Male');

SELECT * FROM users;
	
-- Create Table dengan Relasi
CREATE TABLE pets (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	user_id BIGSERIAL, -- Bakal diisi id nya dari user
	FOREIGN KEY(user_id) REFERENCES users(id) -- key yang mereferensikan kolom dari luar table ini
);

-- Masukin Data 
INSERT INTO pets (name, user_id)
VALUES('meng', 120);

-- QUERY JOIN ONE TO MANY
SELECT * FROM pets
JOIN users ON users.id = pets.user_id;

SELECT pets.name, users.first_name FROM pets
JOIN users ON users.id = pets.user_id;

SELECT pets.name AS nama_hewan, users.first_name AS nama_pemilik FROM pets
JOIN users ON users.id = pets.user_id; -- banyak hewan dimiliki satu pemilik


