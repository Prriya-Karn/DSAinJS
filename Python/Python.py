# Write a python script to print types of variables. Create 5 variables each of them
# containing different types of data. (like 35, True, “MySirG”,5.46, 3+4j, etc)


# i = 35
# b = True
# s = "MysSirG"
# f = 5.46
# c = 3+4j


# print(type(i),type(b),type(s),type(f),type(c))

# Write a python script to print the id of two variables containing the same integer
# values.

# a = 5
# b = 5
# print(id(a))
# print(id(b))


#1. Write a python script to take your name as input from the user and then print it.

# name = input("enter the name")
# print(name)


# 2. Write a python script to take input from the user. Input must be a number.

# num = int(input("enter the number : "))
# print(num)


# 3. Write a python script which takes two numbers from the user,
#  then calculate their sum and display the result.

# num1 = int(input("enter the first number: "))
# num2 = int(input("enter the second number: "))

# sum = num1 + num2
# print("sum is:",sum)

# def sum(a,b):
    
#     return a+b

# res = sum(int(input("enter the first: ")),int(input("enter the second: ")))
# print(res+2)


# 4. Write a python script which takes the radius from the user 
# and display area of a circle.

# def area(r):
#     radius = 3.14 * r**2
#     return radius

# print(area(int(input("enter the radius: "))))

# 5. Write a python script to calculate the square of a number. 
# Number is entered by the user.

# def square(sq):
#     return sq**2

# print(square(int(input("enter the number: "))))




# 10. Write a python script to convert an integer to a string.

# num = 2
# print(type(str(num)))


# String:-
# methods:-
# index, count, startswith, endswith, lower,upper, slice, split, join, isalnum, isalpha, 

# s1 = "mySirG"
# s2 = "sir"
# print(s1[-6])   # indexing

# # len, min,max,sorted,sum

# print(len(s1))
# print(min(s1))

# print(s1[0]>s1[1])

# print(max(s1))

# print(sorted(s1))

# # concatenation
# print(s1+s2)

# # repetition operator
# print(s1*2)

# for i in s1:
#     print(i)


# # print("my" in s1)
# # print("Sir" not in s1)


# #comparison operator

# print("A">"B")


# Str object methods:-

# 1. index()

# S1 = "MySirG Education Services"

# print(S1.index("M"))
# print(S1.index("g"))    #error but in js get -1  if not found any element


# 2. count()
# print(S1.count("E"))
# print(S1.count("g"))


# 3. startswith() and endswith()

# print(S1.startswith("M"))
# print(S1.endswith("s"))

# 4. isdigit() and
# (isalnum() and isalpha()) => without space

# S1 = "MySirGEducationServices"
# S2 = "20"
# S3 = "1a2b3priya"
# print(S1.isdigit())
# print(S2.isdigit())

# print(S1.isalnum())
# print(S3.isalnum())

# print(S1.isalpha())
# print(S3.isalpha())


#5 isupper() and islower()
# S1 = "MySirGEducationServices"
# S2 = "20"
# S3 = "1a2b3priya"
# S4 = "PRIYA KARN"

# print(S4.isupper())
# print(S1.islower())
# print(S3.islower())


# 6. split() give the list and join()

# S1 = "MySirG Education Services"
# S2 = "20"
# S3 = "1a2b3priya"

# # print(S1.split(""))    #error
# print(S1.split(' '))
# print(S1.split("E"))

# print(' '.join(S1.split(' ')))



# 7. slicing

# S1 = "MySirG Edu cation Services"
# S2 = "20"
# S3 = "1a2b3priya"

# print(S1[0:10:2])
# print(S3[1:])
# print(S3[4:2])

# print(S3[2])
# print(S1[10:5:-1])

# # print(S1[0:10:1])   


# print(S1[::-1])



# Question:-
# Write a python script to Get the characters from the 
# start to position 5 (Given String “iNeuron” using the slice syntax)

# name = "iNeuron"
# print(name[:6])


# Write a python script to Get the characters from 
# position 2 to position 5 (Given String
# “Hello Learners” using the slice syntax)

# name = "Hello Learners"
# print(name[2:6])





# Write a python script to demonstrate String 
# Concatenation adding space in between (Given Strings a=”Learning” b=”Python” )

# a = "Learning"
# b = "Python"
# print(a+" "+b)


# Write a python script to get the count of total number of characters
#  in String a=“iNeuron”

# a= "iNeuron"
# print(len(a))
# sum = 0
# for i in a:
#     sum = sum + a.count(i)

# print(sum)


# Write a python script to reverse a String. (“iNeuron”)
# a= "iNeuron"

# print(a[::-1])


# Write a python script to check if a string contains only numbers.

# a = "23"

# print(a.isalnum())

# Write a python script to check if a string contains only characters of the alphabet.
# a= "iNeuron"
# print(a.isalpha())


# Write a python script to convert an integer to a string.

# a = 20
# print(type(str(a)))

# 1. Write a python script to create a String in 3 different possible ways
# string1 = 'Hello, World!'
# print(string1)

# # Using double quotes
# string2 = "Hello, World!"
# print(string2)

# # Using triple quotes
# string3 = '''Hello, World!'''
# print(string3)




#--------------------------------- List(mutable) start:------------------------------

# slicing, indexing, count, how to add element(append,insert), sort()
# how to delete element(del,pop,remove), how to edit ele,


# methods are available inside the list object and can be access
# the methods from list object

# Builtin methods:- (max,min,sorted,len,sum)


# l1 = [10,20,30,40,50,60,70,80]

# for i in l1:
#     print(i)

# print(l1[-1])

# 1. slicing:-
# print(l1[0:3])
# print(l1[0:5:2])
# print(l1[::-1])
# print(l1[0:6:-1])

l1 = [10,20,20,30,40,50,60,70,80]
# print(l1.count(20))
print(min(l1))
print(max(l1))

print(10>80)


#How to delete element

l1 = [10,20,30,40,50,60,70,80]
# del l1[2]
# l1.pop()
# l1.remove(50)
# print(l1)

#How to delete 20 in the list using for loop

# l1 = [10,20,30,40,50,60,70,80]

# # print(20 in l1)
# for i in l1:
#         if(i==20):
#             l1.remove(i)
#         print(i)



#how to edit an element of the list?

#How to delete 20 in the list using for loop

l1 = [10,20,30,40,50,60,70,80]

# l1[-2] = 100
# print(l1)
# print(len(l1))

# l1[8] = 90     #error 
# print(l1) 

#how to add element in the list

#How to delete 20 in the list using for loop

l1 = [10,20,30,40,50,60,70,80]
 
# l1[8] = 20   #cannot directly add element in the list.
# print(l1)

# there are two standard ways to add the element 
# 1. append() 2.insert() 
#listObject.append(value)
#listObject.insert(index,value)

# methods are available inside the list object and can be access the methods from list
# object

l1 = [10,20,30,40,50,60,70,80]

# l1.append(100)
# print(l1)
# l1.append(18)
# print(l1)

# l1.insert(2,200)
# print(l1)

# print(len(l1))

# l1.insert(100,90)       #here 100>8 then insert the value in the last position
# print(l1)


# l1 = [10,20,30,"priya",True,3+4j]
# print(min(l1))
# print(max(l1))
# print(sorted(l1))
# print(sum(l1))


l1 = [20,30,10,5,4,2]
print(sorted(l1))
print(sum(l1))

print(len(l1))


# comparison operator

l1 = [1,2,3]
l2 = [2,3,1]
l3 = [1,2,3,4,5]
l4 = [1,2,3]  

# print(l1==l2)
# print(l1==l3)
print(l1>l3)
print(l1<l3)
# print(l1==l4)

print(l1>l2)
print(l1>=l2)
print(l1>l4)
print(l1>=l4)



#concatenation operator

l1 = [1,2,3]
l2 = [2,3,1]
l3 = [1,2,3,4,5]
l4 = [1,2,3]  

print(l1+l3)
l1+=l2
print(l1)


# Repetition operator
l1 = [2,3,1]
print(l1*2)


#sort()

# l1 = [20,1,30,8,8]
# l1.sort(reverse=True)
# print(l1)

# list of list

# l1 = [[10,20,30],["priya","ankita","himmu"]]
# print(l1[-1][0])

# l1 = [[1,3,5],[2,1,8],[5,4,4]]

# for i in l1:
#     for j in i:
#         print(j,end=" ")
#     print()




