#### Zadanie 1

Stwórz i dodaj do strony element div wraz z tekstem: "To jest nowy element";

#### Zadanie 2

Stwórz odpowiednie elementy i dodaj do strony listę ulubionych owoców (minimum 6)

#### Zadanie 3

Na podstawie listy z zadanie 2 stwórz event który usunie z tej listy co drugi element.

#### Zadanie 4

Dodaj do strony button po kliknięciu na button ma on się usuwać ze strony.

#### Zadanie 5

Na podstawie losowej liczby utwórz odpowiednią ilość divów z tekstem: "to jest div numer ${numer}"

#### Zadanie 6

Na podstawie obiektu stwórz struktórę w html

{
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
}

#### Zadanie 7

Stwórz dwie listy. W jednej umieść minim 6 elementów. Druga niech będzie pusta. Pod każdą z list dodaj button. Po kliknięciu na button pod listą ostatni element listy ma być przeniesiony do drugiej listy. Jeśli w danej liście nie ma żadnych elementów to button ma być zablokowany przy pomocy atrybutu disabled;

#### Zadanie 8

Stwórz formularz do którego będzie można wpisać jaki element user chce utworzyć, z jakim tekstem, z kolorem tekstu i ile razy ma być ten element powtórzony na stronie. Po kliknięciu na button "Utwórz" formularz powinien tworzyć taką strukturę.

#### Zadanie 9

Stwórz formularz do którego będzie można wpisać dane tabelarczne takie jak:

1. Imię
2. Nazwisko
3. Wiek
4. Ilość dzieci

Formularz powinien mieć możliwość dodawania kilku takich pozycji po kliknięciu na button "Więcej". Po kliknieciu na "Utwórz" powinna utworzyć się tabela z odpowiednimi headerami oraz wypełnionymi danymi z formularza. Na końcu każdej lini powinien być button "Usuń" który usuwa daną linijkę.


#### Zadanie 10

Na podstawie powyższego zadania stwórz funkcję która sprawdzi wszystkie stringi wpisane i zamieni pierwsze ich litery na duże. 

#### Zadanie 11

Stwóz funkcję która będzie przyjmować dowolny string. Sprawdź czy występują w nim liczby. Jeśli tak to podaj w konsoli ich sumę. Dodatkowo stwórz tyle divów z tym tekstem ile wynosi iloczyn tych liczb.

#### Zadanie 12

Stwórz funkcję która przyjmuje dowolnego stringa. Następnie Wrzuć tego strina do obiektu pod dowolnym polem. Dopisz metodę do obiektu która będzie sprawdzać czy w tekście występuje string 'Ala' i jeśli tak to zamieni go na 'Ola'. Jeśli tekst nie występuje to niech utworzy odpowiedniego diva i doda do niego tekst "Słowo Ala nie występuje w tekście."

#### Zadanie 13

Stwórz funkcję która przyjmie tablicę stringów. Funkcja ma zwrócić nową tablicę z ilością liter w strinach. Druga funkcja ma zsumować wszystkie liczby z tablicy i zwrócić wynik. Trzecia funkcja ma wyciągnąć średnią z liczb i zwrócić wynik.

#### Zadanie 14 

Stwórz obiekt z 3 polami:
{
    name: '',
    surname: '',
    age: ''
}

Następnie stwóz funkcję (nie metodę) która przypisuje nowe wartości do tych pól oraz tworzy nowe pola z długością stringów. Jeśli któyś ze stringów będzie dłuższy niż 5 to stwórz w html button po kliknięciu którego cały obiekt wróci do stanu początkowego.