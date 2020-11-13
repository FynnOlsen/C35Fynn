class Game {

    consturctor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gamestate = data.val();
        })

    }

    start(){

        if (gamestate===0) {

            player = new Player();

            player.getCount();

            form= new Form();
            form.display();
        }
    }

    update(state){
        database.ref('/').update({
            gamestate:state
        });
    }


    

}
