import { Button, Wrapper, Items, Item } from './style'
import Arrow from '../../../../public/arrow.svg'
import Image from 'next/image'
import { useState } from 'react'

const Accordion = ({ title, items, isTribe, setTribe, setLocation }) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(null)

    const handleLocationClick = (location) => {
        console.log(location)
        if (selected === location.title) {
            setSelected(null)
            setLocation(null)
        } else {
            setSelected(location.title)
            setLocation(location)
        }
    }

    const handleTribeClick = (tribe) => {
        if (selected === tribe) {
            setSelected(null)
            setTribe(null)
        } else {
            setSelected(tribe)
            setTribe(tribe)
        }
    }

    return (
        <Wrapper>
            <Button open={open} onClick={() => setOpen(!open)}>
                <h2>{title}</h2>
                <Image src={Arrow}/>
            </Button>
            <Items open={open}>
                {items.map((item, index) => isTribe ? (
                    <Item key={index} selected={selected === item.tribe} onClick={() => handleTribeClick(item.tribe)}>{item.title}</Item>
                ) : (
                    <Item key={index} selected={selected === item.title} onClick={() => handleLocationClick(item)}>{item.title}</Item>
                ))}
            </Items>
        </Wrapper>
    )
}

Accordion.defaultProps = {
    title: 'Titulo',
    items: []
}

export default Accordion