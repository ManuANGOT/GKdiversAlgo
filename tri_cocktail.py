def tri_cocktail(arr):
    n = len(arr)
    start = 0
    end = n - 1
    melange = True

    while melange:
        # Itération de gauche à droite
        melange = False
        for i in range(start, end):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                melange = True
        end -= 1

        if not melange:
            break

        # Itération de droite à gauche
        melange = False
        for i in range(end - 1, start - 1, -1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                melange = True
        start += 1

    return arr

# Je crée un tableau de chiffres aléatoires pour tester
arr = [40, 100, 38, 30, 28, 4, 25, 26, 24, 20, 36,14, 12, 10, 8, 6, 34, 32, 22 ,50, 18, 16, 2, 0]

# Exécution du programme : entrer dans la console : python tri_cocktail.py
tableau_trie = tri_cocktail(arr)

# Ici, je souhaite que ma série de chiffre sorte en 
print(tableau_trie)