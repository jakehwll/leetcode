def fizzbuzz(n: int):
    output = []
    i = 0
    while ( i < n ):
        i = i + 1
        isDivisible3 = i % 3 == 0
        isDivisible5 = i % 5 == 0
        if ( isDivisible3 and isDivisible5 ):
            output.append('Fizzbuzz')
        elif ( isDivisible3 ):
            output.append('Fizz')
        elif (isDivisible5):
            output.append('Buzz')
        else:
            output.append(i)
    return output

print(fizzbuzz(15))
