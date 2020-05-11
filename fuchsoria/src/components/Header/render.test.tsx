import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('<Header />', () => {
  it('Component should render', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
