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

const mockDataBot: IMessage = {
  id: 'w7i3hgf48trg4',
  author: 'Robot',
  text: 'Bot example message',
  authorAccess: 'bot',
};

const message = document.createElement('div');
const messageBot = document.createElement('div');

describe('<Message />', () => {
  it('Component should render', async () => {
    render(
      <Message
        key={mockData.id}
        author={mockData.author}
        text={mockData.text}
        isBot={mockData.authorAccess === 'bot'}
      />,
      { container: document.body.appendChild(message) }
    );

    render(
      <Message
        key={mockDataBot.id}
        author={mockDataBot.author}
        text={mockDataBot.text}
        isBot={mockDataBot.authorAccess === 'bot'}
      />,
      { container: document.body.appendChild(messageBot) }
    );

    expect(document.body).toMatchSnapshot();
  });

  it('Check rendered user message', () => {
    expect(message.querySelector('.messageAuthor')?.textContent).toBe(mockData.author);
    expect(message.querySelector('.message')?.lastChild?.textContent).toBe(mockData.text);
    expect(message.querySelector('.message')?.classList.contains('messageBot')).toBeFalsy();
  });

  it('Check rendered bot message', () => {
    expect(messageBot.querySelector('.messageAuthor')?.textContent).toBe(mockDataBot.author);
    expect(messageBot.querySelector('.message')?.lastChild?.textContent).toBe(mockDataBot.text);
    expect(messageBot.querySelector('.message')?.classList.contains('messageBot')).toBeTruthy();
  });
});
