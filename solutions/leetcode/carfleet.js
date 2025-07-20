/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {     
      let cars = position.map((pos, i) => [pos, (target - pos) / speed[i]]);
    cars.sort((a,b)=>b[0]-a[0]);
      let fleets = 0;
    let prevTime = 0;

    for (let [pos, time] of cars) {
        if (time > prevTime) {
            fleets++;
            prevTime = time;
        }
    }

    return fleets;
};