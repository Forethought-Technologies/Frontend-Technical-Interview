import React from 'react';
import 'my-Btn-Styles.css';

const Button = (myProps) => {
    const { btnTxt, btnLnk, btnCls, myfunction} = myProps;
    const clicky = () => {
        console.log('this is working right?')
        myfunction()
    }
    if(!btnTxt || !(btnLnk && btnCls) || !myfunction) return null
    return (
        <div 
            onClick={() => clicky()} 
            className='container' 
            style={{'border':'1px'}}>
            <button 
                className={`btn ${btnCls}`} 
                style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                <span 
                    className='text' 
                    style={{'fontSize':'14px', 'color':'black'}}>
                    {btnTxt}
                </span>
            </button>
        </div>
    )
}
export default Button;