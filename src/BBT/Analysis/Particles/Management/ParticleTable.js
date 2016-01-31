/* 
   +----------------------------------------------------------------------+
   |                               BBT                                    |
   |                      --- ParticleTable ---                           |
   |                            Module File                               |
   +----------------------------------------------------------------------+
   +----------------------------------------------------------------------+
   | JavaScript                                                           |
   +----------------------------------------------------------------------+
   F. Quinonez - Created 2015-01-08                  
               - Geant4 File
   +----------------------------------------------------------------------+
   | C++                                                                  |
   +----------------------------------------------------------------------+
   History: first implementation, based on object model of
   27 June 1996, H.Kurashige
   added fParticleMessenger         14 Nov., 97 H.Kurashige
   added Create/DeleteMessenger     06 Jul., 98 H.Kurashige
   modified FindIon                 02 Aug., 98 H.Kurashige
   added dictionary for encoding    24 Sep., 98 H.Kurashige
   added RemoveAllParticles()        8 Nov., 98 H.Kurashige
   fixed  some improper codings     08 Apr., 99 H.Kurashige
   modified FindIon/GetIon methods  17 AUg., 99 H.Kurashige
   implement new version for using STL map instaed of RW PtrHashedDictionary
                                    28 ct., 99  H.Kurashige
   modified implementation of Remove 21 Mar.,08  H.Kurashige
   remove G4ShortLivedTable         25 July, 13 H.Kurashige
*/

define([ ], function( ParticleDefinition, PTblDictionary ){
  "use strict";

  function ParticleTable( args ){
    this.verboseLevel = 1; // 0: silent, 1: warning message, 2: more

  } 

  ParticleTable.GetParticleTable = function(){
    var theParticleTable = ParticleTable.ParticleTable();
    return theParticleTable;
  };


  ParticleTable.prototype = {
    constructor: ParticleTable,

    SlaveParticleTable: function(){

    },

    WorkerParticleTable: function(){

    },

    Contains: function( particleName ){
    
    },

    Entries: function(){

    },

    Size: function(){

    },

    FindParticle: function( args ){

    },

    FindAntiParticle: function( args ){

    },

    DumpTable: function( particleName ){
      if( particleName === undefined ) particleName = "ALL";

    },
   
    GetIonTable: function(){

    },

    Insert: function(){

    },

    Remove: function( /* ParticleDefinition */ particle ){

    },

    RemoveAllParticles: function(){


    },

    DeleteAllParticles: function(){

    },

    CreateMessenger: function(){

    },

    DeleteMessenger: function(){


    },

    GetDictionary: function(){


    },

    GetKey: function( /* ParticleDefinition */ particle ){

    },

    GetEncodingDictionary: function(){

    } 

  }

  return ParticleTable;

});

