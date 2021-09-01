import styled from "@emotion/styled";

const Wrapper = styled.section`
    flex-grow: 2;
    min-height: ${({altura}) => altura}px;

    .leaflet-container {
        width: 100%;
        min-height: ${({altura}) => altura}px;
    }

    .leaflet-control-zoom {
        display: none;
    }

    .leaflet-control-attribution {
        display: none;
    }

    .popUp {
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        margin: 0;
      }
    
    .popUpTitle{
        text-align:center;
    }

`

export {
    Wrapper
}