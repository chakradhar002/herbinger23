1a. Display the first and last names of all actors from the table actor.
	ans : use sakila;
	      SELECT first_name,last_name FROM actor;

1b. Display the first and last name of each actor in a single column in upper case letters. Name the column Actor Name.
	ans : SELECT UPPER(CONCAT(first_name,' ',last_name))AS 'Actor Name' FROM actor;

2a. You need to find the ID number, first name, and last name of an actor, of whom you know only the first name, "Joe." What is one query would you use to obtain this information?
	ans : SELECT actor_id,first_name,last_name FROM actor WHERE first_name='joe';

2b. Find all actors whose last name contain the letters GEN:
	ans : SELECT * FROM actor WHERE last_name LIKE '%GEN';

2c. Find all actors whose last names contain the letters LI. This time, order the rows by last name and first name, in that order:
	ans: SELECT * FROM actor WHERE last_name LIKE '%GEN' ORDER BY last_name,first_name ;

2d. Using IN, display the country_id and country columns of the following countries: Afghanistan, Bangladesh, and China:
	ans : SELECT country_id ,country FROM country WHERE country IN('Afghanistan','Bangladesh','China');

3a. Add a middle_name column to the table actor. Position it between first_name and last_name. Hint: you will need to specify the data type.
	ans :ALTER TABLE actor ADD column middle_name varchar(50) AFTER first_name;

3b. You realize that some of these actors have tremendously long last names. Change the data type of the middle_name column to blobs.
	ans :ALTER TABLE actor MODIFY column middle_name blob;

3c. Now delete the middle_name column.
	ans: ALTER TABLE actor DROP COLUMN middle_name;

4a. List the last names of actors, as well as how many actors have that last name.
	ans:SELECT last_name,COUNT(last_name) FROM actor GROUP BY last_name;

4b. List last names of actors and the number of actors who have that last name, but only for names that are shared by at least two actors
	ans :SELECT last_name, COUNT(*) AS `Count`FROM actor GROUP BY last_name HAVING Count >= 2;

4c. Oh, no! The actor HARPO WILLIAMS was accidentally entered in the actor table as GROUCHO WILLIAMS, the name of Harpo's second cousin's husband's yoga teacher. Write a query to fix the record.
	ans :UPDATE actor SET first_name= 'HARPO' WHERE first_name='GROUCHO' AND last_name='WILLIAMS';

4d. Perhaps we were too hasty in changing GROUCHO to HARPO. It turns out that GROUCHO was the correct name after all! In a single query, if the first name of the actor is currently HARPO, change it to GROUCHO. Otherwise, change the first name to MUCHO GROUCHO, as that is exactly what the actor will be with the grievous error. BE CAREFUL NOT TO CHANGE THE FIRST NAME OF EVERY ACTOR TO MUCHO GROUCHO, HOWEVER! (Hint: update the record using a unique identifier.)
	ans : UPDATE actor SET first_name= 'GROUCHO'WHERE first_name='HARPO' AND last_name='WILLIAMS';

5a. You cannot locate the schema of the address table. Which query would you use to re-create it?
	ans : DESCRIBE sakila.address

6a. Use JOIN to display the first and last names, as well as the address, of each staff member. Use the tables staff and address:
	ans : SELECT s.first_name, s.last_name, a.address FROM staff s LEFT JOIN address a ON s.address_id = a.address_id;

6b. Use JOIN to display the total amount rung up by each staff member in August of 2005. Use tables staff and payment.
	ans : SELECT s.first_name, s.last_name, SUM(p.amount) AS 'TOTAL'  FROM staff s LEFT JOIN payment p  ON s.staff_id = p.staff_id GROUP BY s.first_name, s.last_name;

6c. List each film and the number of actors who are listed for that film. Use tables film_actor and film. Use inner join.
	ans : SELECT f.title, COUNT(a.actor_id) AS 'TOTAL'FROM film f LEFT JOIN film_actor  a ON f.film_id = a.film_id GROUP BY f.title;

6d. How many copies of the film Hunchback Impossible exist in the inventory system?
	ans :   SELECT title, COUNT(inventory_id) FROM film f INNER JOIN inventory i ON f.film_id = i.film_i WHERE title = "Hunchback Impossible";

6e. Using the tables payment and customer and the JOIN command, list the total paid by each customer. List the customers alphabetically by last name:
	ans : SELECT c.first_name, c.last_name, SUM(p.amount) AS 'TOTAL'FROM customer c LEFT JOIN payment p ON c.customer_id = p.customer_id GROUP BY c.first_name, c.last_name ORDER BY c.last_name


7a. The music of Queen and Kris Kristofferson have seen an unlikely resurgence. As an unintended consequence, films starting with the letters K and Q have also soared in popularity. Use subqueries to display the titles of movies starting with the letters K and Q whose language is English.
	ans : Use sakila SELECT title FROM film WHERE (title LIKE 'K%' OR title LIKE 'Q%') AND language_id=(SELECT language_id FROM language where name='English')

7b. Use subqueries to display all actors who appear in the film Alone Trip.
	ans : SELECT first_name, last_name FROM actor WHERE actor_id IN (SELECT actor_id FROM film_actor WHERE film_id IN (SELECT film_id from film where title='ALONE TRIP'))

7c. You want to run an email marketing campaign in Canada, for which you will need the names and email addresses of all Canadian customers. Use joins to retrieve this information.
	ans : SELECT first_name, last_name, email FROM customer cu JOIN address a ON (cu.address_id = a.address_id) JOIN city cit ON (a.city_id=cit.city_id) JOIN country cntry ON (cit.country_id=cntry.country_id)

7d. Sales have been lagging among young families, and you wish to target all family movies for a promotion. Identify all movies categorized as famiy films.
	ans : SELECT title from film f JOIN film_category fcat on (f.film_id=fcat.film_id) JOIN category c on (fcat.category_id=c.category_id);

7e. Display the most frequently rented movies in descending order.
	ans :SELECT title, COUNT(f.film_id) AS 'Count_of_Rented_Movies'FROM film fJOIN inventory i ON (f.film_id= i.film_id)JOIN rental r ON (i.inventory_id=r.inventory_id) GROUP BY title ORDER BY Count_of_Rented_Movies DESC;

7f. Write a query to display how much business, in dollars, each store brought in.
	ans :	SELECT s.store_id, SUM(p.amount) FROM payment pJOIN staff s ON (p.staff_id=s.staff_id) GROUP BY store_id;

7g. Write a query to display for each store its store ID, city, and country.
	ans : SELECT store_id, city, country FROM store sJOIN address a ON (s.address_id=a.address_id) JOIN city c ON (a.city_id=c.city_id) JOIN country cntry ON (c.country_id=cntry.country_id);


7h. List the top five genres in gross revenue in descending order. (Hint: you may need to use the following tables: category, film_category, inventory, payment, and rental.)
	ans : 	SELECT c.name AS "Records", SUM(p.amount) AS "Gross" FROM category c JOIN film_category fc ON (c.category_id=fc.category_id) JOIN inventory i ON (fc.film_id=i.film_id) JOIN rental r ON (i.inventory_id=r.inventory_id) JOIN payment p ON (r.rental_id=p.rental_id) GROUP BY c.name ORDER BY Gross  LIMIT 5;

8a. In your new role as an executive, you would like to have an easy way of viewing the Top five genres by gross revenue. Use the solution from the problem above to create a view. If you haven't solved 7h, you can substitute another query to create a view.
		ans :	SELECT c.name AS "Records", SUM(p.amount) AS "Gross" FROM category c JOIN film_category fc ON (c.category_id=fc.category_id) JOIN inventory i ON (fc.film_id=i.film_id) JOIN rental r ON (i.inventory_id=r.inventory_id)JOIN payment p ON (r.rental_id=p.rental_id) GROUP BY c.name ORDER BY Gross  LIMIT 5;

8b. How would you display the view that you created in 8a?
		ans : SELECT* FROM Records

8c. You find that you no longer need the view top_five_genres. Write a query to delete it.
		ans : DROP VIEW Records