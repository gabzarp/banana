function isTrue(isTrue){
    var is_true;
    var is_false;
    is_true = (0 == "0")
    is_true = (0 == [])
    is_false = ("0" == [])

    if(isTrue == is_true){
        return (0 == "0")
    }
    else{
        return is_false;
    }
}

function escreverBanana(vaiEscrever){
    if(isTrue(vaiEscrever) == (0 == "0")){
        console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())
    }
    if(isTrue(vaiEscrever) == ("0" == [])){
        console.log('n vai escrever banan*')
    }
}