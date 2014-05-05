# U3.W8-9: 


# I worked on this challenge by myself

# 2. Pseudocode

# Create a method called super_fizzbuzz that takes in array as argument
  # create an empty array called result
  # Loop through the array using each
   #   if x  % 15 = 0
    #      add "FizzBuzz" to the result array
      #      elseif x % 5 = 0
      #      add "Buzz" to the result array

      #     elseif x % 3  = 0
      #     add "Fizz" to the result array

      # else add the array element to the result array

  # return result



# 3. Initial Solution

#  def super_fizzbuzz(array)

# result= []
# array.each do |x|
    
#     if x % 15 == 0
#         result << "FizzBuzz"
#         elsif x % 5 == 0
#         result << "Buzz"
#         elsif x % 3== 0
#         result << "Fizz"
#     else
#         result << x
#     end
    
# end
# return result
# end





# 4. Refactored Solution


 def super_fizzbuzz(array)

result= []

array.each do |x|
    
    if x % 15 == 0
        result << "FizzBuzz"
        elsif x % 5 == 0
        result << "Buzz"
        elsif x % 3== 0
        result << "Fizz"
    else
        result << x
    end
    
end
 result
end





# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

def random_input_array(base, size)
  (1..size).map { |i| base**(1+rand(15)) }
end

def assert
    
  raise "Assertion failed" unless yield 
end

 

assert {super_fizzbuzz(random_input_array(3,100)) == ["Fizz"]*100}
assert {super_fizzbuzz(random_input_array(5,100)) == ["Buzz"]*100}
assert {super_fizzbuzz(random_input_array(15,100)) == ["FizzBuzz"]*100}
assert {super_fizzbuzz([1,2,3]) == [1,2,'Fizz']}
assert {super_fizzbuzz([15, 5, 3, 1]) == ['FizzBuzz', 'Buzz', 'Fizz', 1]}







# 5. Reflection 

# What parts of your strategy worked? What problems did you face?

# Having done lot of ruby assignments this was pretty easy

# What questions did you have while coding? What resources did you find to help you answer them?

# None for this exercise


# What concepts are you having trouble with, or did you just figure something out? If so, what?

# None



# Did you learn any new skills or tricks?

#No


# How confident are you with each of the Learning Competencies?

# Very

# Which parts of the challenge did you enjoy?

# Writing ruby code is always fun


# Which parts of the challenge did you find tedious?

# None