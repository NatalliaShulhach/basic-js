const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
let newStr_1 = !parseFloat(sampleActivity)
  if(newStr_1 || typeof sampleActivity !== 'string') return false;
let newStr_2 = Number(sampleActivity);

if (newStr_2 <= 0 || newStr_2 >= MODERN_ACTIVITY) return false;

let koeff = 0.693 / HALF_LIFE_PERIOD;
let 
return Math.floor(Math.log(parseFloat(sampleActivity)/MODERN_ACTIVITY)/koeff)*-1;
};
