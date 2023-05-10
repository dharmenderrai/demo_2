def mode(lst):
    counts = {}    
    for item in lst:
        counts[item] = counts.get(item, 0) + 1
    max_count = 0
    mode_value = None
    for item, count in counts.items():
        if count > max_count:
            max_count = count
            mode_value = item
    return mode_value


def three_odd_numbers(lst):
    for i in range(len(lst) - 2):
        if (lst[i] + lst[i+1] + lst[i+2]) % 2 != 0:
            return True
    return False


def valid_parentheses(parentheses):
    stack = []
    for p in parentheses:
        if p == "(":
            stack.append(p)
        elif p == ")":
            if not stack:
                return False
            stack.pop()
    return not stack


if __name__ == "__main__":
    # print(valid_parentheses("((((((((((((()))))))))))"))
    # print(valid_parentheses(f"())"))
    # print(valid_parentheses("()("))
    # print(three_odd_numbers([5, 2, 1]))
    # print(three_odd_numbers([0, -2, 4, 1, 9, 12, 4, 1, 0]))
    # print(mode([2, 2, 3, 3, 2]))
    # print(mode([1, 2, 1]))
