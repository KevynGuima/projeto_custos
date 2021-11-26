import styles from './Container.module.css'

function Container(props){
    retorn(
        <div class={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container