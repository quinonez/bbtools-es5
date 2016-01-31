/* 
   +----------------------------------------------------------------------+
   |                            HEP Random                                |
   |                      --- RandExponential ---                         |
   |                            Module File                               |
   +----------------------------------------------------------------------+
   Class defining methods for shooting exponential distributed random
   values, given a mean (default mean = 1).
   +----------------------------------------------------------------------+
   | JavaScript                                                           |
   +----------------------------------------------------------------------+
   F. Quinonez - Created 2015-10-30                  
               - Geant4 File
   +----------------------------------------------------------------------+
   | C++                                                                  |
   +----------------------------------------------------------------------+
   Gabriele Cosmo - Created: 17th May 1996
                  - Added methods to shoot arrays: 28th July 1997
   J.Marraffino   - Added default mean as attribute and
                    operator() with mean: 16th Feb 1998
   M Fischler      - put and get to/from streams 12/15/04
   M Fischler	      - put/get to/from streams uses pairs of ulongs when
  			+ storing doubles avoid problems with precision 
  			4/14/05
*/

define( [ '../Random/JamesRandom' ], function( JamesRandom ){
  "use strict";

  function RandExponential( args ){
    this.fmean = args.mean || 1.0;
    this.fengine = args.engine || new JamesRandom({});
    //this.fnextGauss;
    //this.set;
  } 

  RandExponential.Shoot = function( args ){
    var smean = args.mean || 1.0;
    var sengine = args.engine || new JamesRandom({});
    return -Math.log( sengine.Flat() ) * smean; 
  };

  RandExponential.ShootArray = function( args ){
    var ssize = args.size || 1;
    var smean = args.mean || 1.0;
    var sengine = args.engine || new JamesRandom({});
    // var svect = args.vect;

    var argsShoot = { mean: smean, engine: sengine };

    for( var i = 0; i < ssize; ++i ){
      args.vect.push( RandExponential.Shoot( argsShoot ) );
    }

  };


  RandExponential.prototype = {
    constructor: RandExponential,

    Fire: function( ){
      return -Math.log( this.fengine.Flat() ) * this.fmean;
    },

    FireArray: function( /* size of vect */ size, /* Array */ vect ){
      for( var i = 0; i < size; ++i ){
        vect.push( this.Fire() );
      }
    }


  }

  return RandExponential;
});

