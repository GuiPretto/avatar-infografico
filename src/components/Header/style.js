import styled from "@emotion/styled";

const Wrapper = styled.header`

    padding: 20px;

    background-color: #132033;

    border-bottom: 1px solid #FFF;

    ul {
        display: flex;

        margin: 0;
        padding: 0;
        list-style-type: none;

        li {
            padding: 0 20px;

            a {
                transition: all .2s ease-in-out;

                border-bottom: 2px solid transparent;

                font-weight: 600;
                color: #FFF;
            
                &:hover {
                    border-bottom-color: #FFF;
                }
            }
        }
    }

`

export {
    Wrapper
}