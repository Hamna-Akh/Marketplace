DROP DATABASE IF EXISTS marketplace;
create database marketplace;
use marketplace;

CREATE TABLE UserProfiles (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(100) NOT NULL,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    ProfileType ENUM('ADMIN', 'USER'),
    loggedIn TINYINT(4)
);

CREATE TABLE ProductListings (
    ListingID INT PRIMARY KEY AUTO_INCREMENT,
    SellerID INT,
    Title VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Description TEXT,
    Category ENUM('CLOTHES', 'ELECTRONICS', 'FURNITURE', 'BEAUTY', 'ENTERTAINMENT'),
    Image TEXT,
    Status ENUM('ACTIVE', 'INACTIVE','SOLD') NOT NULL,
    FOREIGN KEY (SellerID) REFERENCES UserProfiles(UserID)
);

CREATE TABLE Messaging (
    MessageID INT PRIMARY KEY AUTO_INCREMENT,
    SenderID INT,
    ReceiverID INT,
    Timestamp DATETIME,
    MessageContent TEXT,
    FOREIGN KEY (SenderID) REFERENCES UserProfiles(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES UserProfiles(UserID)
);

CREATE TABLE Images (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    imagedata LONGBLOB
);
