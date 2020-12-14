import React, { Component } from 'react'
import Card from './Cards.js'
import Tooltips from './Tooltips.js'

export class Carousel extends Component {
    constructor(props) {
        super(props)
        
        this.state = {current_card:1, current_tooltip:1,}
    }

    componentDidMount() {
        let first_card_clone = this.card_container.children[0].cloneNode(true);
        let last_card_clone = this.card_container.children[this.card_container.children.length - 1].cloneNode(true);
        
        // let first_tooltip_clone = this.tooltip_container.children[0].cloneNode(true);
        // let last_tooltip_clone = this.tooltip_container.children[this.tooltip_container.children.length - 1].cloneNode(true);
        
        this.card_container.insertBefore(last_card_clone,this.card_container.children[0]);
        this.card_container.append(first_card_clone);
        this.card_container.style.transitionDuration = '0.0s';
        this.card_container.style.transform = `translate(-${350}px)`;  
        
        // this.tooltip_container.insertBefore(last_tooltip_clone,this.tooltip_container.children[0]);
        // this.tooltip_container.append(first_tooltip_clone);
        // this.tooltip_container.style.transitionDuration = '0.0s';
        // this.tooltip_container.style.transform = `translate(-${350}px)`;
    }

    handle_next = () => {
        if (this.state.current_card < this.card_container.children.length - 1) {
        let new_current_card = this.state.current_card + 1;

        this.setState({ current_card: new_current_card}, () => {
            this.card_container.style.transitionDuration = '0.2s';
            this.card_container.style.transform = `translate(-${350 * this.state.current_card}px)`;
        
            if (this.state.current_card === this.card_container.children.length - 1) {
                setTimeout(() => {
                this.card_container.style.transitionDuration = '0.0s';
                this.card_container.style.transform = `translate(-${350}px)`;

                this.setState({current_card: 1});
                }, 502);       
            }        
        })
        } else {
        return;
    }
    }

    handle_previous = () => {
        if (this.state.current_card > 0) {
            let new_current_card = this.state.current_card - 1;
    
            this.setState({ current_card: new_current_card}, () => {
                this.card_container.style.transitionDuration = '0.2s';
                this.card_container.style.transform = `translate(-${350 * this.state.current_card}px)`;
            
                if (this.state.current_card === 0) {
                    setTimeout(() => {
                    this.card_container.style.transitionDuration = '0.0s';
                    this.card_container.style.transform = `translate(-${350 * (this.card_container.children.length -2)}px)`;
    
                    this.setState({current_card: this.card_container.children.length - 2});
                    }, 502);       
                }        
            })
        } else {
            return;
        }
    }

    // handle_nexttip = () => {
    //     if (this.state.current_tooltip < this.tooltip_container.children.length - 0) {
    //     let new_current_tooltip = this.state.current_tooltip + 1;

    //     this.setState({ current_tooltip: new_current_tooltip}, () => {
    //         this.tooltip_container.style.transitionDuration = '0.2s';
    //         this.tooltip_container.style.transform = `translate(-${75 * this.state.current_tooltip}px)`;
        
    //         if (this.state.current_tooltip === this.tooltip_container.children.length - 0) {
    //             setTimeout(() => {
    //             this.tooltip_container.style.transitionDuration = '0.0s';
    //             this.tooltip_container.style.transform = `translate(-${75}px)`;

    //             this.setState({current_tooltip: 1});
    //             }, 502);       
    //         }        
    //     })
    //     } else {
    //     return;
    // }
    // }
    // handle_previoustip = () => {
    //     if (this.state.current_tooltip > 0) {
    //         let new_current_tooltip = this.state.current_tooltip - 1;
    
    //         this.setState({ current_tooltip: new_current_tooltip}, () => {
    //             this.tooltip_container.style.transitionDuration = '0.2s';
    //             this.tooltip_container.style.transform = `translate(-${75 * this.state.current_tooltip}px)`;
            
    //             if (this.state.current_tooltip === 0) {
    //                 setTimeout(() => {
    //                 this.tooltip_container.style.transitionDuration = '0.0s';
    //                 this.tooltip_container.style.transform = `translate(-${75 * (this.tooltip_container.children.length -2)}px)`;
    
    //                 this.setState({current_tooltip: this.tooltip_container.children.length - 2});
    //                 }, 502);       
    //             }        
    //         })
    //     } else {
    //         return;
    //     }
    // }

    // click1={clickity}
    // clickity(){
    //     this.handle_next;
    //     this.handle_nexttip;
    //  }

    render() {
        return (
            <div>                
                <div className='view-port' style={styles.view_port}>
                    <button onClick={this.handle_previous} className='btn btn-secondary btn-block mt-4'>Previous </button> 
                    <button onClick={this.handle_next} className='btn btn-secondary btn-block mt-4'>Next</button>  
                    <div ref= {ref_id => this.tooltip_container = ref_id} style={styles.tooltip_container}>
                        <Tooltips card_hint='capitec'/>
                        <Tooltips card_hint='fnb'/>
                        <Tooltips card_hint='absa'/>
                        <Tooltips card_hint='standardbank'/>
                        <Tooltips card_hint='nedbank'/>
                    </div>                     
                    <div ref= {ref_id => this.card_container = ref_id} className='card-container' style={styles.card_container}>
                        <Card image='uploads/img1.png' card_desc='this is capitec'/>
                        <Card image='uploads/img2.png' card_desc=' this is fnb'/>
                        <Card image='uploads/img3.jpg' card_desc='this is absa'/>
                        <Card image='uploads/img4.png' card_desc='this is standardbank'/>
                        <Card image='uploads/img5.png' card_desc='this is nedbank'/>
                    </div>                     
            </div>
            
        </div>
        )
    }
}

const styles = {
    view_port : {
       overflow: 'hidden'
    },
    card_container: {
        display:'flex',
        flexDirection: 'row',
        width: 'fit-content',
    },
    tooltip_container: {
        display:'flex',
        flexDirection: 'row',
        // width: 'fit-content',   
        justifyContent: 'center',          
        border: '2px solid black',
    },
    }

export default Carousel

