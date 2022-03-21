
    const pokeImage = (url) => {
        const pokeImg = document.getElementById("pokeImg");
        pokeImg.src = url;
    }

    const pokeEstadisticas = (arrStats) => {
        const pokeHP = document.getElementById("hp");
        const pokeSpeed = document.getElementById("speed");
        const pokeAttack = document.getElementById("attack");
        const pokeDefense = document.getElementById("defense");
        pokeHP.innerHTML = arrStats[0]+'%';
        pokeHP.style.width = arrStats[0]+'%';
        pokeAttack.innerHTML = arrStats[1]+'%';
        pokeAttack.style.width = arrStats[1]+'%';
        pokeDefense.innerHTML = arrStats[2]+'%';
        pokeDefense.style.width = arrStats[2]+'%';
        pokeSpeed.innerHTML = arrStats[3]+'%';
        pokeSpeed.style.width = arrStats[3]+'%';
    }

    const pokeMovs = (mov) => {
        let movimientos = "";
        mov.forEach(element => movimientos = movimientos+element+',');
        
        const pokeMov = document.getElementById("mov");
        pokeMov.innerHTML = movimientos.substring(0, movimientos.length - 1);
    }
    

    let estadisticasPoke = [0,0,0,0];

    const imprimir = () =>{
        const fetchPokemon = () =>{
        const pokeName = document.getElementById('pokeName');
        let pokeInput = pokeName.value.toLowerCase();
        const URL = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
        fetch(URL).then((resp) =>{
            if(resp.status != "200"){
                pokeImage("/no-pokemon.jpg");
            }else{
                return resp.json();
            }
        }).then((data) =>{
            let pokeImg = data.sprites.front_default;
                estadisticasPoke[0] = data.stats[0].base_stat;
                estadisticasPoke[1] = data.stats[1].base_stat;
                estadisticasPoke[2] = data.stats[2].base_stat;
                estadisticasPoke[3] = data.stats[5].base_stat;
            pokeImage(pokeImg);
            pokeEstadisticas(estadisticasPoke);
            pokeMovs(data.abilities.map(ab => ab.ability.name));
        })
        }
        fetchPokemon();
    }