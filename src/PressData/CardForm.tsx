import { useEffect, useState } from "react"
import { CardState } from "../types"
import './card.css'

type Props = {
    id: number,
    parseData: (id:number, input: any) => void;
}

export default function CardForm({ id, parseData }: Props) {
    const [input, setInput] = useState({
        id: id,
        composition: "Composição: Frutas, Flores e Água.",
        date: "2021-01-01",
        posology: "Uma vez por dia.",
        therapist: "Maria Luiza de Almeida",
        desc: "Lorem ipsum dolor..."
    })
         
    function handleChange(e: any) {
        
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value
        })
        
        parseData(id, input);        
    }

    useEffect(() => {
        
    }, [ input, setInput])


    const handleSubmit = (e: any) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value
        })


    }

    return (
        <div className="card-page">
            <div className="card-container">
                <div className="card-content">
                    <header>
                        Etiqueta {id}
                    </header>
                    <form className="card-form" onSubmit={handleSubmit}>
                        <div>
                            <label>Nome do Paciente:</label>
                            <input type="text" name="name" onChange={handleChange} />
                            <br />
                            <label>Data de Nascimento:</label>
                            <input type="date" name="birth" onChange={handleChange} />
                        </div>

                        <div>
                            <label>Composição:</label>
                            <textarea name="composition" defaultValue={input.composition} onChange={handleChange}></textarea>
                            <br />
                            <label>Data da Composição</label>
                            <input type="date" name="compositionDate" defaultValue={input.date} onChange={handleChange} />
                        </div>

                        <div>
                            <label>Posologia:</label>
                            <textarea name="posology" defaultValue={input.posology} onChange={handleChange}></textarea>
                        </div> 
                        
                        <div>
                            <label>Responsável Terapeuta:</label>
                            <select name="therapist" onChange={handleChange}>
                                <option value="Maria Luiza de Almeida">Maria Luiza de Almeida</option>
                            </select>
                        </div>
                        
                        <div>
                            <label>Descrição</label>
                            <textarea name="desc" defaultValue={input.desc} onChange={handleChange}></textarea>
                        </div>

                        
                        
                    </form>
                    <button className="button">SALVAR ETIQUETA</button>
                </div>
            </div>
        </div>
    )
}