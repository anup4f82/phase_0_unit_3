# U3.W7: BONUS Using the SQLite Gem

# I worked on this challenge by myself

require 'sqlite3'


$db = SQLite3::Database.open "congress_poll_results.db"


def print_arizona_reps
  puts "AZ REPRESENTATIVES"
  az_reps = $db.execute("SELECT name FROM congress_members WHERE location = 'AZ'")
  az_reps.each { |rep| puts rep }
end

def print_longest_serving_reps(minimum_years)  #sorry guys, oracle needs me, i didn't finish this!
  puts "LONGEST SERVING REPRESENTATIVES"
  long_reps =  $db.execute("SELECT name FROM congress_members WHERE years_in_congress > #{minimum_years}")
 

  long_reps.each do |rep|

     year = $db.execute("SELECT years_in_congress FROM congress_members WHERE name = '#{rep[0]}'")

     puts "#{rep[0]} - #{year[0][0]}"
    
 end
end

def print_lowest_grade_level_speakers(grade)
  puts "LOWEST GRADE LEVEL SPEAKERS (less than < 8th grade)"
  low_grade = $db.execute("SELECT name from congress_members WHERE grade_current < #{grade}")
  low_grade.each {|rep| puts rep}
end


def print_state_rep(*states)
puts "State REPRESENTATIVES"
puts

states.each do |x|

state_rep = $db.execute("SELECT name from congress_members WHERE location = '#{x}'")
 
 puts "#{x} REPRESENTATIVES"
 puts 
 state_rep.each {|rep| puts "#{rep[0]}"}
 puts

end
	end

def print_separator
  puts 
  puts "------------------------------------------------------------------------------"
  puts 
end


print_arizona_reps

print_separator

print_longest_serving_reps(35)
# TODO - Print out the number of years served as well as the name of the longest running reps
# output should look like:  Rep. C. W. Bill Young - 41 years

print_separator
print_lowest_grade_level_speakers(8)
# TODO - Need to be able to pass the grade level as an argument, look in schema for "grade_current" column

# TODO - Make a method to print the following states representatives as well:
# (New Jersey, New York, Maine, Florida, and Alaska)
print_separator
print_state_rep("NJ","NY","ME","FL","AK")


##### BONUS #######
# TODO (bonus) - Stop SQL injection attacks!  Statmaster learned that interpolation of variables in SQL statements leaves some security vulnerabilities.  Use the google to figure out how to protect from this type of attack.

# TODO (bonus)
# Create a listing of all of the Politicians and the number of votes they recieved
# output should look like:  Sen. John McCain - 7,323 votes (This is an example, yours will not return this value, it should just 
#    have a similar format)
# Create a listing of each Politician and the voter that voted for them
# output should include the senators name, then a long list of voters separated by a comma
#
# * you'll need to do some join statements to complete these last queries!


# REFLECTION- Include your reflection as a comment below.

# How does the sqlite3 gem work?  What is the variable `$db` holding?  

# $db holds the Database congress_poll_results. 

# Try to use your knowledge of ruby and OO to decipher this as well as h
# ow the `#execute` method works.  Take a stab at explaining the line 
# `$db.execute("SELECT name FROM congress_members WHERE years_in_congress 
#   > #{minimum_years}")`.  Try to explain this as clearly as possible for 
# your fellow students.  


# the $db.execute statement, will execute the SQL statement that we pass in the parantheses () and stores the result in an array. 



# If you're having trouble, find someone to pair on this explanation with you.

# What parts of your strategy worked? What problems did you face?

# Initially I had some trouble when I ran the command sqlite3 congress_poll_results.db, but then figured out what I was doing wrong.
# Also when I was debugging the code I had to run it multiple times before I got it right. I realized when you store the result of the 'db.execute'
# in a variable its a nested array.

# What questions did you have while coding? What resources did you find to help you answer them?

# Just had to execute the code multiple times before I understood how to fix it.

# What concepts are you having trouble with, or did you just figure something out? If so, what?

# Since this was the first time I was running code with db.execute statements it took some time. I had fun though with knowing how the Ruby code
#interacts with Database

# Did you learn any new skills or tricks?

# How to use Ruby code to interact with Database

# How confident are you with each of the Learning Competencies?

# Very confident 

# Which parts of the challenge did you enjoy?

# Coding and writing sql queries is always fun

# Which parts of the challenge did you find tedious?

# None