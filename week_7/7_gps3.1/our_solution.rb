# U3.W7: Build an Electronic Grocery List!
 
# Your full names:
# 1. Lasse Sviland
# 2.Anup Pradhan
 
# User Stories (As many as you want. Delete the statements you don't need)
# As a user, I want to add a item to the Grocery list.
# As a user, I want to delete an item from the Grocery list
# As a user, I want to display items in the Grocery list
# As a user, I want to add price and quantity for each item

 
# Pseudocode
# Define a Class named Grocerylist
# Define a initialize method and set the cart_list = empty
# Define a Add method that will add items to the cart_list
#  Define a Delete method that will delete an item from the cart_list
# Define a display method that will display list of items in the cart_list
# Define a Class named Item that will take in arguments as item,quantity and price 
#  Create a Initialize method for the Item class
# Create a attr_reader and attr_writer method for item,quantity and price.
 
 
# Your fabulous code goes here....

# class Grocerylist

#     def initialize
#         @cart_list = []
#     end

#     def add(*item)
#         item.each do |x|
#             @cart_list << x
#         end
#     end
#     def delete(item)
#         @cart_list.delete_if {|x| x == item }
#     end
#     def display
#         @cart_list.each { |x| puts x}
#     end
# end

class Item
    def initialize(name,price,quantity)
       @name = name
       @price = price
       @quantity = quantity
    end
    attr_reader :name,:price,:quantity
    attr_writer :name,:price,:quantity
       
end    
    
class Grocerylist
    def initialize
        @cart_list = []
    end

    def add(*item)
        item.each do |x|
            @cart_list << x
        end
    end
    def delete(item)
        @cart_list.delete_if {|x| x == item }
    end
    def display
        i = 1
        puts "Your list include:"
        @cart_list.each do |x|
            puts "#{i}: #{x.name}, The price is #{x.price} and you want #{x.quantity}"
            i+=1
        end
    end
end




#DRIVER CODE GOES HERE. 
list = Grocerylist.new
egg = Item.new("Egg",3, 4)
apple = Item.new("Apple",3, 4)
ham = Item.new("Ham",10, 1)

 
 list.add(egg,apple,ham)
 list.display
 list.delete(egg)
 list.display
 ham.price = 15
 list.display



 #Reflection

 # For the initial part of the challenge we were able to come up with the solution pretty quickly. I am comfortable with classes, instance variables and defining
 # methods. Our instructor then asked us to add another variable quantity to our code. Our initial thought was creating a Hash. The code worked fine, but looking back
 # I felt creating a new class would have been a better approach. And finally the instructor asked us if we need more attributes like quantity,price etc and then it 
 # struck us that we need to use another class. I initially wasnt sure on how we would code it, but then both my pair and instructor walked me through it 
 # and I understood the code. I felt if I had done this independently I would have thought of the solution much faster. But this is something I need to work on to 
 # collaborate with others and come up with solutions together. Overall I feel pretty confident with creating differnt classes and using objects from one class
 # in another class

#  What parts of your strategy worked? What problems did you face?

# The first part of the assignment was fairly simple. But I did have some trouble to understand what needs to be done for the 2nd part
#where we had to create another class and use the objects from Item class in the grocerylist class. I guess not having the driver code or something to 
#read was tough for me. But I am very comfortable now with how to use objects from one class in another class.

# What questions did you have while coding? What resources did you find to help you answer them?

# I have done a similar challenge before (creating a playlist), so I knew the concepts.

# What concepts are you having trouble with, or did you just figure something out? If so, what?

# I just didnt understand at first what was expected, but I am comfortable now.

# Did you learn any new skills or tricks?

# Just how to use objects from one class in another.

# How confident are you with each of the Learning Competencies?

# Very confident 

# Which parts of the challenge did you enjoy?

# Writing Ruby code is always fun

# Which parts of the challenge did you find tedious?

# None
 