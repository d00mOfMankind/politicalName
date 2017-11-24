var elements = document.getElementsByTagName('*');

var namesarray = [
[/Nigel Farage/gi, "Boozy McMoron"], [/Farage/gi, "McMoron"], //UKIP

[/Donald Trump/gi, "Cheese Puff"], [/Trump/gi, "Puff"],
[/Hillary Clinton/gi, "Walking e-mail scandal"], [/Hillary Rodham Clinton/gi, "Hillary 'Technically got more votes' Clinton"], [/Clinton/gi, "Tinclon"],
[/Barack Obama/gi, "Bloke that was in charge"], [/Obama/gi, "Dovakin"], //USA

[/David Cameron/gi, "Eurexit-man"], //Idiot
[/Jeremy Corbyn/gi, "Supreme Leader"], [/Corbyn/gi, "Comrade Corbyn"], //Labour
[/Theresa May/gi, "Mrs Unelected"], [/May/gi, "May or may not"], //Tory
[/Tim Farron/gi, "Who?"], //Lib Dem
[/Nicola Sturgeon/gi, "INSERT SCOTTISH INDEPENDANCE HERE"], //SNP
[/Boris Johnson/gi, "Mr Baboon"], //Moron

//extra
[/Brexit/gi, "Eurexit"],
[/Establishment/gi, "group of Witch-Kings"],
[/MP for/gi, "Witch-King of"], [/Member of Parliament/gi, "Witch-King"],
[/President/gi, "Darth"],
[/Prime Minister/gi, "Chief Witch-King"],
[/election/gi, "lightsaber battle"]
];

//window.alert(namesarray[0][1]); //debug

//for each element
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    //window.alert(element); //debug

    //for each child element in that
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        //window.alert(node); //debug

        //if textnode? i assume
        if (node.nodeType === 3) {
            //window.alert("nodetype === 3"); //debug
            //get text
            var text = node.nodeValue;
            //window.alert(namesarray[0]); //debug
            //for each name i want to change
            for(var k = 0; k < namesarray.length; k++){
                //replace
                //window.alert(k + " k"); //debug
                node.nodeValue = node.nodeValue.replace(namesarray[k][0], namesarray[k][1]);
            }
        }
    }
}