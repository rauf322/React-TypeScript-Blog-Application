import { ButtonProps } from '../../../Interfaces';
export function Span({ children, ...props }: ButtonProps) {
    return (
        <span  {...props}>
            {children}
        </span>
    )  
}
