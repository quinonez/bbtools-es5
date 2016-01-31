/* 
   +----------------------------------------------------------------------+
   |                            BBT Event                                 |
   |                    --- ParticleGun ---                          |
   |                            Module File                               |
   +----------------------------------------------------------------------+
   +----------------------------------------------------------------------+
   | JavaScript                                                           |
   +----------------------------------------------------------------------+
   F. Quinonez - Created 2015-12-14                  
               - Geant4 File
   +----------------------------------------------------------------------+
   | C++                                                                  |
   +----------------------------------------------------------------------+
*/

define([ '../Random/JamesRandom' ], function( JamesRandom ){
  "use strict";

  function ParticleGun( args ){
    this.fengine = args.engine || new JamesRandom({});
  } 

  ParticleGun.Shoot = function( args ){
    var sengine = args.engine || new JamesRandom({});
    var x = sengine.Flat();
    var bit = ( x > 0.5 )? 1: 0;
    return bit;
  };

  ParticleGun.ShootArray = function( args ){
    var ssize = args.size || 1;
    var sengine = args.engine || new JamesRandom({});
    // var svect = args.vect;

    var argsShoot = { engine: sengine };

    for( var i = 0; i < ssize; ++i ){
      args.vect.push( ParticleGun.Shoot( argsShoot ) );
    }
  };

  ParticleGun.prototype = {
    constructor: ParticleGun,

    Fire: function(){
      var x = this.fengine.Flat();
      var bit = ( x > 0.5 )? 1: 0;
      return bit;
    },

    FireArray: function( /* size of vect */ size, /* Array */ vect ){
      for( var i = 0; i < size; ++i ){
        vect.push( this.Fire() );
      }
    }
  }

  return ParticleGun;

});

