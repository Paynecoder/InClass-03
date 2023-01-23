import styles from "./Card.module.css"
export default function Card({
    degree="none",
    color="purple",
    font="0",
    image="icon/personTwo.png",
    flex="flex",
    column="column"
}) {
    return(
        <div className={styles.main}>
            {
                color === "red" ? <img src={'icon/person.png'} width='50'/> :
                color === "blue" ? <img src={'icon/personThree.png'} width='50'/> :
                                <img src={image} width='50'/>
            }
        {degree}
        </div>
    )
}