"use client"
import styled from "styled-components"
import {useEffect, useState} from "react";
import {Contents} from "../interfaces/Contents"

import UnisContents from "@/app/interfaces/Decorates";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px indigo solid;
`

export default function Home() {
    const [data, setData] = useState<Contents[]>([]);

    useEffect(() => {
        async function fetchData() {

            const rawData = await fetch('/api/serverHandler')

            const iconsets = await rawData.json();

            const newData = iconsets.map((item: Contents) => {
                const cur: Contents = {
                    iconset_id: item.iconset_id,
                    name: item.name,
                    identifier: item.identifier,
                    published_at: item.published_at,
                    type: item.type,
                }
                return cur;
            });

            setData(newData);

            console.log("Fetched data:", newData);

            /*
            const data =  await rawData.json();
            console.log("dadfaf",data.iconsets );
            const iconsets = data.iconsets;

            (Array.from(iconsets)).map( item=> {
                console.log(item);
                const cur : Contents = {
                    iconset_id: item.iconset_id!,
                    name: item.name!,
                    published_at: item.published_at!,
                    type: item.type!,
                }
                const newdata = data.push(cur);
                setData(newdata)
            })
            console.log("data", data)
*/
        }
            fetchData()
                .then(() => console.log("Data fetched successfully"))
                .catch((e: Error) => console.log("There was the error: " + e));
        }, []);

    return (
      <ParentDiv>
           <UnisContents data={data}/>
      </ParentDiv>
  )
}
