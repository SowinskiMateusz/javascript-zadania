#### Zadanie 1

Wypisz w konsoli:

1. Rodzica elementu id="buz"
2. Brata elementu id="baz"
3. Dzieci elementu id="foo"
4. rodzica elementu id"foo"
5. pierwsze dziecko elementu id="foo"
6. środkowe dziecko elementu id="foo"

#### Zadanie 2

Napisz funkcję która przyjmie jako parametr element id="ex2". Następnie doda nasłuchiwanie eventu click na tym elemencie. Jeśli czerwony kwadrat zostanie kliknięty pobierz tekst z wewnętrzego diva tego elementu i wyświetl go w konsoli.

#### Zadanie 3

Napisz funkcję która doda na każdym buttonie w div id="ex3" ten sam event kliknięcia. Zadaniem eventu będzie odsłanianie lub ukrywanie elementu span obok buttona.


#### Zadanie 4

Dodaj event na buttony z zadania 3 tak aby po kliknięciu na dowolny z nich ich rodzic zmieniał kolor na dowolny. Całość zapisz w funkcji.
Losowy kolor:
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

#### Zadanie 5

W div id="ex5" znajdują się trzy prostokąty. Po najechaniu na dowolny z nich elementy na liście powinny zmienić swój background-color na taki jak prostokąt ale według poniższych punktów:

1. Tylko pierwszy element listy
2. tylko ostatni element listy
3. Parzyste elementy listy
4. Wszystkie elementy listy
5. Żaden z elementów - tylko cała lista

#### Zadanie 6

W div id="ex6" zaczynając od tego diva znajdź i zapisz do zmiennych następujące kombinacje:

1. pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
2. pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic
3. rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko