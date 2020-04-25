import styled from 'styled-components';

export const AceStyle = styled.div`
    width:1000px;
    max-width:100%;
    margin-top:-10px;
    @media (max-width:1500px) {
        width:850px;
    }
    @media (max-width: 1310px) {
        width: 740px;
    }
    #editor {
        position:absolute;
    }
`;