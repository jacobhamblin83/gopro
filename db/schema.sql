drop table if exists products, logins, users, ordernumber, orderitems;

-- these are the products
create table products (id serial primary key, name text, price decimal(5,2), image_url text);

insert into products (name, price, image_url)
values ('Hero 5 Black', 399.99, 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw291c38d9/thumbnails/HERO5Black_Thumbnail.jpg?sw=174&amp;sh=174&amp;sm=fit');

insert into products (name, price, image_url)
values ('Hero 5 Session', 299.99, 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dwa4517b21/thumbnails/HERO5_Session_Thumbnail.jpg?sw=174&amp;sh=174&amp;sm=fit');

insert into products (name, price, image_url)
values ('Hero Session', 199.99, 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw3d8437cb/thumbnails/CHDHS-102_thumbnail1.jpg?sw=174&amp;sh=174&amp;sm=fit');

insert into products (name, price, image_url)
values ('Karma Grip for Hero 5 Black', 299.99, 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dwf37566db/hi-res/KarmaGrip_PDP_1.jpg?sw=128&amp;sh=70&amp;sm=fit');

insert into products (name, price, image_url)
values ('3-Way', 69.99, 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw19eee0d8/hi-res/3WayMount_PDP_1.jpg?sw=128&amp;sh=70&amp;sm=fit');

insert into products (name, price, image_url)
values ('Remo (Waterproof Voice Activated Remote)', 79.99, 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw64364b5b/hi-res/Remo_Voice_Remote_PDP_1.jpg?sw=128&amp;sh=70&amp;sm=fit');

-- this is the login info
create table logins (id serial primary key, username text, password text);

insert into logins (username, password)
values ('jacobhamblin83', 'JacobHamblin-83');

-- -- this is the users name with shipping and email info
create table users (id serial primary key, login_id integer, firstname text, lastname text, address text, city text, state text, zipcode int, email text, password text);

insert into users (login_id, firstname, lastname, address, city, state, zipcode, email, password)
values (1, 'Jacob', 'Hamblin', '153 S 1000 E', 'Orem', 'UT', 84097, 'jacobhamblin83@gmail.com', 'password');

-- -- this will be orders table with one row per product
create table ordernumber (id serial primary key, user_id int);

insert into ordernumber (user_id)
values (1);


create table orderitems (id serial primary key, product_id int, name text, quantity int, price decimal(5,2), user_id int, paid boolean);


