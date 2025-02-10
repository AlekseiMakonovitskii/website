import { ReactNode } from 'react';
import style from './container.module.scss';

interface ContainerProps {
    children: ReactNode
}

function Container(props: ContainerProps) {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}

export default Container