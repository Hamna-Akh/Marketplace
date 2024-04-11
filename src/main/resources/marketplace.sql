DROP DATABASE IF EXISTS marketplace;
create database marketplace;
use marketplace;

CREATE TABLE UserProfiles (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(100) NOT NULL,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    ProfileType VARCHAR(50)
);

CREATE TABLE ProductListings (
    ListingID INT PRIMARY KEY AUTO_INCREMENT,
    SellerID INT,
    Title VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Description TEXT,
    Category VARCHAR(50),
    Images TEXT,
    Status VARCHAR(20) NOT NULL,
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
