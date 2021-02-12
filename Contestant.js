class Player{
    constructor(){
     this.index = null;
     this.option = 0;
     this.name = null;
    }
    getCount(){
        var gm = database.ref('contestantCount')
        gm.on('value',function(data){
            contestantCount = data.val()
        })
    }
    update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            option:this.option
        })
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount :count
        })
    }
    getPlayerInfo(){
        var players1 = database.ref('players')
        players1.on('value',function(data){
            allPlayers = data.val();
        })
    }
}