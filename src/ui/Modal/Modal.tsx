import * as React from 'react';
import {
  Modal as ModalRN,
  ModalProps as ModalPropsRN,
  View,
  TouchableOpacity,
  ViewStyle,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth } from '../../helpers/paltfrom';
import { useTheme } from '../../hooks/useTheme';
import { styles } from './styles';

export type ModalProps = ModalPropsRN & {
  onClose: () => void;
  title?: string;
  center?: boolean;
  height?: 1 | 1.5 | 2 | number;
  width?: 1 | 1.5 | 2 | number;
  containerStyles?: ViewStyle | undefined;
  modalStyles?: ViewStyle | undefined;
};

export const Modal: React.FC<ModalProps> = ({
  onClose,
  title = '',
  width = 1,
  height = 1,
  center = false,
  children,
  containerStyles = undefined,
  modalStyles = undefined,
  ...props
}: React.PropsWithChildren<ModalProps>) => {
  const theme = useTheme();
  const titleStyles = StyleSheet.create({
    title: {
      fontFamily: theme?.fonts.secondary.regular,
      color: theme?.colors.black,
      fontSize: 17,
      textAlign: 'center',
    },
  });

  return (
    <ModalRN animationType='fade' transparent={true} onRequestClose={onClose} {...props}>
      <TouchableOpacity activeOpacity={1} onPressIn={onClose} style={{ flex: 1 }}>
        <SafeAreaView>
          <View style={[styles.container, center && styles.center, { ...modalStyles }]}>
            <View
              style={[
                styles.modalView,
                {
                  height: height <= 2 ? windowHeight / height : height,
                  width: width <= 2 ? windowWidth / width : width,
                  ...containerStyles,
                },
              ]}>
              <View style={styles.row}>
                <TouchableOpacity style={[styles.roundView, styles.closeView]} onPress={onClose}>
                  <Icon name='close' color={'black'} size={20} />
                </TouchableOpacity>
                <Text style={[titleStyles.title]}>{title}</Text>
                <View style={styles.roundView} />
              </View>

              <View style={styles.details}>{children}</View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    </ModalRN>
  );
};
