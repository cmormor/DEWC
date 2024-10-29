import { useState } from "react";
import { Rutas } from "./Rutas";

export const App = () => {
    const [valueSliderMonto, setValueSliderMonto] = useState(19500);
    const [valueSliderPlazo, setValueSliderPlazo] = useState(16);
    const valueResultado = (valueSliderMonto / valueSliderPlazo).toFixed(2);

    return (
        <Rutas
            valueSliderMonto={valueSliderMonto}
            setValueSliderMonto={setValueSliderMonto}
            valueSliderPlazo={valueSliderPlazo}
            setValueSliderPlazo={setValueSliderPlazo}
            valueResultado={valueResultado}
        />
    );
};
