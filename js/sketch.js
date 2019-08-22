function setup() {
    noCanvas();

    let button = select('#submit');
    let userInput = select('#user_input');
    let output = select('#output');
    let username = "local-user";

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
        bot.reply(username, input).then(function(reply) {
            output.html(reply);
        });
        
    }
}