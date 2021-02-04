class Form{
    constructor(){
    
    }
    display(){
      
        var input=createInput("ENTER NAME")
        input.position(210,100)
         


        var button=createButton("play")
        button.position(250,130)
        button.mousePressed(function(){
            input.hide()
            button.hide()
    
            var name=input.value()
            playerCount++
            player.updateCount(playerCount)
            player.updateName(name)
    
        
        })
    
    }
    
    }
       
    