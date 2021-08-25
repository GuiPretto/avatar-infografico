import { useEffect, useState } from "react"
import { Wrapper } from './style'

const Main = ({children}) => {
    const [mainHeight, setMainHeight] = useState(0)

    useEffect(() => {
        setMainHeight(getMinMainHeight())
    }, [])

    const getMinMainHeight = () => {
        if (typeof window !== "undefined") {
            const header = parseInt(window.getComputedStyle(document.querySelector('header')).height)
            // const footer = parseInt(window.getComputedStyle(document.querySelector('footer')).height)
            return (window.innerHeight - header)
        }
    }

    return (
        <Wrapper height={mainHeight}>
            {children}
        </Wrapper>
    )
}

export default Main