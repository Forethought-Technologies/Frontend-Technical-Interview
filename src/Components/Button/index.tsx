import React from 'react';
import './my-Btn-Styles.css';

const Button = (myProps: any) => {
  const { btnTxt, btnLnk, btnCls, myfunction } = myProps;
  const clicky = () => {
    console.log('this is working right?')
    myfunction()
  }

  if (!btnTxt || !(btnLnk && btnCls) || !myfunction) return null
  return (
    <div
      className='container'
      data-testid='container'
      onClick={() => clicky()}
      style={{ 'border': '1px' }}>
      <button
        className={`btn ${btnCls}`}
        data-testid='button'
        style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
        <span
          className='text'
          data-testid='text'
          style={{ 'fontSize': '14px', 'color': 'black' }}>
          {btnTxt}
        </span>
      </button>
    </div>
  )
}
export default Button;