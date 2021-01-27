import { useEffect } from "react"

type Props = {
    id: number
}

export default function Label(props: Props) {
    
    useEffect(() => {
        

    }, [])

    return (
        <div className="label-container">
            <div className="label-content">
                <div className="label">
                    {props.id}
                </div>
            </div>
        </div>
    )
}