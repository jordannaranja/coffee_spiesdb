USE coffee_spies; 

INSERT INTO user (id, username, `password`, email_address)
VALUES (1, 'JohnDoe1', 'LOL1234LOL', 'johndoe1@gmail.com'),
(2, 'JaneDoe2', 'MyNewEpicPW1', 'janedoe2gmail.com'); 

INSERT INTO posts (id, uploader_id, title, thumbnail_url, post_url)
VALUES (1, 2, 'How to Microwave Popcorn', 'https://commons.wikimedia.org/w/index.php?search=popcorn&title=Special%3ASearch&go=Go&ns0=1&ns6=1&ns12=1&ns14=1&ns100=1&ns106=1#/media/File:Bowl_of_Popcorn_(Unsplash).jpg',
'https://www.youtube.com/watch?v=uGT9-20iH4U',), 
(2, 1, 'How to Connect to Wifi', 'https://commons.wikimedia.org/w/index.php?search=wifi&title=Special%3ASearch&go=Go&ns0=1&ns6=1&ns12=1&ns14=1&ns100=1&ns106=1#/media/File:Nuestro_Primer_Logo.jpg', 'https://www.youtube.com/watch?v=r7FxORx05Ns');

INSERT INTO comments (id, user_id, post_id, `message`)
VALUES (1, 1, 1, "Instructions unclear, microwaved my computer"), 
(2, 2, 2, "Lol nice"); 

INSERT into likes (id, user_id, post_id) 
VALUES (1, 1, 1), (2, 2, 2);  