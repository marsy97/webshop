import styles from "./product.module.scss";


function product(props) {

function push(){
    console.log(item)
    }
    

    const item={
        name:props.name,
        price:props.price
    
    }

    return(
    
        <div className={styles.cardBg}>
            <h1 className={styles.h1}>{props.name}</h1>
            <h2>{props.price} EUR</h2>
            <button onClick={push} className={styles.button}>Add to cart</button>
        </div>
        
       
    )}

    export default product;