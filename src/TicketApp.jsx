import { SocketProvider } from './contex/SocketContext';
import { UiProvider } from './contex/UIContext';
import { RouterPage } from './pages/RouterPage';

export const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </SocketProvider>
  );
};