var game;
class Main extends Phaser.Scene{
    
    preload(){

    }

    create(){
        this.mode =1 ;
        var graphicsconfig = {
            lineStyle: {
                color: 0xff0000,
                alpha : 1,
                width: 1,
            },
            fillStyle: {
                color : 0xff0000,
                alpha : 1
            },
        };
        this.graphicsObj = this.add.graphics(graphicsconfig);

       // this.graphicsObj.fillCircle(game.config.width/2, game.config.height/2,200);

        // this.input.on('pointerdown', (pointer) => {
        //   this.originalX = pointer.x;
        //   this.originalY = pointer.y;
        // }); 

        // this.input.on('pointermove', (pointer) => {
        //     this.movedX = pointer.x;
        //     this.movedY = pointer.y;
        // }); 

        // this.input.on('pointerup', (pointer) =>{
        //     this.graphicsObj.lineBetween(this.originalX,this.originalY,this.movedX,this.movedY);
        // });

        this.input.on('pointermove', (pointer) => {
            if(this.mode == 1)
                this.graphicsObj.fillPoint(pointer.x,pointer.y,10);
            
           
                 
        });

      
        this.input.on('pointerup', (pointer) => {
           if(this.mode == 2){
                let dist = Phaser.Math.Distance.Between(pointer.x, pointer.y,this.circleOriginX,this.circleOriginY);
                this.graphicsObj.strokeCircle(this.circleOriginX,this.circleOriginY,dist);
           }
        });


        this.input.on('pointerdown', (pointer) => {
            if(this.mode == 1)
                this.graphicsObj.fillPoint(pointer.x,pointer.y,10);

            if(this.mode == 2){
                this.circleOriginX = pointer.x;
                this.circleOriginY = pointer.y;
                
            }
               
        });


        //Primitives are defined in the Geom class in Phaser 3
        //You can then use the graphics class to fill styles, adjust line width etc.
        

        //Or else you can create the graphics class object yourself and then fill style,
        //adjust line width/style etc..

        this.input1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_ONE);
        this.input2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_TWO);
        this.input3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_THREE);
        this.input4 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_FOUR);
        this.input5 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_FIVE);
        
    }

    changePointerColor(index){
        switch(index){
            case 1:
            this.graphicsObj.lineStyle(1,0x000000,1);
            this.graphicsObj.fillStyle(0x000000,1);
            break;
            case 2:
            this.graphicsObj.lineStyle(1,0xff0000,1);
            this.graphicsObj.fillStyle(0xff00000,1);
            break;

            case 3:
            this.graphicsObj.lineStyle(20,0xffffff,1);
            this.graphicsObj.fillStyle(0xffffff,1);
            break;
        }
    }

    eraser(){
        this.graphicsObj.clear();
    }

    update(){
        if(this.input1.isDown){
            this.mode = 1;
            this.changePointerColor(1);
        }
        if(this.input2.isDown){
            this.mode = 1;
            this.changePointerColor(2);
        }
        if(this.input3.isDown){
            this.mode = 1;
            this.changePointerColor(3);
        }
        if(this.input4.isDown){
            this.mode = 1;
            this.eraser();
        }

        if(this.input5.isDown){
           //Draw mode over...
           this.mode = 2;
        }
    }
}

var config = {
    type : Phaser.AUTO,
    width: 1300,
    backgroundColor: 0xffffff,
    height: 700,
    scene: [Main],
    physics: {
        default: 'arcade',
        arcade : {
            gravity :{y: 200},
            debug: true,
        }
    },
    scale : {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    }
}

game = new Phaser.Game(config);