
import { StyleSheet } from 'react-native';
import { appTheme } from '../constants/appTheme';

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: appTheme.colors.background,
  },

  calculator: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
  },

  mainResult: {
    fontSize: 70,
    color: appTheme.colors.textPrimary,
    fontWeight: '300',
  },

  subResult: {
    fontSize: 40,
    color: appTheme.colors.textSecondary,
    fontWeight: '300',
  },
});
