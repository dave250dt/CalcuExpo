import { appTheme } from '../constants/appTheme';
import { View, StyleSheet } from 'react-native';
import { CustomText } from '../components/CustomText';


const filas = [
  ['AC', '+/-', '%', '\u00F7'],
  ['7', '8', '9', '\u00D7'],
  ['4', '5', '6', '\u2212'],
  ['1', '2', '3', '+'],
  ['0', '.', '\u232B', '='],
];

export default function CalculadoraScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.espacioSuperior} />

      <View style={styles.resultados}>
        <CustomText variant="small" style={styles.operacion}>
         1+1
        </CustomText>
        
        <CustomText style={styles.resultado}>
          3
        </CustomText>
      </View>

      <View style={styles.botones}>
        {filas.map((fila, indiceFila) => (
          <View key={indiceFila} style={styles.fila}>
            {fila.map((valor) => {
              const esOperador = [
                '\u00F7',
                '\u00D7',
                '\u2212',
                '+',
                '=',
              ].includes(valor);

              const esEspecial = [
                'AC',
                '+/-',
                '%',
              ].includes(valor);

              return (
                <View
                  key={valor}
                  style={[
                    styles.boton,
                    esOperador
                      ? styles.operador
                      : esEspecial
                        ? styles.especial
                        : styles.numero,
                    valor === '0' && styles.cero,
                  ]}
                >
                  <CustomText
                    style={[
                      styles.textoBoton,
                      esEspecial && styles.textoEspecial,
                    ]}
                  >
                    {valor}
                  </CustomText>
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appTheme.colors.background,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
  },

  espacioSuperior: {
    flex: 1,
  },

  resultados: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },

  operacion: {
    fontSize: 10,
    marginBottom: 8,
  },

  resultado: {
    fontSize: 70,
  },

  botones: {
    gap: 10,
  },

  fila: {
    flexDirection: 'row',
    gap: 10,
  },

  boton: {
    flex: 1,
    aspectRatio: 1.5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  numero: {
    backgroundColor: appTheme.colors.buttonNumber,
  },

  especial: {
    backgroundColor: appTheme.colors.buttonSpecial,
  },

  operador: {
    backgroundColor: appTheme.colors.buttonOperator,
  },

  cero: {
    flex: 2,
    aspectRatio: 2,
  },

  textoBoton: {
    fontSize: 30,
    textAlign: 'center',
  },

  textoEspecial: {
    color: '#000000',
  },
});
