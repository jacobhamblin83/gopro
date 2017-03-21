select * 
from products
join cart on cart.product_id = products.id
where user_id = 1; 
