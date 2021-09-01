import { useEffect, useState } from "react"
import Accordion from "./Accordion"
import { Wrapper } from "./style"

const tribos = [
    {title: 'Fogo', tribe: 'fire'},
    {title: 'Ar', tribe: 'air'},
    {title: 'Água', tribe: 'water'},
    {title: 'Terra', tribe: 'earth'},
]

const locais = [    
    {title: 'Abadia', tribe: 'earth', lat: .32, long: -.15, episode: "Livro da Água - Episódio 13/61 ", episodeTitle: "O Espírito Azul", data: "17 de Junho de 2005"},
    {title: 'Academia de Dominação de Terra do Mestre Yu', tribe: 'earth', lat: -.18, long: .25, episode: "Livro da Terra - Episódio 26/61", episodeTitle: "O Cometa de Sozin Parte 2 - Os Velhos Mestres", data: "5 de Maio de 2006"},
    {title: 'Acampamento do Lótus Branco', tribe: 'earth', lat: .31, long: .37, episode: "Livro do Fogo - Episódio 59/61", episodeTitle: "O Espírito Azul", data: "19 de Julho de 2008"},
    {title: 'Aldeia de Hama', tribe: 'fire', lat: .04, long: -.50, episode: "Livro do Fogo - Episódio 48/61", eepisodeTitle: "A Manipuladora de Fantoches", data: "9 de Novembro de 2007"},
    {title: 'Antiga Cidade dos Guerreiros do Sol', tribe: 'fire', lat: .15, long: -.65, episode: "Livro do Fogo - Episódio 53/61", episodeTitle: "Os Mestres da Dominação de Fogo", data: "15 de Julho de 2008"},
    {title: 'Ba Sing Se', tribe: 'earth', lat: .31, long: .45, episode: "Livro da Terra - Episódio 27/61", episodeTitle: "Zuko Sozinho", data: "12 de Maio de 2006"},
    {title: 'Cidade da Fonte de Fogo', tribe: 'fire', lat: -.01, long: -.35, episode: "Livro do Fogo - Episódio 47/61", episodeTitle: "A Fugitiva", data: "25 de Outubro de 2007"},
    {title: 'Floresta Wulong', tribe: 'earth', lat: .24, long: -.31, episode: "Livro do Fogo - Episódio 59/61", episodeTitle: "O Cometa de Sozin Parte 2 - Os Velhos Mestres", data: "19 de Julho de 2008"},
    {title: 'Ilha de Roku', tribe: 'fire', lat: .015, long: -.28, episode: "Livro do Fogo - Episódio 46/61", episodeTitle: "O Avatar e o Senhor do Fogo", data: "19 de Outubro de 2007"},
    {title: 'Ilha Ember', tribe: 'fire', lat: .04, long: -.46, episode: "Livro do Fogo - Episódio 45/61", episodeTitle: "A Praia", data: "19 de Outubro de 2007"},
    {title: 'Ilha Kyoshi', tribe: 'water', lat: -.22, long: .01, episode: "Livro da Água - Episódio 4/61", episodeTitle: "As Guerreiras de Kyoshi", data: "4 de Março de 2005"},
    {title: 'Ilha Meia-Lua', tribe: 'fire', lat: .1, long: -.14, episode: "Livro da Água - Episódio 3/61", episodeTitle: "O Templo de Ar do Sul", data: "25 de Fevereiro de 2005"},    
    {title: 'Mar Mo Ce', tribe: 'earth', lat: .17, long: -.09, episode: "Livro da Água - Episódio 6/61", episodeTitle: "Aprisionados", data: "18 de Março de 2005"},
    {title: 'Montanhas Kolau', tribe: 'earth', lat: -.05, long: .10, episode: "Livro da Água - Episódio 5/61", episodeTitle: "O Rei de Omashu", data: "18 de Março de 2005"},
    {title: 'Montanhas Patola', tribe: 'air', lat: -.36, long: -.15, episode: "Livro da Água - Episódio 3/61", episodeTitle: "O Templo de Ar do Sul", data: "25 de Fevereiro de 2005"},
    {title: 'Nação do Fogo', tribe: 'fire', lat: .0, long: -.635, episode: "Livro da Água - Episódio 12/61", episodeTitle: "A Tempestade", data: "3 de Junho de 2005"},
    {title: 'Oásis das Palmeiras Enevoadas', tribe: 'earth', lat: -.11, long: .25, episode: "Livro da Terra - Episódio 30/61", episodeTitle: "A Biblioteca", data: "14 de Julho de 2006"},
    {title: 'Oásis Espiritual do Polo Norte', tribe: 'water', lat: .63, long: -.02, episode: "Livro da Água - Episódio 19/61", episodeTitle: "O Cerco do Norte Parte 1", data: "2 de Dezembro de 2005"},
    {title: 'Omashu', tribe: 'earth', lat: -.09, long: .12, episode: "Livro da Água - Episódio 5/61", episodeTitle: "O Rei de Omashu", data: "18 de Março de 2005"},
    {title: 'Rio Nan Shan', tribe: 'earth', lat: -.20, long: .26, episode: "Livro da Terra - Episódio 28/61", episodeTitle: "A Caçada", data: "26 de Maio de 2006"},
    {title: 'Sala do Calendário Planetário', tribe: 'earth', lat: .06, long: .42, episode: "Livro da Terra - Episódio 30/61", episodeTitle: "A Biblioteca", data: "14 de Julho de 2006"},
    {title: 'Templo do Ar do Oeste', tribe: 'air', lat: .34, long: -.53, episode: "Livro do Fogo - Episódio 52/61", episodeTitle: "O Templo de Ar do Oeste", data: "14 de Julho de 2008"},
    {title: 'Templo do Ar do Norte', tribe: 'air', lat: .47, long: .16, episode: "Livro da Água - Episódio 17/61", episodeTitle: "O Templo de Ar do Norte", data: "4 de Novembro de 2005"},
    {title: 'Templo do Ar do Sul', tribe: 'air', lat: -.33, long: -.18, episode: "Livro da Água - Episódio 3/61", episodeTitle: "O Templo de Ar do Sul", data: "25 de Fevereiro de 2005"},
    {title: 'Templo do Ar do Leste', tribe: 'air', lat: -.12, long: .69, episode: " Livro da Terra - Episódio 36/61", episodeTitle: "Os Dias Perdidos do Appa", data: "13 de outubro de 2006"},
    {title: 'Tribo da Água do Norte', tribe: 'water', lat: .56, long: -.1, episode: "Livro da Água - Episódio 18/61", episodeTitle: "O Mestre de Dobra de Água", data: "4 de Novembro de 2005"},
    {title: 'Tribo da Água do Pântano', tribe: 'water', lat: -.09, long: .20, episode: "Livro da Terra - Episódio 24/61", episodeTitle: "O Pântano", data: "14 de Abril de 2006"},
    {title: 'Tribo da Água do Sul', tribe: 'water', lat: -.54, long: -.19, episode: "Livro da Água - Episódio 1/61", episodeTitle: "O Garoto no Iceberg", data: "21 de Fevereiro de 2005"},
]

const Sidebar = ({setActualLocation}) => {
    const [tribe, setTribe] = useState(null)
    const [location, setLocation] = useState(null)
    const [filteredLocations, setFilteredLocations] = useState(locais)

    useEffect(() => {
        if (tribe) {
            let newFilteredLocations = [...locais].filter((l) => l.tribe === tribe)
            setFilteredLocations(newFilteredLocations)
        } else {
            setFilteredLocations(locais)
        }
    }, [tribe])

    useEffect(() => {
        if (location) {
            setActualLocation(location)
        } else {
            setActualLocation(null)
        }
    }, [location])

    return (
        <Wrapper>
            <Accordion title={'Tribos'} isTribe items={tribos} setLocation={setLocation} setTribe={setTribe}/>
            <Accordion title={'Locais'} items={filteredLocations} setLocation={setLocation} setTribe={setTribe}/>
        </Wrapper>
    )
}

export default Sidebar