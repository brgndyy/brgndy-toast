import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToastContainer from '../components/ToastContainer';
import toast from '../services/toastService/toastService';
import styles from '../components/toast.module.css';

describe('토스트 컴포넌트에 대한 테스트 코드 작성', () => {
  afterEach(() => {
    cleanup();
  });
  it('토스트 메세지를 렌더링 한 후에, 지정한 시간이 지나고 나면 토스트 메세지는 브라우저 상에서 사라진다.', async () => {
    render(<ToastContainer />);

    const message = '토스트 메세지입니다!';

    act(() => {
      toast.notify(message, 3000);
    });

    expect(screen.getByText(message)).toBeInTheDocument();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3500));
    });

    expect(screen.queryByText(message)).not.toBeInTheDocument();
  });

  it('토스트의 타입이 warning이라면 warning에 맞는 스타일링이 적용 된다.', () => {
    render(<ToastContainer />);

    const warningMessage = '경고 토스트 메세지입니다!';

    act(() => {
      toast.warning(warningMessage, 3000);
    });

    const toastElement = screen.getByText(warningMessage);
    expect(toastElement).toBeInTheDocument();
    expect(toastElement).toHaveClass(styles.warning);
  });
});
