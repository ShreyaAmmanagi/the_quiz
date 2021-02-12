class quiz{
    getState(){
        var positionx = database.ref('gameState')
        positionx.on("value",function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }
   async start(){
          if(gameState == 0){
            player = new Player()
            player.getCount()
           var contestantCountref = await database.ref('contestantCount').once("value")
          if(contestantCountref.exists()){
              contestantCount = contestantCountref.val()
              player.getCount();
          }
          quest = new Question()
          quest.display();
        }
    }
    play(){
        quest.hide();
        background("skyblue");
        text("Result",500,100)
        player.getPlayerInfo()
        if(allPlayers!==undefined){
            var positions = 100;
            for(var i in allPlayers){
                positions = positions+20
                var correctAns = "3"
                if(correctAns == allPlayers[i].option){
                    fill("green")
                }
                else{
                    fill("red")
                }
                text(allPlayers[i].name+":"+allPlayers[i].option,500,positions)
            }
          //if(player.index!==null){
             // player.update()
          //}
        }
    }
}