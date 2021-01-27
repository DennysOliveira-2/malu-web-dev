import Label from "./Label"
import './styles.css'

export default function Press(props: Object) {

    function renderSelectionLabel(i: number) {
        
        return (
            <Label id={i}/>
        )
    }

    return(
        <div className="press-container">
            <div className="press-page">
                <div className="press-content">
                    <div className="press-row">
                        {renderSelectionLabel(0)}
                        {renderSelectionLabel(1)}
                    </div>
                    <div className="press-row">
                        {renderSelectionLabel(2)}
                        {renderSelectionLabel(3)}
                    </div>
                    <div className="press-row">
                        {renderSelectionLabel(4)}
                        {renderSelectionLabel(5)}
                    </div>
                    <div className="press-row">
                        {renderSelectionLabel(6)}
                        {renderSelectionLabel(7)}
                    </div>
                    <div className="press-row">
                        {renderSelectionLabel(8)}
                        {renderSelectionLabel(9)}
                    </div>
                </div>
            </div>
        </div>
    )
}