SELECT NAME FROM twittolina.user WHERE (USER_ID) in 
((SELECT USER_ID FROM twittolina.post group by USER_ID, CREATED_AT having count(*) > 3 
AND DATE(POST.CREATED_AT)=DATE(NOW())))