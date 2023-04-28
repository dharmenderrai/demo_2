def countWords(word, letter):
    count = 0
    for elem in word:
        if (elem == letter):
            count += 1
    return count



def main():
    word = "Hello"
    letter = 'l'
    print(countWords(word, letter))


if __name__ == "__main__":
    main()