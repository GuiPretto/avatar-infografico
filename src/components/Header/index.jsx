import Link from 'next/link'
import { Wrapper } from './style'

const Header = () => {
    return (
        <Wrapper>
            <nav>
                <ul>
                    <li><Link href={'/'} passHref><a>Infográfico</a></Link></li>
                    <li><Link href={'/sobre'} passHref><a>Sobre</a></Link></li>
                </ul>
            </nav>
        </Wrapper>
    )
}

export default Header