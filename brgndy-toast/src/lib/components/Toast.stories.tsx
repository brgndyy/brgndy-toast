import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Toast from './Toast';
import toast from '../services/toastService/toastService';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <>
          <div style={{ width: '500px', height: '500px' }}></div>
          <Story />
        </>
      );
    },
  ],
  args: { onClick: fn() },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Notify: Story = {
  render: () => (
    <>
      <button onClick={() => toast.notify('일반 알림 토스트에요!', 1000)}>Notify Toast</button>
      <Toast />
    </>
  ),
};

export const Warning: Story = {
  render: () => (
    <>
      <button onClick={() => toast.warning('경고 토스트에요!', 1000)}>Warning Toast</button>
      <Toast />
    </>
  ),
};

export const Error: Story = {
  render: () => (
    <>
      <button onClick={() => toast.error('에러 토스트에요!', 1000)}>Error Toast</button>
      <Toast />
    </>
  ),
};

export const Success: Story = {
  render: () => (
    <>
      <button onClick={() => toast.success('성공 알림 토스트에요!', 1000)}>Success Toast</button>
      <Toast />
    </>
  ),
};
