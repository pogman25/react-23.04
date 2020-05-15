import React from 'react';
import { render } from '@testing-library/react';
import { IMessageListProps } from '../../interfaces';
import MessageList from '../MessageList';

const mockData: IMessageListProps = {
  messages: [
    {
      id: 'w7i456644834',
      author: 'Jest 1',
      text: 'Jest first example message',
      authorAccess: 'user',
    },
    {
      id: 'w7i458h84834',
      author: 'Jest',
      text: 'Jest second example message',
      authorAccess: 'user',
    },
    {
      id: 'w7ifttyjhf34',
      author: 'Robot',
      text: 'Hi Jest, i am your personal assistant',
      authorAccess: 'bot',
    },
  ],
};

describe('<MessageList />', () => {
  it('Component should render', () => {
    const { container } = render(<MessageList messages={mockData.messages} />);

    expect(container).toMatchSnapshot();
  });
});
