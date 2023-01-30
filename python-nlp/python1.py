
import spacy


nlp = spacy.load('en_core_web_sm')

lobsterSong = open('lobsterTaxSong1.txt', 'r')
words = lobsterSong.read()
wordstrings = str(words)
print(wordstrings)

count = 0
for w in wordstrings:
    count += 1
    print(count, ": ", w)


lobsterSong = nlp(wordstrings)
for token in lobsterSong:

    print(token.text, "---->", token.pos_, ":::::", token.lemma_)


grimmFile = open('lobsterTaxSong2.txt', 'r')
doc2 = grimmFile.read()
docstring = str(doc2)
print(doc2)

nlpGrimm = nlp(docstring)
for token in nlpGrimm:
    print(token.text, "--->", token.pos_)