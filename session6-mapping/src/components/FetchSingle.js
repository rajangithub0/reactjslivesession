import { useState } from "react";

function FetchSingle() {

    const [data, setData] = useState(null)
    console.log(data);


    const handleclick = async () => {
        try {
            const resp = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            const json = await resp.json();
            setData(json);
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <button className="btn btn-primary w-100" onClick={handleclick} > Get NASA data</button>
            {
                data &&
                <div className="container" >
                    <h3>{data.title}</h3>
                    <video src={data.url} alt={data.title} controls />
                    <p>{data.explanation}</p>
                    <hr />
                    <h3>{data.copyright},{data.date}</h3>

                </div>
            }
        </div>
    );
}

export default FetchSingle;