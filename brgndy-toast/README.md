# brgndy-react-toast

Toast Library Component for React

## - Running Video

![화면 기록 2024-06-16 오후 6 32 19](https://github.com/brgndyy/brgndy-toast/assets/109535991/65133562-6055-47af-aa14-e2a7ff5583c9)

## - Usage

```tsx
function App() {
  const handleNotifyClick = () => {
    toast.notify('It is a notify message!', 1000);
  };

  const handleWarningClick = () => {
    toast.warning('This is a warning message!', 2000);
  };

  const handleErrorClick = () => {
    toast.error('This is an error message!', 3000);
  };

  const handleSuccessClick = () => {
    toast.success('This is a Success message!', 4000);
  };

  return (
    <>
      <button onClick={handleNotifyClick}>Show Notify Toast</button>
      <button onClick={handleWarningClick}>Show Warning Toast</button>
      <button onClick={handleErrorClick}>Show Error Toast</button>
      <button onClick={handleSuccessClick}>Show Success Toast</button>
      <ToastContainer />
    </>
  );
}

export default App;
```

## - Caveat

> First, the ToastContainer component must be defined in the root component.
