var x = 3, y = 5;
if (x > y) console.log("liczba " + x + " jest wieksza");
else console.log("liczba " + y + " jest wieksza");

//zad 2

var licz1 = 12, licz2 = 2, licz3 = 9;
if (licz1 >= licz2) {
    if (licz1 >= licz3) console.log("liczba 1:  " + licz1 + "jest nawjwieksza");
    else console.log("liczba 3: " + licz3 + "jest nawjwieksza");
}
else if (licz2 >= licz3) console.log("liczba  2: " + licz2 + "jest nawjwieksza");
else console.log("liczba 3: " + licz3 + "jest nawjwieksza");

//zad 3
for (var i = 0; i <= 9; i++) {
    console.log("Lubiê JavaScript");
}
//zad 4
var result = 0;
for (var i = 1; i <= 10; i++) {
    result += i;
}
//zad 5
var n = 10;
for (var i = 0; i <= n; i++) {
    console.log(i)
    if (i % 2 == 0) console.log(" - parzysta");
    else console.log(" = nieparzysta");
}
//zad 6
//nie wiem o co chodzi

//zad7

for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz")
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);

}

//zad8 

for (var i = 0; i <= 4; i++) {
    for (var j = 0; j < i + 1; j++) {
        document.write("*");
    }
    document.writeln("<br>");

}

for (var i = 0; i <= 4; i++) {
    for (var j = 0; j < i + 1; j++) {
        document.write("*");
    }
    document.writeln("<br>");

}

var wiersze = 4;
for (var i = 0; i <= wiersze; i++) {
    for (var z = wiersze; z >= i; z--) {
        document.writeln("&nbsp");
    }
    for (var j = 0; j < i + 1; j++) {
        document.write("*");
        document.writeln("&nbsp");

    }
    document.writeln("<br>");

}





