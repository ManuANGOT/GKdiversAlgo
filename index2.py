tab = [10, 15, 4, 1, 2]
def tri(tab):
    n = len(tab)
    swapped = True
    start = 0
    end = n - 1

    while swapped:
        swapped = False

        for i in range(start, end):
            if tab[i] > tab[i + 1]:
                tab[i], tab[i + 1] = tab[i + 1], tab[i]
                swapped = True
        
        if not swapped:
            break
        swapped = False

        end = end - 1

        for j in range(end - 1, start - 1, -1):
            if tab[j] > tab[j + 1]:
                tab[j], tab[j + 1] = tab[j + 1], tab[j]
                swapped = True

        
        start = start + 1

    return tab

result = tri(tab)
print(result)