class Game{
    construtor(){}
getstate(){
    db.ref("gameState").on(
        "value",
        function(data){
            gameState=data.val()
        },
        function(){}
    );
}
updateState(s){
    db.ref("/").update(
        {
            "gamestate":s
        }
    )
}
start(){if(gameState==0){
    player=new Player()
player.getCount()
    form=new Form();
    form.display();


}}
}
