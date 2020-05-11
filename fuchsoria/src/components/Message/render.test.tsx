import React from 'react';
import { render } from '@testing-library/react';
import { IMessage } from '../../interfaces';
import Message from '../Message';

const mockData: IMessage = {
  id: 'w7i33e48tr834',
  author: 'Jest',
  text: 'Jest example message',
  authorAccess: 'user',
};

describe('<Message />', () => {
  it('Component should render', async () => {
    const { container } = render(
      <Message
        key={mockData.id}
        author={mockData.author}
        text={mockData.text}
        isBot={mockData.authorAccess === 'bot'}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
