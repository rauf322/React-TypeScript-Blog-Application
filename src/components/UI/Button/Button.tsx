import classes from './Button.module.css';
import { ButtonProps } from '../../../Interfaces';


export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={classes.btn} {...props}>
      {children}
    </button>
  );
}
