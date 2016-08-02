// Classes


class Monster {
  constructor(options) {
    this.name = options.name;
    this.health = options.health || 100;
  }
}

var Dodo = new Monster({name:'Pete', health:55});
//Dodo.name = 'Jam'
console.log(Dodo);
/*
Now that you have a monster created, create a subclass of the Monster called Snake.  

The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
The instance of Snake that is passed in should have their health deducated by 10*/

class Snake extends Monster {
    constructor(options) {
        super(options)
    }

    bite (anotherSnake) {
        anotherSnake.health -=10;
        return anotherSnake.name + ' has now health '+ anotherSnake.health;
    }

}

let slang1 = new Snake({name:'adder'});
let slang2 = new Snake ({name:'tuinslang'});
slang1.bite(slang2);