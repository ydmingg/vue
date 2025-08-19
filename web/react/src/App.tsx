import { useEffect, useState } from "react";
import ReatBase from "../reatBase/index";

type Props = {
    id: number;
    name: string;
    completed: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Data() { 
    console.log(ReatBase);
    const [data, setData] = useState<Props[]>([])
    
    useEffect(() => {
        console.log("effect");
        
        (async () => { 
            const res = await fetch("/data.json");
            const data: Props[]= await res.json();
            setData(data);

            
        })()
    
    }, []);


    return (
        <>
            {data.map((item) => { 
                return (
                    <div key={item.id}>
                        <input type="checkbox" defaultChecked={item.completed} />
                        {item.name}
                    </div>
                )
            })}
        </>
    )
}

function App() { 
    return (
        <>
            <ReatBase />
            {/* <Data></Data> */}
        </>
    )
}


export default App;