---
title: How to communicate common Data Structure through text!
draft: false
description: Data Structures and Algorithms, coding interview tricks!
tags:
---

<div class="article-header green-white">

<div>

<div class="decorative-element"></div>

# Reminder to be efficent!

Arrays, Trees, and more!

</div>

<img loading="lazy" role="img" src="./cat_excited.png">

</div>

---
## Why?

In coding interviews, it's good practice to show in the coderpad what you mean. 
However, when diagraming complex structures like trees in common to lack proficiency with the text editors. Here are some reminders! 
## Arrays

```python
arr = [1, 2, 3, 4, 5]
```
So a common array? How can we use this to explain our solution!
Common algorithms we do on arrays include the indices like two pointers or traversing a list.
Lets label the indices!

```python
#      0  1  2  3  4
arr = [1, 2, 3, 4, 5]
```
How do we do two pointers? Same idea, just have i and j or left and right pointer on **separate lines!**
```python
#      0  1  2  3  4
arr = [1, 2, 3, 4, 5]
#      i
#                  j
```

## LinkedList
See this?
```python
# [1] -> [2] -> [3] -> None
```
Don't. Do this.
```python
# 1 2 3
```
Reminder to tell your interview that this is in fact a LinkedList.

## Strings
Same idea with Arrays!
```python
#    12345
s = "abcde"
#    i
#        j
```

## Matrices:
This takes too long!
```python
'''
[[1,0,0,0,0],
 [1,1,1,1,1],
 [1,0,0,0,0]]

Just do this.

10000
11111
10000

Need to label the start and end?
S and E.
S0000
11111
1000E

Mark common paths algos with x!

x0000
xxxxx
1000x

Wanna be fancy with BFS?
Use numbers to show the order!

S1234
12345
23456
'''
```

## Trees
On my meta interview, I remember putting a lot of effort making a cool looking tree... probably wasn't worth the effort..
```python
'''
        A
       / \
      B   C
     / \   \
    D   E   F
   /   / \   \
  G   H   I   J

This is better.

    A  
   B C  
  D E F  
 G H I J  

This is the best
	A
   B
  D E

You only need to explain the base case (what happens if we hit a leaf)
and a recursive case (Where there are children!)

'''
```


See ya, <a target="_blank" rel="noopener noreferrer" href="https://www.brodypen.com/">--Brody<a>
