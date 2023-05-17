# Write your MySQL query statement below

SELECT
    a.name,
    sum(b.amount) balance
FROM
    Users a
JOIN
    Transactions b
ON
    a.account = b.account
GROUP BY
    a.account
HAVING
    balance > 10000;