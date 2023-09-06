class Notificacao{
    constructor(nomeApp,msg){
        this. nomeApp = nomeApp;
        this.msg = msg;
    }
}

var notificacoes = [];

var ntfWhats = new Notificacao("WhatsApp", "Gloria: Me liga");
notificacoes.push(ntfWhats);
