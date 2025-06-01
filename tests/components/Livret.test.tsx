import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Livret } from '../../types';
import LivretComponent from '../../app/livret/[id]/page';

const mockLivret: Livret = {
  id: '1',
  title: 'Test Livret',
  content: 'Test Content',
  userId: 'user1',
  createdAt: new Date(),
  updatedAt: new Date(),
  status: 'published'
};

jest.mock('../../services/api', () => ({
  get: jest.fn().mockResolvedValue({ data: mockLivret, status: 200 })
}));

describe('Livret Component', () => {
  it('should render livret details', async () => {
    render(<LivretComponent params={{ id: '1' }} />);
    
    expect(await screen.findByText(mockLivret.title)).toBeInTheDocument();
    expect(screen.getByText(mockLivret.content)).toBeInTheDocument();
  });

  it('should handle edit mode', async () => {
    render(<LivretComponent params={{ id: '1' }} />);
    const editButton = await screen.findByRole('button', { name: /edit/i });
    
    await userEvent.click(editButton);
    
    const titleInput = screen.getByRole('textbox', { name: /title/i });
    expect(titleInput).toHaveValue(mockLivret.title);
  });
}); 