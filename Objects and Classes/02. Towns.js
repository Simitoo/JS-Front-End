function solve(townsInput) {
    townsInput.map(townInfo => townInfo.split(' | '))
            .map(([townName, latitude, longitude]) => (
                {
                    town: townName,
                    latitude: parseFloat(latitude).toFixed(2),
                    longitude: parseFloat(longitude).toFixed(2)
                }
            ))
            .forEach(town => console.log(town));
}
solve(['Sofia | 42.696552 | 23.32601'
, 'Beijing | 39.913818 | 116.363625']);