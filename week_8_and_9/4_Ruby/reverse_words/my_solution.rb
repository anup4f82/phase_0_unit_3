# U3.W8-9: Reverse Words


# I worked on this challenge by myself

# 2. Pseudocode

# Create a method called reverse_words that takes argument as word
   # Create an array called word by using split method
   # declare a empty array called 


# 3. Initial Solution
# def reverse_words(word)
    
    
    
#    word =  word.split(" ")
#     b = []
#     word.each do |x|
#         y = x.reverse
#         b << y
#     end
#  b.join(' ') 

# end





# 4. Refactored Solution


def reverse_words(word)
    
    
    
   word =  word.split(" ")
    result = []
    word.each do |x|
        y = x.reverse
        result << x.reverse
    end
 result.join(' ') 

end



# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

def random_word(length = 5)
  rand(36**length).to_s(36)
end

def assert
    
  raise "Assertion failed" unless yield 
end

 

assert {reverse_words("") == "" }
word = random_word
assert {reverse_words(word) == word.reverse}
 word1 = random_word
  word2 = random_word
assert {reverse_words("#{word1} #{word2}") == "#{word1.reverse} #{word2.reverse}"}
assert {reverse_words("Ich bin ein Berliner") == "hcI nib nie renilreB"}





# 5. Reflection 

# What parts of your strategy worked? What problems did you face?

# I didnt face any problems for this challenge

# What questions did you have while coding? What resources did you find to help you answer them?

# I had used reverse before, but just had to check and confirm if I can use it.


# What concepts are you having trouble with, or did you just figure something out? If so, what?

# None



# Did you learn any new skills or tricks?

#reverse method


# How confident are you with each of the Learning Competencies?

# Very

# Which parts of the challenge did you enjoy?

# The rspec passing is satisfying


# Which parts of the challenge did you find tedious?

# none