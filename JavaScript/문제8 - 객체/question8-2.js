function StationData(name, lat, long){
    this.name = name
    this.lat = lat
    this.long = long
}

StationData.prototype = {
    calculate(stationA, stationB){
        const lat1 = stationA.lat
        const lat2 = stationB.lat
        const long1 = stationA.long
        const long2 = stationB.long

        const R = 6371e3; // 지구의 반지름 (meter)
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (long2 - long1) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        		  Math.cos(φ1) * Math.cos(φ2) *
                  Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const d = R * c / 1000; 
        return  d
    }
}

const seoul = new StationData(
    'seoul',
    37.55620110026294,
    126.97223116703012
)

const daejeon = new StationData(
    'daejeon',
    36.332516127741,
    127.43421099777726
)

const daegu = new StationData(
    'daegu',
    35.88049128950934,
    128.62837657353532
)

const busan = new StationData(
    'busan',
    35.116613680508806,
    129.04009077373016
)

function TrainFare(course, fare){
    this.course = course
    this.fare = fare
}

const stations = [seoul, daejeon, daegu, busan]
const stationsDistance = []

for(let i = 0; i < stations.length - 1; i++){
    for(let j = i + 1; j < stations.length; j++){
        let distance = new TrainFare(`${stations[i].name}-${stations[j].name}`, Math.floor(StationData.prototype.calculate(stations[i], stations[j]))*100)
        stationsDistance.push(distance)
    }
}

console.table(stationsDistance)