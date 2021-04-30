import '@testing-library/jest-dom';
import { findByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

// Components
import Button from '../index';

type Props = {
  btnTxt: string;
  btnLink: string;
  btnCls: string;
  myfunction: () => void;
};

const defaultProps: Props = { btnTxt: 'Hello', btnLink: 'Link', btnCls: 'Class', myfunction: jest.fn() }

const renderButton = (props: Props = defaultProps) => {
  return render(
    <Button {...props} />
  );
};

describe('Button (Unit)', () => {

  describe('render()', () => {
    test('Should match snapshot', () => {
      const { baseElement } = renderButton();
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('Button unit testing', () => {
    test('Button should render correct button text', () => {
      const testString = 'Test String';
      const testProps = { ...defaultProps, btnTxt: testString };
      renderButton(testProps);

      // Assert
      expect(screen.getByText(/Test String/)).toBeInTheDocument();
    });

    test('Function should be called if button is clicked', () => {
      const testFunction = jest.fn()
      const testProps = { ...defaultProps, myfunction: testFunction };
      renderButton();

      // Act
      userEvent.click(screen.getByTestId('container'));

      // Assert
      expect(testFunction).toHaveBeenCalled();
      expect(testFunction).toHaveBeenCalledTimes(1);
    });
  });
});
