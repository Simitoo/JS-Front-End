function solve(heroesData) {
    let registerForHeroes = [];

    getHeroData(heroesData, registerForHeroes)

    registerForHeroes.sort((a, b) => a.level - b.level)
        .forEach(hero => console.log(heroOutput(hero)));
    
    function getHeroData(input, registerForHeroes){
        for(let heroInfo of input){
            let currData = heroInfo.split(' / ');
            let hero = {
                name: currData[0],
                level: Number(currData[1])
            };

            if(currData.length === 3){
                let items = String(currData[2]).split(', ');
                hero.items = items;
            }

            registerForHeroes.push(hero);
        }
    }

    function heroOutput(hero){
        return `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${(hero.items) ? hero.items.join(', ') : 'none'}`.trim();
    }
}
solve([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);