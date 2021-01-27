import { Label } from '../types';
import './styles.css';


type Props = {
    label: Label,
    onSelect: (label : Label) => void;
    isSelected: boolean;
}

export default function InitializerLabel({ label, isSelected, onSelect }: Props) {
    return (
        <div 
            onClick={() => onSelect(label)} 
            className={`init-label ${isSelected ? 'selected' : ''}`}
        >
            <span className="no-select">
                Etiqueta {label.id}
            </span>
        </div>
    )
}