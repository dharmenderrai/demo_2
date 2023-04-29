def rev_vowels(my_str: str) -> str:
    vowels = set('aeiouAEIOU')
    arr = []
    val = {}
    for idx, elem in enumerate(my_str):
        if elem in vowels:
            arr.append(idx)
            val[idx] = elem

    orig_new_tuple_list = list(zip(arr, arr[::-1]))
    
    for (orig, new) in orig_new_tuple_list:
        my_str = my_str[:orig] + val[new] + my_str[orig+1:]
    return my_str


my_str = "Hello World"
print(my_str)
print(rev_vowels(my_str))
