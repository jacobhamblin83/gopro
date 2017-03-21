select sum(price)
from products
join cart on cart.product_id = products.id
where user_id = 2

select count(*)
from products
join cart on cart.product_id = products.id
where user_id = 2

