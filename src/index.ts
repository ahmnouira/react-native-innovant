/** components **/
import { Bold } from './components/Bold';
import { Container } from './components/Container';
import { Toast } from './components/Toast';
import { EmptyHeader } from './components/EmptyHeader';

import { ThemeProvider, ThemeContext } from './theme/theme.context';
import { useTheme } from './hooks/useTheme';

export { ThemeContext, ThemeProvider, useTheme };

export { Bold, Container, Toast, EmptyHeader };
