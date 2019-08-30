function setup() {
    noCanvas();

    let button = select('#submit');
    let userInput = select('#user_input');
    let output = select('#output');
    let inputMessage = select('#inputMessage');
    let username = "local-user";

    const buildings = {
        "AF": ["Agriculture/Forestry Center", "AgFor"],
        "BS": ["Biological Sciences", "BioSci"],
        "BUS": ["Alberta School of Business", "Business"],
        "CCIS": ["Centennial Centre for Interdisciplinary Science", "See Cis"],
        "CAB": ["Central Academic Building", "Cab"],
        "C": ["Gunning/Lemieux Chemistry Centre", "Chem"],
        "CSC": ["Computing Science Centre", "CompSci"],
        "ESB": ["Earth Sciences Building", "ESB"],
        "ECHA": ["Edmonton Clinic Health Academy", "EH KA"],
        "ED": ["Education Centre North and South", "Ed"],
        "ETLC": ["Engineering Teaching and Learning Complex", "ETLC"],
        "GSB": ["General Services Building", "BioSci"],
        "HC": ["Humanities Centre", "Humanities"],
        "MCM": ["Pavillon McMahon", "Pavillon McMahon"],
        "MEC": ["Mechanical Engineering", "Mec Eee"],
        "NRE": ["Natural Resources Engineering", "N Ref"],
        "SAB": ["South Academic Building", "Saab"],
        "SUB": ["Students' Union Building", "Sub"],
        "T": ["Henry Marshall Tory Building", "Tory"],
        "TL": ["Tory Lecture Theatres", "Tory Lecture"],
        "VVC": ["Van Vliet Complex", "Van Vliet"],
        "V": ["V Wing", "V Wing"]
    };

    let bot = new RiveScript();
    bot.loadFile([
        "../brains/greet.rive",
        "../brains/begin.rive",
        "../brains/ehaye.rive"]).then(brainReady).catch(brainError);

    function brainReady() {
        console.log('Aqua is ready!')
        bot.sortReplies();
    }

    function brainError() {
        console.log('Aqua could not instantiate because of: ' + error);
    }

    button.mousePressed(chat);

    function chat() {
        let input = userInput.value();
        let buildingCode = input.toUpperCase();
        
        let buildingArray = Object.entries(buildings);

        if (buildingCode in buildings) {
            for (i = 0; i < buildingArray.length; i++) {
                if (buildingCode == buildingArray[i][0]) {
                    inputMessage.html(input);
                    output.html("Found building: " +
                        buildingCode + " is " + buildingArray[i][1][0] + " building and is called as "
                        + buildingArray[i][1][1] + " in colloquial terms.");
                    //console.log("Found building: " + buildingCode + ", " + buildingArray[i][1][0])
                }
            }
        } else {
            bot.reply(username, input).then(function(reply) {
                output.html(reply);
            });
        }
        
    }
}