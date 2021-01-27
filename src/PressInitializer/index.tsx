import { useState } from "react";
import { Label } from '../types'
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import InitializerLabel from "./InitializerLabel";
import './styles.css';

export default function PressInitializer() {
    const [selected, setSelected] = useState<Label[]>([]);

    const handleSelect = (label : Label) => {
        const isAlreadySelected = checkIsSelected(selected, label);
        //console.log("Checking if is already selected.")

        if (isAlreadySelected) {
            //console.log("It is already selected, unselecting.")
            const sel = selected.filter(item => item.id !== label.id);
            setSelected(sel);
        } else {
            //console.log("Selected.")
            setSelected(previous => [...previous, label]);
        }
    }

    function checkIsSelected(selectedLabels : Label [], label: Label) {
        return selectedLabels.some(item => item.id === label.id);
    }

    function renderInitLabel(label : Label) {
        return (
            <InitializerLabel 
                label={label}
                onSelect={handleSelect}
                isSelected={checkIsSelected(selected, label)}
                
            />
        )
    }

    function handleSend(arr: Array<Label>) {
        let finalArr = createLabelArr(10).sort((a, b) => a.id - b.id);

        let sArr = arr.sort((a, b) => a.id - b.id);

        for(let i = 0; i < finalArr.length; i ++) {
            if(sArr[i]) {
                for(let j = 0; j < finalArr.length; j++) {
                    if (sArr[i].id === finalArr[j].id) {
                        finalArr[j] = {
                            id: sArr[i].id,
                            selected: true
                        }
                    }
                }
            }
        }
                
        console.log('Selected Array:')
        console.log(arr)
        
        console.log("Final Array")
        console.log(finalArr)
        
        return finalArr;
    }

    function createLabelArr(num: Number) {
        let arr : Array<Label> = [];
        for(let i = 0; i < num; i++) {
            arr.push({
                id: i,
                selected: false
            })
        }
        return arr;
    }
   
    function sendSelection(arr: Array<Label>) {
        let ret = handleSend(arr);
        return ret
    }

    return (
        <>
        <Navbar />
        <div className="init-container">
            <div className="init-page">
                <div className="init-instructions no-select">
                    Selecione as etiquetas a serem impressas e <br />
                    clique em próximo.
                </div>
                <div className="init-content">
                    <div className="init-row">
                        {renderInitLabel({id : 0})}
                        {renderInitLabel({id : 1})}
                    </div>
                    <div className="init-row">
                        {renderInitLabel({id : 2})}
                        {renderInitLabel({id : 3})}
                    </div>
                    <div className="init-row">
                        {renderInitLabel({id : 4})}
                        {renderInitLabel({id : 5})}
                    </div>
                    <div className="init-row">
                        {renderInitLabel({id : 6})}
                        {renderInitLabel({id : 7})}
                    </div>
                    <div className="init-row">
                        {renderInitLabel({id : 8})}
                        {renderInitLabel({id : 9})}
                    </div>
                    <Link to={{
                        pathname: '/filldata',
                        state: {
                            selected: sendSelection(selected)
                        }
                    }}>
                        <button className="init-button no-select">
                            PROSSEGUIR
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}