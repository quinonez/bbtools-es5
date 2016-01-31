/* 
   +----------------------------------------------------------------------+
   |                              BBT Phys                                |
   |                            --- Phys ---                              |
   |                            Module File                               |
   +----------------------------------------------------------------------+
   This file defines the units and the phyisical constants.
   +----------------------------------------------------------------------+
   | JavaScript                                                           |
   +----------------------------------------------------------------------+
   F. Quinonez - Created 2016-01-09                  
               - Geant4 File
   +----------------------------------------------------------------------+
   | C++                                                                  |
   +----------------------------------------------------------------------+
   $Id: SystemOfUnits.h,v 1.4 2010/06/16 17:12:28 garren Exp $
   ----------------------------------------------------------------------
   HEP coherent system of Units
  
   This file has been provided to CLHEP by Geant4 (simulation toolkit for HEP).
  
   The basic units are :
   millimeter              (millimeter)
   nanosecond              (nanosecond)
   Mega electron Volt      (MeV)
   positron charge         (eplus)
   degree Kelvin           (kelvin)
   the amount of substance (mole)
   luminous intensity      (candela)
   radian                  (radian)
   steradian               (steradian)
  
   Below is a non exhaustive list of derived and pratical units
   (i.e. mostly the SI units).
   You can add your own units.
  
   The SI numerical value of the positron charge is defined here,
   as it is needed for conversion factor : positron charge = e_SI (coulomb)
  
   The others physical constants are defined in the header file :
  PhysicalConstants.h
  
   Authors: M.Maire, S.Giani
  
   History:
  
   06.02.96   Created.
   28.03.96   Added miscellaneous constants.
   05.12.97   E.Tcherniaev: Redefined pascal (to avoid warnings on WinNT)
   20.05.98   names: meter, second, gram, radian, degree
              (from Brian.Lasiuk@yale.edu (STAR)). Added luminous units.
   05.08.98   angstrom, picobarn, microsecond, picosecond, petaelectronvolt
   01.03.01   parsec    
   31.01.06   kilogray, milligray, microgray    
   29.04.08   use PDG 2006 value of e_SI
   03.11.08   use PDG 2008 value of e_SI



   $Id: PhysicalConstants.h,v 1.4 2010/06/16 17:12:28 garren Exp $
   ----------------------------------------------------------------------
   HEP coherent Physical Constants
  
   This file has been provided by Geant4 (simulation toolkit for HEP).
  
   The basic units are :
    		millimeter  
   		nanosecond  
   		Mega electron Volt  
   		positon charge 
   		degree Kelvin
                amount of substance (mole)
                luminous intensity (candela)
   		radian  
                steradian 
  
   Below is a non exhaustive list of Physical CONSTANTS,
   computed in the Internal HEP System Of Units.
  
   Most of them are extracted from the Particle Data Book :
          Phys. Rev. D  volume 50 3-1 (1994) page 1233
   
          ...with a meaningful (?) name ...
  
   You can add your own constants.
  
   Author: M.Maire
  
   History:
  
   23.02.96 Created
   26.03.96 Added constants for standard conditions of temperature
            and pressure; also added Gas threshold.
   29.04.08   use PDG 2006 values
   03.11.08   use PDG 2008 values
*/

define([ ], function( ){
  "use strict";

  function Phys( args ){

  } 

  var Phys.Avogadro = 6.02214179e+23/mole;
  
  //
  // c   = 299.792458 mm/ns
  // c^2 = 898.7404 (mm/ns)^2 
  //
  var Phys.c_light   = 2.99792458e+8 * m/s;
  var Phys.c_squared = c_light * c_light;
  
  //
  // h     = 4.13566e-12 MeV*ns
  // hbar  = 6.58212e-13 MeV*ns
  // hbarc = 197.32705e-12 MeV*mm
  //
  var Phys.h_Planck      = 6.62606896e-34 * joule*s;
  var Phys.hbar_Planck   = h_Planck/twopi;
  var Phys.hbarc         = hbar_Planck * c_light;
  var Phys.hbarc_squared = hbarc * hbarc;
  
  //
  //
  //
  var Phys.electron_charge = - eplus; // see SystemOfUnits.h
  var Phys.e_squared = eplus * eplus;
  
  //
  // amu_c2 - atomic equivalent mass unit
  //        - AKA, unified atomic mass unit (u)
  // amu    - atomic mass unit
  //
  var Phys.electron_mass_c2 = 0.510998910 * MeV;
  var Phys.  proton_mass_c2 = 938.272013 * MeV;
  var Phys. neutron_mass_c2 = 939.56536 * MeV;
  var Phys.          amu_c2 = 931.494028 * MeV;
  var Phys.             amu = amu_c2/c_squared;
  
  //
  // permeability of free space mu0    = 2.01334e-16 Mev*(ns*eplus)^2/mm
  // permittivity of free space epsil0 = 5.52636e+10 eplus^2/(MeV*mm)
  //
  var Phys.mu0      = 4*pi*1.e-7 * henry/m;
  var Phys.epsilon0 = 1./(c_squared*mu0);
  
  //
  // electromagnetic coupling = 1.43996e-12 MeV*mm/(eplus^2)
  //
  var Phys.elm_coupling           = e_squared/(4*pi*epsilon0);
  var Phys.fine_structure_const   = elm_coupling/hbarc;
  var Phys.classic_electr_radius  = elm_coupling/electron_mass_c2;
  var Phys.electron_Compton_length = hbarc/electron_mass_c2;
  var Phys.Bohr_radius = electron_Compton_length/fine_structure_const;
  
  var Phys.alpha_rcl2 = fine_structure_const
                                     *classic_electr_radius
                                     *classic_electr_radius;
  
  var Phys.twopi_mc2_rcl2 = twopi*electron_mass_c2
                                               *classic_electr_radius
                                               *classic_electr_radius;
  //
  //
  //
  var Phys.k_Boltzmann = 8.617343e-11 * MeV/kelvin;
  
  //
  //
  //
  var Phys.STP_Temperature = 273.15*kelvin;
  var Phys.STP_Pressure    = 1.*atmosphere;
  var Phys.kGasThreshold   = 10.*mg/cm3;
  
  //
  //
  //
  var Phys.universe_mean_density = 1.e-25*g/cm3;

  Phys.prototype = {
    constructor: Phys,


  }

  return Phys;

});

