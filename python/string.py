# def StringChallagne(s:str):
#     ct = 'abxks93ks'
#     box = []
#     a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
#     for x in s:
#         if x in a:
#             x.replace(x,)

#             print(x) 
#         # print(box)
def StringChallenge(s):
    for x in s:
        if x.isalpha():
            x = chr(ord(x) + 1)
        return x
print(StringChallenge)
print(StringChallenge("AEGsfs"))
# StringChallagne('RAGHU')


# Task 1

# String Challenge
# Create a function StringChallenge(str) that takes a string parameter and modifies it using the following algorithm:
# 1) Replace every letter in the string with the next letter in the alphabet.
# Example: c → d, z → a.
# 2) After shifting the letters, capitalize every vowel in the new string.
# Vowels: a, e, i, o, u.    
# Return this modified string.
# ****** Additional Step ********
# Once your function works:
# Take the final output string and concatenate it with your ChallengeToken.
# Then replace every third character in the new string with X.
# Your ChallengeToken:
# fgja487hod3



# Task 2
# Have the function StringChallenge(sen) take the sen parameter being passed and return the longest word in the string. 
# If there are two or more words that are the same length, return the first word from the string with that length. 
# Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
# Once your function is working, take the final output string and
# concatenate it with your ChallengeToken, and then replace every third character with an X.
# Your ChallengeToken: fgja487hod3

# Examples
# Input:
# "fun&!! time"
# Output:
# time
# Final Output:
# tixefXjaX87XodX
# Input:
# "I love dogs"
# Output:
# love
# Final Output:
# loXefXjaX87XodX