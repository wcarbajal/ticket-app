import { UiProvider } from './contex/UIContext';
import { RouterPage } from './pages/RouterPage';

export const TicketApp = () => {
  return (
    <UiProvider>
      <RouterPage />
    </UiProvider>
  );
};