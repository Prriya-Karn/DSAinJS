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
# how to delete element(del,pop,remove), how to edit ele, comparison, repetition,concat


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
# # print(l1[0:6:-1])

# l1 = [10,20,20,30,40,50,60,70,80]
# # print(l1.count(20))
# print(min(l1))
# print(max(l1))

# print(10>80)


#How to delete element

l1 = [10,20,30,40,50,60,70,80]
# del l1[2]
# l1.pop()
# l1.remove(50)
# print(l1)

#How to delete 20 in the list using for loop

l1 = [10,20,30,40,50,60,70,80]

# print(l1[1])
# from backward direction:-
# for i in range(len(l1)-1,0,-1):
#    if l1[i] == 20:
#       del l1[i]
       
# print(l1)

# # or

# res = []
# for i in range(0,len(l1)):
#     if l1[i] != 20:
#         res.append(l1[i])

# print(res)



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


# l1 = [20,30,10,5,4,2]
# sorted(l1)
# print("sorted", l1)

# # print(sum(l1))

# # print(len(l1))


# # comparison operator

# l1 = [1,2,3]
# l2 = [2,3,1]
# l3 = [1,2,3,4,5]
# l4 = [1,2,3]  

# # print(l1==l2)
# # print(l1==l3)
# print(l1>l3)
# print(l1<l3)
# # print(l1==l4)

# print(l1>l2)
# print(l1>=l2)
# print(l1>l4)
# print(l1>=l4)



# #concatenation operator

# l1 = [1,2,3]
# l2 = [2,3,1]
# l3 = [1,2,3,4,5]
# l4 = [1,2,3]  

# print(l1+l3)
# l1+=l2
# print(l1)


# # Repetition operator
# l1 = [2,3,1]
# print(l1*2)


# #sort()

# # l1 = [20,1,30,8,8]
# # l1.sort(reverse=True)
# # print(l1)

# # list of list

# # l1 = [[10,20,30],["priya","ankita","himmu"]]
# # print(l1[-1][0])

# # l1 = [[1,3,5],[2,1,8],[5,4,4]]

# # for i in l1:
# #     for j in i:
# #         print(j,end=" ")
# #     print()



# # -----------------------------------list comprehension-----------------------------

# # l4 = [x*3 for x in range(5)]
# # print(l4)

# # # or

# # l4 = range(5)

# # for x in list(l4):
# #     print(x*3)







# #------------------------------------ range------------------------------

# #immutable, can contain only int type value, range create AP with same common difference
# print("range")
# # r = range(0,5,2)
# # print(list(r))

# # for i in range(0,5):
# #     print(i)


# # for i in range(4):
# #     print(i)


# # for i in range(5,1,-1):
# #     print(i)

# # #    5, 5-1=4, 4-1=3, 3-1 =2=>   5,4,3,2




# # for i in range(5,1,1):
# #     print(i)

# # # 5, 5+1=6, 6+1=7 so empty range object


# # for i in range(-10):
# #     print(i)

# # # 0, 0+1:1, 1+1:2, 2+1:3  


# # for i in range(2,10,2):
# #     print(i)

# # # 2, 2+2:4, 4+2:6






#------------------------------------------- tuple------------------------------------

# slicing, indexing, count, 
# how to add element(append,insert), not support because tuple is immutable
# how to delete element(del,pop,remove) not support in tuple, 
# how to edit ele,not support (tuple is immutable)

# comparison, repetition,concat
# sort() not support


# t0 = ()
# print(type(t0))
# t1 = (10,20,30)
# print(t1)

# t2 = (10)   #not a tuple
# print(type(t2))

# t2 = (10,)  # now it is a tuple
# print(type(t2))

# l = [10,20,40]

# t3 = 10,20,30
# print(type(t3))

# print(t3)
# # for i in range(0,len(t3)):
# #     print(t3[i])

# print(t3[0:3:2])
# print(sum(t3))

# print(min(t3))

# print(t3.isalnum())

# t3[0] = "ankita"      #cannot edit the element
# t3[1] = "himanshu"
# print(t3)
# print(t3.count(10))

# del l[0]       #not support delete in tuple
# print(l)

# t3.remove(20)
# print(t3)

# t3.pop()
# print(t3)



# t1 = (1,2,3,4)
# t2 = 3,4,5

# print(t1+t2)
# print(t1>t2)

# print(t2>t1)


# res  = tuple([x*3 for x in t1])
# print(res)


# Set class is mutable, set is not a sequence, then slicing operator not work, 
# index not work
# set cannot have duplicate value
# concat and repetition not support


# #set object methods:- position not matter, anywhere data add, remove, update etc.
# add(), update(),discard,remove,intersection,union,clear,is subset, is superset,pop



# s1 = {1,2,2,3,7,5,2,"priya"}
# s2 = {100,"priya"}
# s3 = {1}
# # print(s1[0]) not work

# s1[0] = 20     # not support


# for i in s1:
#     print(i)

# s1.add(100)
# s1.add("priya")
# print(s1)

# s1.remove(2)
# print(s1)

# print(s1.union(s2))
# print(s1.intersection(s2))
# print(s2.intersection(s3))


# s1.update({18})
# print(s1)

# def sum(a,b):
#     print(a+b)

# sum(2,3)


print("oop start")

# class Test:
#     #class object variable create
#     x = 5
#     y = 3

#     #instance method
#     def f1(self):
#         print("Hello")
#         Test.z = "priya karn"
#         print(Test.z)

#     @staticmethod
#     def f2():
#         print("priya")
#         Test.d = "ankita karn"
#         print(Test.d)

#     @classmethod
#     def f3(cls):
#         print("hi class")
#         Test.h = "himanshu karn"
#         print(Test.h)

# #instance object variable create:-
#     def __init__(self,a):          # self = t1   now self is the instance object and a=3 object var access with the help of dot
#         self.a = a



    
        
        
    

# t1 = Test(30)       # __init__(t1,3) automatically call and pass
# t1.f1()  # f1(t1)
# print(t1.a)


# t1.b = 100
# print("instance object variable create",t1.b)

# t1.f2()
# t1.f3()   #f3(Test) automatically pass Test class

# print(t1.x)
# print("class object variable access",Test.x)
# print(t1.y)

# print(Test.h)

# Test.f2()
# Test.f3()    # f3(Test) class object pass automatically 

# Test.f1()   # error

# Test.x4 = 200    # class object variable create and access
# print(Test.x4)


# class Person:
#     weight = 50
#     height = 182


#     def running(self):
#         print("running")

    
#     @staticmethod
#     def walking():
#         print("walking")

#     @classmethod
#     def smiling(cls,dob):
#         print("smiling")
#         cls.dob = dob
#         print(cls.dob)

#     def __init__(self,a):
#         self.a = a
        

# priya = Person(20)
# print(priya.a)

# priya.running()    # running(priya) instance object pass
# priya.walking()
# priya.smiling(18)    # class method call and smiling(priya) instance object pass automatically





# 1. Write a python program to create a user 
# class with 3 properties : name, age, email.

# class user:
#     def __init__(self,name,age,email):
#         self.name = name
#         self.age = age
#         self.email = email

# #instance method defination
#     def data(self,Name,Age,Email):
#         self.n = Name
#         self.a = Age
#         self.e = Email


#     @classmethod
#     def classData(cls,name):
#         cls.c = name

        
        




# Priyadata = user("Priya Karn",24,"priya.karn.2000@gmail.com")    # init(Priyadata) automatically call and pass instance object

# print(Priyadata.name,Priyadata.age, Priyadata.email)

# Priyadata.data("p",2,"opjkjakfs")
# print(Priyadata.n,Priyadata.e,Priyadata.a)

# Priyadata.classData("priya")
# print(Priyadata.c)



# 2. Write a python program to create a user class with a method to greet the user.

# class user:
#     @staticmethod
#     def greetUser(name):
#         user.a = "ankita" 
#         # print("Good Morning",name)
#         return name
    

       



# u = user()

# print("Good Morning",u.greetUser(input("enter your name:")))
# print( user.a)





# # 3. Write a python program to create 2 objects of the user class and assign different
# # values.

# class user:
#     def __init__(self,name,dob):
#         self.n = name
#         self.d = dob



# priya = user("priya",18)
# ankita = user('ankita',14)
# himanshu = user('''himanshu''',7)
# print(priya.n)
# print(ankita.d)
# print(himanshu.n)




# 4. Write a python program to init default values for
#  user object using __init__ method.

# output:- User with defaults: Default Name, 0, default@example.com

# class user:
#     def __init__(self,defaultName,id,email):
#         self.defaultName = defaultName
#         self.id = id
#         self.email = email


# u = user("Default Name",0,"default@example.com")
# print("user with defaults:{u.defaultName},{u.id},{u.email}")







# 5. Write a python program to delete the age property of the user.

# class user:
#     def __init__(self,name,age):
#         self.name = name
#         self.age = age
        
        



# u = user("priya",24)
# del u.age

# print(u.age)



# 6. Write a python program to create 3 user objects and find the youngest of all.
# Uses f-strings to correctly format the output.

# class user:
#     def __init__(self,age):
#         self.age = age
       


# priya  = user(24)
# ankita = user(20)
# himanshu = user(16)

# if(priya.age<ankita.age and priya.age<himanshu.age):
#     print(f"{priya.age} is younger")
# elif(ankita.age<priya.age and ankita.age<himanshu.age):
#     print(f"{ankita.age} is younger")
# else:
#     print(f"{himanshu.age} is younger")




# 7. Write a python program to create a Laptop class with 4 attributes 
# (brand, ram, cpu, hdd) and 2 methods
# (showConfig() to print the values, __init__() to initialize the values).





# 9. Write a python program to create a School class and 3 instance variables
#  and 1 class variable.


class School:
    @classmethod
    def classVariable(cls,x):
        cls.x = x

    def instanceVariable(self,a,b,c):
        self.a = a
        self.b = b
        self.c = c


getdata = School()
getdata.classVariable(5)
getdata.instanceVariable(2,3,4)



