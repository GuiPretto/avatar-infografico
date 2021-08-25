import styled from "@emotion/styled";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;   
`

const Button = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    padding: 10px;

    border-bottom: 1px solid #FFF;

    cursor: pointer;

    h2 {
        margin: 0;
    }

    img {
        transition: all .2s ease-in-out;

        transform:  ${({open}) => open ? 'rotateZ(0deg)' : 'rotateZ(-90deg)'};
    }
`

const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;   

    max-height: ${({open}) => open ? '100vh' : '0'};
    padding: ${({open}) => open ? '1.5rem 0 1.5rem 1rem' : '0 0 0 1rem'};

    overflow: ${({open}) => open ? 'visible' : 'hidden'};
    transition: all .35s ease-in-out;    

    color: #FFF;
`

const Item = styled.div`
    padding: .5rem;

    border-bottom: 1px solid transparent;
    border-radius: 4px;

    background-color: ${({selected}) => selected ? '#294977' : 'transparent'};

    transition: all .2s ease-in-out;  
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid #FFF;
    }
`

export {
    Wrapper,
    Button,
    Items,
    Item
}