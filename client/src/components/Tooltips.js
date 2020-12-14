import React from 'react'

const Tooltips = (props) => {
        return (
        <div style={styles.tips}>
            <p>{props.card_hint}</p>           
        </div>
        
    )
}
const styles = {
tips : {
    marginLeft: '15px',
    textAlign: 'center',    
    width: '80px',
    height: '50px',
    },
}

export default Tooltips;
