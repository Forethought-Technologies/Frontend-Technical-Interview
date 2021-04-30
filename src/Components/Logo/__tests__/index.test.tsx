import '@testing-library/jest-dom';
import { findByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

// Components
import Logo from '../index';

// Types
import LogoDict from '../Types/types'

const defaultProps: LogoDict = { imageSource: 'src/Assets/icon-ft-opaque-green.svg', altText='Alternate Text', styleClass='TestClass' }

const renderButton = (props: LogoDict = defaultProps) => {
  return render(
    <Logo {...props} />
  );
};

describe('Logo (Unit)', () => {
  describe('render()', () => {
    test('Should match snapshot', () => {
      const { baseElement } = renderButton();
      expect(baseElement).toMatchSnapshot();
    });
    test('Should find alt text', () => {
      renderButton();
      expect(screen.findByAltText(/Alternate Text/)).toBeInTheDocument();
    });
  });
});
