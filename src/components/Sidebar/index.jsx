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
    {title: 'Local X', tribe: 'fire', lat: .15, long: .22},
    {title: 'Local 1', tribe: 'air', lat: .15, long: .22},
    {title: 'Local 2', tribe: 'air', lat: .15, long: .22},
    {title: 'Local 3', tribe: 'air', lat: .15, long: .22},
    {title: 'Local água', tribe: 'water', lat: .15, long: .22},
    {title: 'local Y', tribe: 'earth', lat: .15, long: .22},
    {title: 'local R', tribe: 'earth', lat: .15, long: .22},
    {title: 'local E', tribe: 'earth', lat: .15, long: .22},
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