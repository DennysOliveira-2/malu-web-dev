import { useLocation } from "react-router-dom"
import Navbar from "../Navbar";
import CardForm from "./CardForm";
import './styles.css';
import { Label, CardState } from '../types'
import { useState } from "react";

type Location = {
    state: {
        selected: []
    }
}

export default function PressData() {
    const location: Location = useLocation();
    const from = location.state;
    const selectedObjs = from.selected;
    const [state, setState ] = useState({});

    // Array in JSON format
    //console.log('object array')
    //console.log(selectedObjs)

    const parseData = (id: number, input: CardState) => {
        // setState({
        //     [id]: {
        //         input
        //     }
        // })
        
        let prevState = state;

        let newState = {
            name: input.name,
            birth: input.birth,
            composition: input.composition,
            date: input.date,
            posology: input.posology,
            therapit: input.therapist,
            desc: input.desc
        }

        setState({
            ...state,
            [id]: input
        })

        console.log(state)
        // setState(prevState => ({
        //     ...prevState,
        //     id : input
        // }));

        return
    }

    function drawCards() {
        let arr: Array<Label> = selectedObjs.slice();
        let component: JSX.Element[] = [];

        for (let i = 0; i < 10; i++) {
            if (arr[i].selected) {
                component.push(
                    <CardForm parseData={parseData} id={arr[i].id}/>
                )
            }
        }
        
        function handleOnClick() {
            
        }

        return (
            <div>
                <div className="card-header">

                </div>
                <div className="card-body">
                    {component}
                    <button onClick={handleOnClick}> FINALIZR </button>
                </div>

            </div>
        )
    }

    return (
        <>
            <Navbar />
            <div className="data-page">
                <div className="data-container">
                    <div className="data-header">

                    </div>
                    <div className="data-content">
                        {drawCards()}
                    </div>
                </div>
            </div>
        </>
    )
}