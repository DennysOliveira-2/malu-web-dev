import { Link, useLocation } from "react-router-dom"
import { Label, CardState } from '../types'
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import CardForm from "./CardForm";
import './styles.css';

interface Location {
    state: {
        selected: []
    }
}

export default function PressData() {
    const location: Location = useLocation();
    const from = location.state;
    const selectedObjs = from.selected;
    const [state, setState ] = useState({});

    useEffect(() => {
        console.log(state)
    },[ state ])

    const parseData = (id: number, input: CardState) => {
        let prevState = state;        
        setState({
            ...prevState,
            [id]: input
        })

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
        
        return (
            <div>
                <div className="card-header">

                </div>
                <div className="card-body">
                    {component}
                    <Link to={{
                        pathname: '/print',
                        state: state
                    }}>
                        <button className="print-button no-select">
                            Finalizar
                        </button>
                    </Link>
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