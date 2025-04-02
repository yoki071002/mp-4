import styled from "styled-components";
import {Contents} from "../interfaces/Contents";

const AllUniDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: floralwhite;
    margin: auto;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;

    @media screen (max-width: 800px){
        padding: 10px;
    }
`;

const SingleUniDiv = styled.div<{$status: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    padding: 2%;
    margin: 1%;
    background-color: antiquewhite;
    border: 2px solid cornsilk;
    text-align: center;
    font: calc(2px + 1vw) serif sans-serif small-caps;
    word-wrap: break-word;
    box-sizing: border-box;
    max-width: 100%;

    @media screen (max-width: 800px) {
        width: 90%;
        margin: 5px;
    }

    h1{margin-bottom: 10px;}
    p{margin: 5px 0;}
`;

export default function UnisContents(props : {data: Contents[]}){
    console.log("typ1fwewe", typeof props.data);
    return (
        <AllUniDiv>
            {
                props.data.map((char: Contents) =>
                        <SingleUniDiv key={char.identifier} $status={char.identifier}>
                            <h1>{char.name}</h1>
                            <p>{char.iconset_id}</p>
                            <p>{char.published_at}</p>
                            <p>{char.type}</p>
                        </SingleUniDiv>
                )
            }
        </AllUniDiv>
    );
}