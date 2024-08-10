import styled from "styled-components";

const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    padding-top: 3rem;
    .thumbnail{
        width: 100%;
    }
    .contents{
        margin-top: 1rem;
        h2{
            margin: 0;
        }
        p{
            margin: 0:
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
            font-size: 14px;
        }
        .information {
            color: blue;
            text-overflow: ellipsis; 
            overflow: hidden; 
            white-space: nowrap; 
            width: 220px;
            display: inline-block; 
            max-width: 200px; 
        }
    }
    
    & + &{
        margin-top: 3rem;
    }
`;

export default CarouselContainer;
