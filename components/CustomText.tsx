
import { Text, StyleSheet, type TextProps } from 'react-native';
import { appTheme } from '../constants/appTheme';
import { globalStyles } from '../styles/globalStyles';

type CustomTextProps = TextProps & {
  variant?: 'big' | 'small';
};

export function CustomText({
  variant = 'big',
  style,
  ...rest
}: CustomTextProps) {
  return (
    <Text
      {...rest}
      numberOfLines={1}
      adjustsFontSizeToFit
      style={[
        styles.base,
        variant === 'big'
          ? globalStyles.mainResult
          : globalStyles.subResult,
        { fontFamily: 'WorkSans-Regular' },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    color: appTheme.colors.textPrimary,
  },
});
