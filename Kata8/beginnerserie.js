function midNight(h,m,s){
let hrToMs = h*3600000;
let minToMs =m*60000;
let secToMs = s*1000;

return hrToMs+minToMs+secToMs

}
console.log(midNight(0,23,13))