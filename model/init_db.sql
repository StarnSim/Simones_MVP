

DROP TABLE if exists bookings;
DROP TABLE if exists dogs;

CREATE TABLE bookings (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `dogId` BIGINT UNSIGNED NOT NULL,
    `bookingDate` DATE,
    `bookingTime` VARCHAR(255)
);

CREATE TABLE dogs (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `dogName` VARCHAR(255),
    `age` TINYINT,
    `breed` VARCHAR(255),
    `size` VARCHAR(255),
    `vaccination` VARCHAR(255),
    `neutered` VARCHAR(255),
    `gender` VARCHAR(255),
    `ownerName` VARCHAR(255),
    `email` VARCHAR(255),
    `address` VARCHAR(255),
    `phoneNumber` BIGINT,
    `secondContactName` VARCHAR(255),
    `secondPhoneNumber` BIGINT
);
ALTER TABLE
    `bookings` ADD CONSTRAINT `bookings_dogid_foreign` FOREIGN KEY(`dogId`) REFERENCES `dogs`(`id`);