INSERT INTO UserProfiles (Email, Password, FirstName, LastName, ProfileType, loggedIn)
VALUES
('user1@example.com', 'password1', 'John', 'Doe', 'USER', 0),
('user2@example.com', 'password2', 'Jane', 'Smith', 'USER', 0),
('admin@example.com', 'adminpassword', 'Admin', 'User', 'ADMIN', 0),
('user3@example.com', 'password3', 'Michael', 'Johnson', 'USER', 0),
('user4@example.com', 'password4', 'Emily', 'Davis', 'USER', 0),
('user5@example.com', 'password5', 'David', 'Brown', 'USER', 0),
('user6@example.com', 'password6', 'Sarah', 'Wilson', 'USER', 0),
('user7@example.com', 'password7', 'Daniel', 'Martinez', 'USER', 0),
('user8@example.com', 'password8', 'Jennifer', 'Taylor', 'USER', 0);

SELECT * from userprofiles;

INSERT INTO ProductListings (SellerID, Title, Price, Description, Category, Image, Status)
VALUES
(1, 'T-shirt', 19.99, 'Plain white T-shirt', 'CLOTHES', 'ex', 'ACTIVE'),
(2, 'Smartphone', 499.99, 'Latest model smartphone', 'ELECTRONICS', 'ex', 'ACTIVE'),
(1, 'Coffee Table', 149.99, 'Wooden coffee table', 'FURNITURE', 'ex', 'ACTIVE'),
(1, 'Running Shoes', 79.99, 'High-performance running shoes', 'CLOTHES', 'https://example.com/runningshoes.jpg', 'ACTIVE'),
(1, 'Laptop', 899.99, 'Powerful laptop for professionals', 'ELECTRONICS', 'https://example.com/laptop.jpg', 'ACTIVE'),
(1, 'Sofa', 499.99, 'Comfortable sofa for your living room', 'FURNITURE', 'https://example.com/sofa.jpg', 'ACTIVE'),
(2, 'Lipstick', 14.99, 'Long-lasting lipstick in various shades', 'BEAUTY', 'https://example.com/lipstick.jpg', 'ACTIVE'),
(2, 'DVD Player', 49.99, 'Compact DVD player with HDMI output', 'ENTERTAINMENT', 'https://example.com/dvdplayer.jpg', 'ACTIVE'),
(2, 'Sweater', 39.99, 'Warm and cozy sweater for winter', 'CLOTHES', 'https://example.com/sweater.jpg', 'ACTIVE');

SELECT * from ProductListings;