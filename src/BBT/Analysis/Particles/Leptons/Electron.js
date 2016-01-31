/* 
   +----------------------------------------------------------------------+
   |                          BBT Electron                                |
   |                         --- Electron  ---                            |
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
   History: first implementation, based on object model of
   4-th April 1996, G.Cosmo
    New implementation as a utility class  M.Asai, 26 July 2004
*/

define([ ], function( ParticleTable, ParticleDefinition, Phys ){
  "use strict";

  function Electron( args ){

  } 

  Electron.theInstance = 0;
  Electron.Name = "e-";


  Electron.Definition = function(){
    if( Electron.theInstance !== 0 ) return theInstance;

    var partitab = ParticleTable.GetParticleTable();
    var partidef = partitab.FindParticle( Electron.Name );    

    if( partidef === undefined ){
      // create particle
      //
      //    Arguments for constructor are as follows
      //               name             mass          width         charge
      //             2*spin           parity  C-conjugation
      //          2*Isospin       2*Isospin3       G-parity
      //               type    lepton number  baryon number   PDG encoding
      //             stable         lifetime    decay table
      //             shortlived      subType    anti_encoding
    
      // use constants in CLHEP
      //  static const double electron_mass_c2 = 0.51099906 * MeV;

      partidef = new ParticleDefinition({
        name: Electron.Name, 
        mass: Phys.electron_mass_c2, 
        width: 0.0 * Phys.MeV, 
        charge: -1.0 * Phys.eplus,
        spinx2: 1,
        parity: 0,
        conjugation_C: 0,
        isospinx2: 0,
        isospin3x2: 0,
        parity_G: 0,
        type: "lepton",
        lepton_number: 1,
        baryon_number: 0,
        PDG_enconding: 11,
        stable: true,
        lifetime: -1,
        decay_table: undefined,
        shortlived: false,
        subtype: "e",
        anti_encoding: undefined
      });
      // Bohr Magnetron
      var muB =  -0.5 * Phys.eplus * Phys.hbar_Planck / ( Phys.electron_mass_c2 / Phys.c_squared ) ;
   
      partidef.SetPDGMagneticMoment( muB * 1.00115965218076 );

      return partidef;
    }

  };

  Electron.ElectronDefinition = function(){
    return Electron.Definition();
  };

  Electron.ElectronDef = function(){
    return Electron.Definition();
  };






  Electron.prototype = {
    constructor: Electron,


  }

  return Electron;

});

