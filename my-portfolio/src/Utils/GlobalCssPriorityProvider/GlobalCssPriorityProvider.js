import { StyledEngineProvider } from '@mui/material/styles';

function GlobalCssPriorityProvider({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      {children}
    </StyledEngineProvider>
  );
}

export default GlobalCssPriorityProvider;