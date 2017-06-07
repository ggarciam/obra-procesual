$(document).ready(function(){
    var arrayCountries = [
        {
            country: 'España',
            color: 'FFFFFF'
        },
        {
            country: 'Alemania',
            color: 'e5ed00'
        },
        {
            country: 'Italia',
            color: '11cdab'
        },
        {
            country: 'Suecia',
            color: 'b99b3a'
        },
        {
            country: 'Islandia',
            color: '35964e'
        },
        {
            country: 'Rusia',
            color: '434aeb'
        },
        {
            country: 'Noruega',
            color: '434374'
        },
        {
            country: 'Egipto',
            color: '8563c8'
        },
        {
            country: 'Hungría',
            color: '008022'
        },
        {
            country: 'Dinamarca',
            color: '47be1b'
        },
        {
            country: 'Polonia',
            color: '79fa22'
        },
        {
            country: 'Holanda',
            color: 'fa56b6'
        },
        {
            country: 'Estonia',
            color: 'd93dbd'
        },
        {
            country: 'China',
            color: 'd642c2'
        },
        {
            country: 'Reino Unido',
            color: 'e94092'
        },
        {
            country: 'Bulgaria',
            color: 'c025e9'
        },
        {
            country: 'República Checa',
            color: '5d2954'
        },
        {
            country: 'Bélgica',
            color: 'cefe71'
        },
        {
            country: 'Grecia',
            color: '1e7779'
        },
        {
            country: 'Suiza',
            color: '87b3ea'
        },
        {
            country: 'Uzbekistán',
            color: '9644c9'
        },
        {
            country: 'Estados Unidos',
            color: '97eb26'
        },
        {
            country: 'Francia',
            color: '9c3d47'
        },
        {
            country: 'Turquía',
            color: 'f693a7'
        },
        {
            country: 'México',
            color: 'af1b75'
        },
        {
            country: 'Marruecos',
            color: '699b02'
        },
        {
            country: 'Eslovaquia',
            color: 'a77e09'
        },
        {
            country: 'Israel',
            color: '51ac58'
        },
        {
            country: 'Canadá',
            color: '2bf4ba'
        },
        {
            country: 'Cuba',
            color: 'cb798e'
        }
    ];
    var arrayTravels = [
        {
            month: 'Octubre',
            year: '2007',
            origin: 'Madrid', countryOrig: 'España',
            destination: 'Berlin',
            countryDest: 'Alemania'
        },
        {
            month: 'Enero',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Roma',
            countryDest: 'Italia'
        },
        {
            month: 'Enero',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Estocolmo',
            countryDest: 'Suecia'
        },
        {
            month: 'Febrero',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Düsseldorf',
            countryDest: 'Alemania'
        },
        {
            month: 'Febrero',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Milán',
            countryDest: 'Italia'
        },
        {
            month: 'Marzo',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Reykjavik',
            countryDest: 'Islandia'
        },
        {
            month: 'Abril',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Mayo',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Moscú',
            countryDest: 'Rusia'
        },
        {
            month: 'Mayo',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Oslo',
            countryDest: 'Noruega'
        },
        {
            month: 'Junio',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Budapest',
            countryDest: 'Hungría'
        },
        {
            month: 'Julio',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'El Cairo',
            countryDest: 'Egipto'
        },
        {
            month: 'Agosto',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Copenague',
            countryDest: 'Dinamarca'
        },
        {
            month: 'Agosto',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Varsovia',
            countryDest: 'Polonia'
        },
        {
            month: 'Septiembre',
            year: '2008',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Tallin',
            countryDest: 'Estonia'
        },
        {
            month: 'Noviembre',
            year: '2008',
            origin: 'Munich', countryOrig: 'Alemania',
            destination: 'Berlin',
            countryDest: 'Alemania'
        },
        {
            month: 'Diciembre',
            year: '2008',
            origin: 'Munich', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Febrero',
            year: '2009',
            origin: 'Munich', countryOrig: 'Alemania',
            destination: 'Düsseldorf',
            countryDest: 'Alemania'
        },
        {
            month: 'Marzo',
            year: '2009',
            origin: 'Munich', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Julio',
            year: '2009',
            origin: 'Munich', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Septiembre',
            year: '2009',
            origin: 'Munich', countryOrig: 'Alemania',
            destination: 'Amsterdam',
            countryDest: 'Holanda'
        },
        {
            month: 'Octubre',
            year: '2009',
            origin: 'Munich', countryOrig: 'Alemania',
            destination: 'Pekín',
            countryDest: 'China'
        },
        {
            month: 'Octubre',
            year: '2009',
            origin: 'Munich', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Diciembre',
            year: '2009',
            origin: 'Munich', countryOrig: 'Alemania',
            destination: 'Derry',
            countryDest: 'Reino Unido'
        },
        {
            month: 'Diciembre',
            year: '2009',
            origin: 'Munich', countryOrig: 'Alemania',
            destination: 'Sofia',
            countryDest: 'Bulgaria'
        },
        {
            month: 'Enero',
            year: '2010',
            origin: 'Munich', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Enero',
            year: '2010',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Valladolid',
            countryDest: 'España'
        },
        {
            month: 'Septiembre',
            year: '2010',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Praga',
            countryDest: 'República Checa'
        },
        {
            month: 'Octubre',
            year: '2010',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Valladolid',
            countryDest: 'España'
        },
        {
            month: 'Diciembre',
            year: '2010',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Marzo',
            year: '2011',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Junio',
            year: '2011',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Julio',
            year: '2011',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Munich',
            countryDest: 'Alemania'
        },
        {
            month: 'Septiembre',
            year: '2011',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Londres',
            countryDest: 'Reino Unido'
        },
        {
            month: 'Octubre',
            year: '2011',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Diciembre',
            year: '2011',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Febrero',
            year: '2012',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Barcelona',
            countryDest: 'España'
        },
        {
            month: 'Abril',
            year: '2012',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Bruselas',
            countryDest: 'Bélgica'
        },
        {
            month: 'Junio',
            year: '2012',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Valladolid',
            countryDest: 'España'
        },
        {
            month: 'Septiembre ',
            year: '2012',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Barcelona',
            countryDest: 'España'
        },
        {
            month: 'Octubre',
            year: '2012',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Atenas',
            countryDest: 'Grecia'
        },
        {
            month: 'Diciembre',
            year: '2012',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Mayo',
            year: '2013',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Trapani',
            countryDest: 'Italia'
        },
        {
            month: 'Junio',
            year: '2013',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Zúrich',
            countryDest: 'Suiza'
        },
        {
            month: 'Agosto',
            year: '2013',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Agosto',
            year: '2013',
            origin: 'Praga', countryOrig: 'República Checa',
            destination: 'Tashkent',
            countryDest: 'Uzbekistán'
        },
        {
            month: 'Septiembre',
            year: '2013',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Diciembre',
            year: '2013',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Abril',
            year: '2014',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Nueva York',
            countryDest: 'Estados Unidos'
        },
        {
            month: 'Mayo',
            year: '2014',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Milán',
            countryDest: 'Italia'
        },
        {
            month: 'Mayo',
            year: '2014',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Mayo',
            year: '2014',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'París',
            countryDest: 'Francia'
        },
        {
            month: 'Octubre',
            year: '2014',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Londres',
            countryDest: 'Reino Unido'
        },
        {
            month: 'Diciembre',
            year: '2014',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Febrero',
            year: '2015',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Estambul',
            countryDest: 'Turquía'
        },
        {
            month: 'Marzo',
            year: '2015',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'México',
            countryDest: 'México'
        },
        {
            month: 'Mayo',
            year: '2015',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Mayo',
            year: '2015',
            origin: 'Leipzig', countryOrig: 'Alemania',
            destination: 'Barcelona',
            countryDest: 'España'
        },
        {
            month: 'Agosto',
            year: '2015',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Diciembre',
            year: '2015',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Marzo',
            year: '2016',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Casablanca',
            countryDest: 'Marruecos'
        },
        {
            month: 'Mayo',
            year: '2016',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Julio',
            year: '2016',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Bratislava',
            countryDest: 'Eslovaquia'
        },
        {
            month: 'Septiembre',
            year: '2016',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Tel Aviv',
            countryDest: 'Israel'
        },
        {
            month: 'Diciembre',
            year: '2016',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Madrid',
            countryDest: 'España'
        },
        {
            month: 'Marzo',
            year: '2017',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Barcelona',
            countryDest: 'España'
        },
        {
            month: 'Abril',
            year: '2017',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'Toronto',
            countryDest: 'Canadá'
        },
        {
            month: 'Abril',
            year: '2017',
            origin: 'Berlin', countryOrig: 'Alemania',
            destination: 'La Habana',
            countryDest: 'Cuba'
        }
    ];


    $( document ).ready(function() {
        var origin, destiny;
        var table = $('#resultados');
        var tr = $('<tr>');
        ['Mes', 'Año', 'Origen', 'País Origen', 'Destino', 'País Destino', 'Color iteración', 'Color línea'].forEach(function(attr) {
            tr.append('<td>' + attr + '</td>');
        });
        table.append(tr);

        for(var i=0; i<= arrayTravels.length-1;i++) {
            var tr = $('<tr>');

            origin = $.grep(arrayCountries, function(c) {
                return c.country === arrayTravels[i].countryOrig;
            })[0];
            destiny = $.grep(arrayCountries, function(c) {
                return c.country === arrayTravels[i].countryDest;
            })[0];
            arrayTravels[i].colorOri = parseInt(origin.color, 16);
            arrayTravels[i].colorDest = parseInt(destiny.color, 16);
            arrayTravels[i].colorDestPartialIt = (arrayTravels[i].colorOri + arrayTravels[i].colorDest) / 2;
            arrayTravels[i].colorDestPartialItHEX = arrayTravels[i].colorDestPartialIt.toString(16).toUpperCase().replace('.8', '');

            if(i=== 0) {
                arrayTravels[i].colorOriPartialIt = arrayTravels[i].colorDestPartialIt;
            } else {
                arrayTravels[i].colorOriPartialIt = arrayTravels[i - 1].colorDestPartialIt;
            }
            arrayTravels[i].colorOriPartialItHEX = arrayTravels[i].colorOriPartialIt.toString(16).toUpperCase().replace('.8', '');

            arrayTravels[i].color = (arrayTravels[i].colorOriPartialIt + arrayTravels[i].colorDestPartialIt) / 2;
            arrayTravels[i].colorHEX = arrayTravels[i].color.toString(16).toUpperCase().replace('.8', '').replace('.4', '').replace('.C', '');

            ['month', 'year', 'origin', 'countryOrig', 'destination', 'countryDest', 'colorOriPartialItHEX', 'colorHEX'].forEach(function(attr) {
                switch(attr) {
                    case 'countryOrig':
                        tr.append($('<td>')
                            .text(arrayTravels[i][attr] + ' - #' + origin.color)
                            .css('background-color', '#' + origin.color));
                        break;
                    case 'countryDest':
                        tr.append($('<td>')
                            .text(arrayTravels[i][attr] + ' - #' + destiny.color)
                            .css('background-color', '#' + destiny.color));
                        break;
                    case 'colorOriPartialItHEX':
                    case 'colorHEX':
                        tr.append($('<td>')
                            .text('#' + arrayTravels[i][attr])
                            .css('background-color', '#' + arrayTravels[i][attr]));
                        break;
                    default:
                        tr.append($('<td>')
                            .text(arrayTravels[i][attr]));
                }
            });
            table.append(tr);

            // column.innerHTML = arrayTravels[i].month;
            // row.appendChild(column);
            //
            // column = row.appendChild(document.createElement('td'));
            // column.innerHTML = arrayTravels[i].year;
            // row.appendChild(column);
            //
            // column = row.appendChild(document.createElement('td'));
            // column.innerHTML = arrayTravels[i].origin;
            // row.appendChild(column);

            // column = row.appendChild(document.createElement('td'));
            // column.innerHTML = arrayTravels[i].countryOrig + ' - ' + origin.color;
            // column.attr('style','background-color: #'+origin.color);
            // row.appendChild(column);
            //
            // column = row.appendChild(document.createElement('td'));
            // column.innerHTML = arrayTravels[i].destination;
            // row.appendChild(column);
            //
            // column = row.appendChild(document.createElement('td'));
            // column.innerHTML = arrayTravels[i].countryDest + ' - ' + destiny.color;
            // row.appendChild(column);
            //
            // table.appendChild(row);
            // console.log(arrayTravels[i].origin, '-> ' + arrayTravels[i].destination, '#' + arrayTravels[i].colorHEX);
        }
    });
});