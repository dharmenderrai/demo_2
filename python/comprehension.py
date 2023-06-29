# list comprehension
a = [1, 2, 3, 4, 5]
b = [2*e for e in a]
# for e in a:
#     b.append(2*e)
# print(a)
# print(b)

# Set data structure
a = [1, 1, 3, 2, 3, 4, 5]
b = set(a)
print(a)
print(b)
# Set Comprehension
b = {2*e for e in a}
print(b)
