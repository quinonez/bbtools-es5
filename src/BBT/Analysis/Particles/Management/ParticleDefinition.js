/* 
   +----------------------------------------------------------------------+
   |                                BBT                                   |
   |                     --- ParticleDefinition ---                       |
   |                            Module File                               |
   +----------------------------------------------------------------------+
   +----------------------------------------------------------------------+
   | JavaScript                                                           |
   +----------------------------------------------------------------------+
   F. Quinonez - Created 2016-01-09                  
               - Geant4 File
   +----------------------------------------------------------------------+
   | C++                                                                  |
   +----------------------------------------------------------------------+
   History: first implementation, based on object model of
            2nd December 1995, G.Cosmo
   first implementation by Makoto Asai - 29 January 1996
   revised - G.Cosmo - 29 February 1996
   revised - H.Kurashige - 19 April 1996
   revised -  H.Kurashige - 4 July 1996
   added GetEnergyCuts() and GetLengthCuts() - G.Cosmo - 11 July 1996
   added Set/GetVerboseLevel() - H.Kurashige - 11 November 1997
   added SetCuts() and ResetCuts - H.Kurashige - 15 November 1996
   change SetProcessManager as public - H.Kurashige - 06 June 1998
   added  GetEnergyThreshold - H.Kurashige - 08 June 1998
   added  ShortLived flag and ApplyCuts flag - H.Kurashige - 27 June 1998
   fixed  some improper codings - H.Kurashige - 08 April 1999
   added  sub-type - H.Kurashige - 15 February 2000
   added  RestoreCuts - H.Kurashige - 09 March 2001
   restructuring for Cuts per Region - H.Kurashige - 11 March 2003 
   added  MagneticMoment - H.Kurashige - March 2007
   modified for thread-safety for MT - G.Cosmo, A.Dotti - January 2013
*/

define([ ], function( Phys ){
  "use strict";

  function ParticleDefinition( args ){
    this.fname = args.name || undefined;
    this.fmass = args.mass || undefined;
    this.fwidth = args.width || undefined;
    this.fcharge = args.charge || undefined;
    this.fspinx2 = args.spinx2 || undefined;
    this.fparity = args.parity || undefined;
    this.fconjugation_C = args.conjugation_C || undefined;
    this.fspinx2 = args.spinx2 || undefined;
    this.fisospinx2 = args.isospinx2 || undefined;
    this.fisospin3x2 = args.isospin3x2 || undefined;
    this.fparity_G = args.parity_G || undefined;
    this.ftype = args.type || undefined;
    this.flepton_number = args.lepton_number || undefined;
    this.fbaryon_number = args.baryon_number || undefined;
    this.fPDG_encoding = args.PDG_encoding || undefined;
    this.fstable = args.stable || undefined;
    this.flifetime = args.lifetime || undefined;
    this.fdecay_table = args.decay_table || undefined;
    this.fshortlived = args.shortlived || undefined;
    this.fsubtype = args.subtype || undefined;
    this.fanti_encoding = args.anti_encoding || undefined;
    this.fmagneticMoment = args.magneticMoment || undefined;

  } 


  ParticleDefinition.prototype = {
    constructor: ParticleDefinition,

    GetParticleName: function(){

    },

    GetPDGMass: function(){

    },

    GetPDGWidth: function(){

    },

    GetPDGCharge: function(){

    },

    GetPDGSpin: function(){

    },

    GetPDGIsospin: function(){

    },

    GetPDGIsospin3: function(){

    },

    GetPDGParityG: function(){

    },

    GetPDGMagneticMoment: function(){

    },

    GetPDGEncoding: function(){

    },

    GetAntiPDGEncoding: function(){

    },

    GetQuarkContent: function(){

    },

    GetAntiQuarkContent: function(){

    },

    GetPDGStable: function(){

    },

    GetPDGLifeTime: function(){

    },

    GetIonLifeTime: function(){

    },

    GetDecayTable: function(){

    },

    IsShortLived: function(){

    },

    GetParticleTable: function(){

    },

    GetParticleDefinitionID: function(){

    },

    GetAtomicNumber: function(){

    },

    GetAtomicMass: function(){

    },

    DumpTable: function(){

    },

    GetVerboseLevel: function(){

    },

    FillQuarkContents: function(){

    },

    CalculateAnomaly: function(){

    },

    SetParticleSubType: function(){

    },

    SetPDGMagneticMoment: function(){

    },

    SetPDGStable: function(){

    },

    SetPDGLifeTime: function(){

    },

    SetDecayTable: function(){

    },

    SetAtomicNumber: function(){

    },

    SetAtomicMass: function(){

    },

    SetParticleSunType: function(){

    },

    SetParticleDefinitionID: function(){

    },

    SetVerboseLevel: function(){

    },

    SetApplyCutsFlag: function(){

    },

    isGeneralIon: function(){

    }



  }

  return ParticleDefinition;

});

