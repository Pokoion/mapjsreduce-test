// idatzi hemen zure funtzioak
function ariketa1(zenbakiak){
    return zenbakiak.map(num => num*2)
}

function ariketa2(erabiltzaileak){
    return erabiltzaileak.map(p => p.izena + "-k " + p.adina + " urte ditu" )
}

function ariketa3(zenbakiak){
    return zenbakiak.filter(n => n % 2 == 0)
}

function ariketa4(erabiltzaileak){
    return erabiltzaileak.filter(p => p.adina >= 18)
}

function ariketa5(zenbakiak){
    return zenbakiak.reduce((acc, n) => acc+=n, 0)
}

function ariketa6(erabiltzaileak){
    return erabiltzaileak.reduce((handiena, p) => p.adina > handiena.adina? p:handiena ,erabiltzaileak[0])
}

function ariketa7(zenbakiak){
    return zenbakiak.filter(num => num%2==0).map(num => num*2).reduce((acc, num) => acc+=num, 0)
}

function ariketa8(users){
    return users.reduce((lista, user) => lista.concat(user.items), [])
}

function ariketa9(erabiltzaileak){
    //return erabiltzaileak.filter(p => p.adina >= 18).reduce((acc, p) => acc+=p.erosketak.reduce((acc, erosketa) => acc+=erosketa, 0), 0)
    return erabiltzaileak.filter(p => p.adina >= 18).map(p => p.erosketak.reduce((acc, item) => acc+=item, 0)).reduce((acc, p) => acc+=p, 0)
}

function ariketa10(students){
    students.map(s => s.batezbestekoa = s.scores.reduce((acc, nota)=> acc+=nota, 0)/s.scores.length)
    let st = students.reduce((max, s) => max.batezbestekoa > s.batezbestekoa? max:s)
    return {name: st.name, batezbestekoa: st.batezbestekoa}
}

export {ariketa1, ariketa2, ariketa3, ariketa4, ariketa5, ariketa6, ariketa7, ariketa8, ariketa9, ariketa10}
