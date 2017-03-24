drop table if exists products, logins, users, ordernumber, orderitems;

-- these are the products
create table products (id serial primary key, name text, price decimal(5,2), image_url text);

insert into products (name, price, image_url)
values ('Hero 5 Black', 399.99, 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw02a7026a/hero5launch/HERO5_Black_45.png?sw=128&amp;sh=70&amp;sm=fit');

insert into products (name, price, image_url)
values ('Hero 5 Session', 299.99, 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw4e2dbfde/hero5launch/HERO5_Session_315.png?sw=128&amp;sh=70&amp;sm=fit');

insert into products (name, price, image_url)
values ('Hero Session', 199.99, 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw15b9f66e/hi-res/CHDHS-102_main1.jpg?sw=128&amp;sh=70&amp;sm=fit');

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
create table users (id serial primary key, login_id integer, firstname text, lastname text, address text, city text, state text, zipcode int, email text);

insert into users (login_id, firstname, lastname, address, city, state, zipcode, email)
values (1, 'Jacob', 'Hamblin', '153 S 1000 E', 'Orem', 'UT', 84097, 'jacobhamblin83@gmail.com');

-- -- this will be orders table with one row per product
create table ordernumber (id serial primary key, user_id int);

insert into ordernumber (user_id)
values (1);


create table orderitems (id serial primary key, product_id int, quantity int, price decimal(5,2));

insert into orderitems (product_id, quantity, price)
values (1, 1, 399.99)

