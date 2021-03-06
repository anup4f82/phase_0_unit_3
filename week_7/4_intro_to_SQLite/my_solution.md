-- U3.W7: Intro to SQLite

--  I worked on this challenge with Devin Johnson

-- Release 0: Create a dummy database
--Output

<pre>CREATE TABLE anup(id integer PRIMARY KEY AUTOINCREMENT,first_name varchar(64) NO
T NULL);
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(64) NOT NULL,
  last_name  VARCHAR(64) NOT NULL,
  email VARCHAR(128) UNIQUE NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);</pre>

## Release 1: Insert Data 
<!-- paste your terminal output here -->
--Input
<pre>sqlite> INSERT INTO users
   ...> (first_name, last_name, email, created_at, updated_at)
   ...> VALUES('Anup','Pradhan','anup-pradhan@hotmail.com',DATETIME('now'),DATET
IME('now'));
sqlite> INSERT INTO users
   ...> (first_name, last_name, email, created_at, updated_at)
   ...> VALUES('Devin','Johnson','djohnson0610@hotmail.com',DATETIME('now'),DATE
TIME('now'));

Select * from users;</pre>
-- Output
<pre>
1|Kimmey|Lin|kimmy@devbootcamp.com|2014-04-24 02:20:12|2014-04-24 02:20:12
2|Anup|Pradhan|anup-pradhan@hotmail.com|2014-04-24 02:22:56|2014-04-24 02:22:56
3|Devin|Johnson|djohnson0610@hotmail.com|2014-04-24 02:24:32|2014-04-24 02:24:32
</pre>


## Release 2: Multi-line commands
<!-- paste your terminal output here -->
--Output
<pre>Error: UNIQUE constraint failed: users.email</pre>
## Release 3: Add a column
<!-- paste your terminal output here -->
--Input
<pre>
sqlite> ALTER table users ADD COLUMN nickname VARCHAR(64) NOT NULL;
</pre>
--Output
<pre>
Error: Cannot add a NOT NULL column with default value NULL
</pre>

--Input
<pre>
sqlite> Drop table users;
sqlite> CREATE TABLE users (
   ...>   id INTEGER PRIMARY KEY AUTOINCREMENT,
   ...>   first_name VARCHAR(64) NOT NULL,
   ...>   last_name  VARCHAR(64) NOT NULL,
   ...>   nickname VARCHAR(64) NOT NULL,
   ...>   email VARCHAR(128) UNIQUE NOT NULL,
   ...>   created_at DATETIME NOT NULL,
   ...>   updated_at DATETIME NOT NULL
   ...> );
   
   sqlite> INSERT INTO users
   ...> (first_name, last_name, email, created_at, updated_at,nickname)
   ...> VALUES
   ...> ('Kimmey', 'Lin', 'kimmy@devbootcamp.com', DATETIME('now'), DATETIME('no
w'),'kimchee');

sqlite> INSERT INTO users
   ...> (first_name, last_name, email, created_at, updated_at,nickname)
   ...> VALUES('Anup','Pradhan','anup-pradhan@hotmail.com',DATETIME('now'),DATET
IME('now'),'Anup');

sqlite> INSERT INTO users
   ...> (first_name, last_name, email, created_at, updated_at,nickname)
   ...> VALUES('Devin','Johnson','djohnson0610@hotmail.com',DATETIME('now'),
   ...> DATETIME('now'),'Devo');
   
  
sqlite> Select * from users;</pre>

--Output
<pre>
1|Kimmey|Lin|kimchee|kimmy@devbootcamp.com|2014-04-24 02:51:21|2014-04-24 02:51:
21
2|Anup|Pradhan|Anup|anup-pradhan@hotmail.com|2014-04-24 02:53:49|2014-04-24 02:5
3:49
3|Devin|Johnson|Devo|djohnson0610@hotmail.com|2014-04-24 02:54:08|2014-04-24 02:
54:08
</pre>

   

## Release 4: Change a value
<!-- paste your terminal output here -->

--Input
<pre>
sqlite> update users SET first_name = 'Kimmy',nickname =  'Ninja Coder',updated_
at = DATETIME('now') where ID = 1;

sqlite> Select * from users where ID = 1;
</pre>

--Output
<pre>
1|Kimmy|Lin|Ninja Coder|kimmy@devbootcamp.com|2014-04-24 02:51:21|2014-04-24 03:
02:39
</pre>
## Release 5: Reflect
<!-- Add your reflection here -->
<pre> For this challenge I worked with Devin. Since I have SQL knowledge and my pair had already completed this challenge we wrapped up the challenge
  pretty quickly. We did get an error for the 'Alter table' part, but then we did a workaround to fix it. Overall it was a good learning experience
  especially with using SQLLite and practising simple SQL statements again. I liked working on this challenge and also learnt couple of new things 
  during the challenge.

What parts of your strategy worked? What problems did you face?

Since I have good SQL experience and my pair had completed the challenge we were able to complete the assignment failry quickly.

What questions did you have while coding? What resources did you find to help you answer them?

None for this challenge.

What concepts are you having trouble with, or did you just figure something out? If so, what?

None.

Did you learn any new skills or tricks?

How to use SQLITE3

How confident are you with each of the Learning Competencies?

Very confident 

Which parts of the challenge did you enjoy?

Writing SQL queries is always fun.

Which parts of the challenge did you find tedious?

None</pre>