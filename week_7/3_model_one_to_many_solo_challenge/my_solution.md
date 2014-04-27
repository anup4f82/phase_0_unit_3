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

![Twitter](https://github.com/anup4f82/phase_0_unit_3/blob/master/week_7/images_anup/twitter.JPG?raw=true)
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

<pre>Though I have a Twitter account, I have never used twitter before. On seeing the tweet form I like how simple it is with minimal fields.
I wasn't sure if I need to add the 'reply' ,'photo' etc as fields. I believe I dont need to. For the profile page it was easy to determing which 
fields will go in the users table. Overall it was a good learning experience to play around with 'tweets'. Writing SQL queries again was 
straightforward for this challenge.

What parts of your strategy worked? What problems did you face?

Trying to figure out the fields used when you create a tweet took some thinking.

What questions did you have while coding? What resources did you find to help you answer them?

Just had to think about what possible fields I should add to the tweets table

What concepts are you having trouble with, or did you just figure something out? If so, what?

None.

Did you learn any new skills or tricks?

Creating Database relationships

How confident are you with each of the Learning Competencies?

Fairly confident 

Which parts of the challenge did you enjoy?

Creating 

Which parts of the challenge did you find tedious?

None
</pre>