import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <footer className=" text-center fixed bottom-[2px] left-0 right-0"> @ 2025 год</footer>
    </div>
  );
}
