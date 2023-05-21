# Write your MySQL query statement below
SELECT 
    p.product_name, s.year, s.price
FROM 
    Sales AS s
JOIN
    Product AS p
ON S.product_id = P.product_id