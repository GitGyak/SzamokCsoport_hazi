function szamokatCsoportosit(szoveg) {
    var szamok = szoveg.split(';');
    var eredmeny = {'pozitiv': [], 'nulla': [], 'negativ': []};

    for (var i = 0; i < szamok.length; i++) {
        var szam = parseInt(szamok[i]);
        if (szam > 0) {
            eredmeny['pozitiv'].push(szam);
        } else if (szam === 0) {
            eredmeny['nulla'].push(szam);
        } else {
            eredmeny['negativ'].push(szam);
        }
    }

    return eredmeny;
}

function csoportositas() {
    var szoveg = '7;-4;-1;0;2;5;-8;-1;-2;-3;-4;-5';
    var eredmeny = szamokatCsoportosit(szoveg);

     var eredmenyDiv = document.getElementById('eredmeny');
    eredmenyDiv.innerHTML = 'Pozitív számok: ' + eredmeny['pozitiv'].join(', ') +
                            ' Negatív számok: ' + eredmeny['negativ'].join(', ') +
                            ' Nulla: ' + eredmeny['nulla'].join(', ');
}
