import { useState } from "react";
import AppRouter from "./router";

const App = () => {

    const [loading, setLoading] = useState(false);


    return <>
    {
        loading ? <LoadingPage/> : <AppRouter/>
    }
    </>;
};

export default App;
