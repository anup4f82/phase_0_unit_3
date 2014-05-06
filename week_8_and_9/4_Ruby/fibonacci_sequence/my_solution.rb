# U3.W8-9: 


# I worked on this challenge [by myself]

# 2. Pseudocode

# Define a function called is_fibonacci? that takes argument as num
# Create a array called fib with values 1,1
# Set variable a = 1
# While a < num
   # a = fib[last element] + fib[last but one element]
   # push a to fib
   #end

   # if fib[last element] = num
   #return true
   #else return false
   #end



# 3. Initial Solution


def is_fibonacci?(num)

fib = [1,1]

a = 1

while(a<num)

a = fib[fib.length-1]+fib[fib.length-2]
fib << a


end
if fib[fib.length-1] == num
    return true
else
    false
end
end


# 4. Refactored Solution






# 1. DRIVER TESTS GO BELOW THIS LINE

def random_fibonacci
   [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946].sample
end

def assert
    
  raise "Assertion failed" unless yield 
end

 

assert {is_fibonacci?(random_fibonacci) == true}
assert {is_fibonacci?(8670007398507948658051921) == true}
assert {is_fibonacci?(random_fibonacci+100) == false}
assert {is_fibonacci?(927372692193078999171) == false}








# 5. Reflection 


# 5. Reflection 

# What parts of your strategy worked? What problems did you face?

# Had to read up on fibonacci sequence. Once I understood the logic it was fairly easy to code

# What questions did you have while coding? What resources did you find to help you answer them?

# fibonacci sequence


# What concepts are you having trouble with, or did you just figure something out? If so, what?

# None



# Did you learn any new skills or tricks?

# No


# How confident are you with each of the Learning Competencies?

# Very

# Which parts of the challenge did you enjoy?

# Writing ruby code is always fun


# Which parts of the challenge did you find tedious?

# None