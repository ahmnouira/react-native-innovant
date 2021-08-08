export { useTheme } from './hooks/useTheme';

import { KeyboardAvoiding } from './native/KeyboardAvoiding';
import { Snackbar } from './native/Snackbar';
import { Toast } from './native/Toast';

import { Bold } from './ui/Bold';
import { Container } from './ui/Container';
import { EmptyHeader } from './ui/EmptyHeader';
import { IconButton } from './ui/IconButton';
import { Loading } from './ui/Loading';
import { Modal, ModalProps } from './ui/Modal';
import { Status } from './ui/Status';

import { ThemeType, theme } from './theme/theme';
import { ThemeContext, ThemeContextProps, ThemeProvideProps, ThemeProvider,  } from './theme/theme.context';

export { KeyboardAvoiding, Snackbar, Toast };

export { Bold, Container, EmptyHeader, IconButton, Loading, Modal, Status };

export type { ModalProps };

export { ThemeContext, ThemeProvider, theme };

export type { ThemeType, ThemeContextProps, ThemeProvideProps };
