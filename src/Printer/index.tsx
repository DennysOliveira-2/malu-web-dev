import { useLocation } from 'react-router-dom';
import { CardState } from '../types';
import PrintableLabel from './PrintableLabel'


interface Location {
    state: Object
}

interface IData { 
    [id:number]: {
        id: number,
        name: string,
        birth: string,
        composition: string,
        date: string,
        posology: string,
        therapist: string,
        desc: string
    }
}

function getObjectSize(obj: Object){
    let size = 0
    for ( let key in obj ) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

export default function Printer() {
    const location: Location = useLocation();
    const data = location.state;
    const objData: IData = data as any

    function parseData(identifier: number, obj: IData) {
        
    }
        
    // for( let i = 10; i < 10; i++ ) {
    //     console.log(obj[i].id)
    // }

   
    

    function renderSelectionLabel(identifier: number, obj: IData) {
        const size = getObjectSize(obj)
        var output: CardState | undefined = undefined;

        for (let i = 0; i < size; i++) {
            if(obj[i].id === identifier) {
                output = obj[i]
            }
        }

        return (
            <PrintableLabel id={identifier} data={output}/>
        )
    }

    return(
        <div className="printer-page">
            <div className="printer-container">
                <div className="printer-content">
                    <div className="printer-row">
                        {renderSelectionLabel(0, objData)}
                        {renderSelectionLabel(1, objData)}
                    </div>
                    <div className="printer-row">
                        {renderSelectionLabel(2, objData)}
                        {renderSelectionLabel(3, objData)}
                    </div>
                    <div className="printer-row">
                        {renderSelectionLabel(4, objData)}
                        {renderSelectionLabel(5, objData)}
                    </div>
                    <div className="printer-row">
                        {renderSelectionLabel(6, objData)}
                        {renderSelectionLabel(7, objData)}
                    </div>
                    <div className="printer-row">
                        {renderSelectionLabel(8, objData)}
                        {renderSelectionLabel(9, objData)}
                    </div>
                </div>
            </div>
        </div>
    )
}