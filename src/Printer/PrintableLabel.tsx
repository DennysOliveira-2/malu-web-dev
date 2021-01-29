import { useEffect } from "react"
import { CardState } from "../types"
import './styles.css'

interface Props {
    id: number,
    data: CardState | undefined
}

export default function PrintableLabel(props: Props) {
    console.log(props.data)
    useEffect(() => {   
        
    }, [])

    return (
        <div className="printable-label-container">
            <div className="printable-label-content">
                <div className="printable-label">
                    <div className="pl-left">
                        <p><strong>{props.data?.name}</strong></p>
                        <p><strong>Data de Nascimento: </strong>{props.data?.birth}</p>
                        <p>Floral de Bach</p>
                        <p>{props.data?.composition}</p>
                        <p>Data de Composição: {props.data?.date}</p>
                        <p>
                            <strong>Posologia: </strong>{props.data?.posology}
                        </p>
                        <p>
                            <strong>Terapeuta Responsável: </strong><br />
                            {props.data?.therapist}
                        </p>
                    </div>
                    <div className="pl-mid">

                    </div>
                    <div className="pl-right">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>  
    )
}