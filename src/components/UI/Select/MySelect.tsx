import type { MySelect } from '../../../Interfaces';
import classes from './MySelect.module.css';

const MySelect = ({DefaultValue, options, onChange}:MySelect) => {
    return (
        <select className={classes.mySelect} onChange={(e) => onChange(e.target.value)}>
            <option value="" disabled>{DefaultValue}</option>
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    );
};

export default MySelect;