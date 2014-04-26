# U3.W7: Designing Schemas


#### I worked on this challenge [by myself, with: ]


## Release 0: Student Roster Schema
<!-- display your image inline here -->
![Student](https://github.com/anup4f82/phase_0_unit_3/blob/master/week_7/images_anup/student_2.JPG?raw=true)

## Release 1: One to Many Schema
<!-- display your image inline here -->
![One_to_Many](https://github.com/anup4f82/phase_0_unit_3/blob/master/week_7/images_anup/one_to_many.JPG?raw=true)

## Release 2: One to One Schema
<!-- display your image inline here -->
![One_to_One](https://github.com/anup4f82/phase_0_unit_3/blob/master/week_7/images_anup/one_to_one.JPG?raw=true)

## Release 3: Many to Many Schema
<!-- display your image inline here -->

![Many_to_Many](https://github.com/anup4f82/phase_0_unit_3/blob/master/week_7/images_anup/many_to_many.JPG?raw=true)

## Release 4: Design your own Schema

Description of what you're modeling: 

<pre> One-to-one : For the One-to-one I have a simple model of a Customers table with customer information and Contacts table with 
	Customer address  information. In this case a particular Customer can only have one address.

	Many-to-Many: For the Many-to-Many , I have three tables a Customer table with customer information, A Phone table that stores the
	Customers Mobile Nos and  handsetIDs. I have a foreign key 'customerid' in this table that points to the Primary key in the customers table
	And lastly I have a handsets table that stores all the handsets and their type,description etc. The HandsetID in the Phones table is the foreign key to
	the id column in the handset table
</pre>
<!-- display your one-to-one image inline here -->
![Anup_one_to_One](https://github.com/anup4f82/phase_0_unit_3/blob/master/week_7/images_anup/Anup_one_to_One.JPG?raw=true)
<!-- display your many-to-many image inline here -->

![Anup_many_to_many](https://github.com/anup4f82/phase_0_unit_3/blob/master/week_7/images_anup/Anup_many_to_many.JPG?raw=true)

## Release 5: Reflection

<pre>I am pretty confident in writing SQL queries and syntax. Building a Database model is something I havent done before. Although I am comfortable writing SQL queries, if someone had asked me before on concepts like foreign key, many-to-many relationships etc, I would have struggled to answer them.I do feel a bit more confident now after having done this exercise, though I admit I still need to read up a lot more to fully grasp the concepts.
Between writing queries and databse modelling I am definitely more comfortable with the former.
</pre>