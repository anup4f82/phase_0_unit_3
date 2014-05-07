# U3.W8-9: OO Basics: Student


# I worked on this challenge  with Devin

# 2. Pseudocode

# Create a class called students with attr accessor methods for scores,first_name and average
# Create a initializer method that takes arguments as name,scores 
# Set @first_name = name
# Set @scores = scores
# Set @average = total of elements of @scores array/length of @scores

# Create a method called letter_grade

# case @average
# when 90..100 return A
# when 80..89 return B
# when 70..79 return C
# when 60..69 return D
#else return E

# Create a empty array called students
# create a object called alex for Student class with arguments "Alex" and scores [100,100,100,0,100] and push it to students array
# create a object called sara for Student class with arguments "Sara" and scores [90,80,85,95,70] and push it to students array
# create a object called mike for Student class with arguments "Mike" and scores [75,90,68,55,90] and push it to students array
# create a object called mark for Student class with arguments "Mark" and scores [90,86,55,69,90] and push it to students array
# create a object called tim for Student class with arguments "Tim" and scores [90,99,100,76,87] and push it to students array

# Create a Method called linear_search that takes argument as student_list and name

# Loop through each element of array student_list
# if array element.first_name = name
# return the index of element
#else return -1
#end



# 3. Initial Solution
=begin
class Student
  attr_accessor :scores, :first_name

  def initialize(name,scores)   #Use named arguments!
    @first_name = name
    @scores = scores
  end
  
  def average
    avg = 0
    @scores.each do |x|
    avg += x
    end
    return avg / @scores.length
  end
  
  def letter_grade
    case self.average
    when 90..100
      "A"
    when 80..89
      "B"
    when 70..79
      "C"
    when 60..69
      "D"
    else
      "F"
    end
  end
  
end

students = []
students << alex = Student.new("Alex",[100,100,100,0,100])
students << sara = Student.new("Sara",[90,80,85,95,70])
students << mike = Student.new("Mike",[75,90,68,55,90])
students << mark = Student.new("Mark",[90,86,55,69,90])
students << tim = Student.new("Tim",[90,99,100,76,87])

def linear_search(student_list, name)
  student_list.each do |x|
    if x.first_name == name
      return student_list.index(x)
    end
  end
  return -1
end
=end
# 4. Refactored Solution

class Student
  attr_accessor :scores, :first_name, :average

  def initialize(name,scores)   #Use named arguments!
    @first_name = name
    @scores = scores
    @average = @scores.reduce(:+) / @scores.length
  end
  
  def letter_grade
    case @average
    when 90..100
      "A"
    when 80..89
      "B"
    when 70..79
      "C"
    when 60..69
      "D"
    else
      "F"
    end
  end
  
end

students = []
students << alex = Student.new("Alex",[100,100,100,0,100])
students << sara = Student.new("Sara",[90,80,85,95,70])
students << mike = Student.new("Mike",[75,90,68,55,90])
students << mark = Student.new("Mark",[90,86,55,69,90])
students << tim = Student.new("Tim",[90,99,100,76,87])

def linear_search(student_list, name)
  student_list.each do |student|
    if student.first_name == name
      return student_list.index(student)
    end
  end
  return -1
end





# 1. DRIVER TESTS GO BELOW THIS LINE
# Tests for release 0:

p students[0].first_name == "Alex"
p students[0].scores.length == 5
p students[0].scores[0] == students[0].scores[4]
p students[0].scores[3] == 0


# Tests for release 1:

p students[0].average == 80
p students[0].letter_grade == 'B'

# Tests for release 2:

p linear_search(students, "Alex") == 0
p linear_search(students, "NOT A STUDENT") == -1







# 5. Reflection 




# What parts of your strategy worked? What problems did you face?

#  Didnt face any problems as such. Had to think a bit on how to create the students array. 

# What questions did you have while coding? What resources did you find to help you answer them?

# Had to research on linear_search


# What concepts are you having trouble with, or did you just figure something out? If so, what?

# None



# Did you learn any new skills or tricks?

# linear_search


# How confident are you with each of the Learning Competencies?

# Very

# Which parts of the challenge did you enjoy?

# I paired with Devin and he showed me how to use case statements


# Which parts of the challenge did you find tedious?

# None