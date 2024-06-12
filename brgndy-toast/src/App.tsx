import ToastContainer from './lib/components/ToastContainer';
import toast from './lib/services/toastService/toastService';

function App() {
  const handleNotifyClick = () => {
    toast.notify('단순 알림 토스트 메세지입니다!', 1000);
  };

  const handleWarningClick = () => {
    toast.warning('This is a warning message!', 2000);
  };

  const handleErrorClick = () => {
    toast.error('This is an error message!', 3000);
  };

  const handleSuccessClick = () => {
    toast.success('성공 알림 토스트 입니다!', 400000);
  };

  return (
    <>
      <button onClick={handleNotifyClick}>알림 토스트에요!</button>
      <button onClick={handleWarningClick}>경고 토스트에요!</button>
      <button onClick={handleErrorClick}>Show Error Toast</button>
      <button onClick={handleSuccessClick}>Show Success Toast</button>
      <ToastContainer />
    </>
  );
}

export default App;
