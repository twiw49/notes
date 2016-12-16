conn = sqlite3.connect('geodata.sqlite')
cur = conn.cursor()
cur.execute("CREATE TABLE IF NOT EXISTS Locations (address TEXT, geodata TEXT)")
cur.execute("SELECT geodata FROM Locations WHERE address= ?", (buffer(address), ))
cur.execute("INSERT INTO Locations (address, geodata) VALUES ( ?, ? )", ( buffer(address), buffer(data)))
conn.commit()

CREATE TABLE songs (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT,
	mood TEXT,
	duration INTEGER,
	released INTEGER
	);

ALTER TABLE clothes ADD price INTEGER;
DROP TABLE Users;

INSERT INTO Users (name, email) VALUES (“Kristin”, “kf@umich.edu”);
DELETE FROM Users WHERE email = “ted@umich.edu”;
UPDATE Users SET name = “Charles” WHERE email=“csev@umich.edu”;

SELECT * FROM Users
SELECT * FROM Users WHERE email=“csev@umich.edu”;
SELECT * FROM Users ORDER BY email ASC/DESC
===> SUM / AVG / MAX / MIN / ROUND

SELECT title FROM songs WHERE released>1990 OR mood="epic";
SELECT title FROM songs WHERE mood="epic" AND released>1990 AND duration<240;
SELECT title FROM songs WHERE artist IN (SELECT name FROM artists WHERE genre="Pop");
SELECT column_name FROM table_name WHERE column_name IN (value1,value2,...);
SELECT author, SUM(words) AS total_words FROM books GROUP BY author HAVING total_words>1000000;

SELECT COUNT(*),
	CASE
		WHEN ROUND(100*fraction_completed) > 90 THEN "A"
		WHEN ROUND(100*fraction_completed) > 80 THEN "B"
		WHEN ROUND(100*fraction_completed) > 70 THEN "C"
		ELSE "F"
		END AS "letter_grade"
	FROM student_grades
	GROUP BY letter_grade

SELECT persons.name, hobbies.name
	FROM persons
	JOIN hobbies
	ON persons.id = hobbies.person_id;

SELECT customers.name, customers.email, orders.item, orders.price
	FROM customers
	LEFT OUTER JOIN orders
	ON customers.id = orders.customer_id;

SELECT a.fullname, b.fullname AS fullname_of_friend
	FROM friends
	JOIN persons a
	ON a.id = friends.person1_id
	JOIN persons b
	ON b.id = friends.person2_id;