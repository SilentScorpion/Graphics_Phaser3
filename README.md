# Graphics_Phaser3
Practising the graphics class in Phaser3. Created a simple Drawing application.

You can draw using 2 colors: Black and Red
Numpad 1: Black
Numpad 2: Red
Numpad 3: Erase()
Numpad 4: Clear Screen()
Numpad 5: Draw Circle()

This project was created as a part of #100DaysOfCode, in under an hour
I used the Graphics class (Phaser.GameObject.Graphics) to add primitive shapes and lines in the code

A simple graphics object can be created as follows:

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
