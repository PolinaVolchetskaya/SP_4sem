SELECT USER_ID, NAME FROM twittolina.user WHERE (USER_ID) in 
(SELECT USER_ID FROM twittolina.post group by USER_ID having count(*) > 3)