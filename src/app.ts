import 'phaser';

export default class Demo extends Phaser.Scene
{
    // constructor ()
    // {
    //     super('demo');
    // }

    preload ()
    {

    }

    create ()
    {

    }

    update ()
    {

    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#33e',
    width: 400,
    height: 400,
    scene: Demo
};

const game = new Phaser.Game(config);