# U3.W7: Modeling a Real-World Database (SOLO CHALLENGE)

## Release 0: Users Fields

<pre> 
Name
twitter_handle
Location
Website
Bio
</pre>

## Release 1: Tweet Fields
<!-- Identify the fields Twitter uses to represent/display a tweet. What are you required or allowed to enter? -->

<pre>
Name
Created_at
Tweet
Favourite
Location
</pre>
## Release 2: Explain the relationship
<pre>
The relationship between `users` and `tweets` is: 

Its a One to Many relationship. One User can have multiple tweets. 
</pre>
## Release 3: Schema Design
<!-- Include your image (inline) of your schema -->

## Release 4: SQL Statements
<!-- Include your SQL Statements. How can you make markdown files show blocks of code? -->
<pre>
all the tweets for a certain user id

Select * from tweets where user_id = '123';
</pre>

<pre>
the tweets for a certain user id that were made after last Wednesday (whenever last Wednesday was for you)

Select * from tweets where user_id = '123' and created_at > '04/16/2014';
</pre>

<pre>
all the tweets associated with a given user's twitter handle

Select b.tweet 
from users a JOIN tweets b 
ON a.id = b.user_id
where a.twitter_handle = 'aap4f82';
</pre>

<pre>
the twitter handle associated with a given tweet id

Select a.twitter_handle 
from users a JOIN tweets b
ON a.id = b.user_id
where b.id = '100'
</pre>
## Release 5: Reflection
<!-- Be sure to add your reflection here!!! -->