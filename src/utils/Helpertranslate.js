import { useContext, useState } from "react";
import { Translate } from "../Context/Translater";



const Perevod = (rus, eng, uzb) => {
    const { translatelanguages } = useContext(Translate)
    let text = translatelanguages === "Rus" ? rus : translatelanguages === "Eng" ? eng : uzb;
    return text
}
export default Perevod;