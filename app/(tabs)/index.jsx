import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function Index() {
  return (
    <View style={style.container}>
      <Image source={require('../relogio.png')} style={style.image} />
      <View style={style.actions}>
        <Text style={style.timer}>20:00</Text>

        <Pressable style={style.buttonStart}>
          <Text style={style.textButton}>Começar</Text>
        </Pressable>
      </View>

      {/* Rodapé */}
      <View style={style.footer}>
        <Text style={style.textFooter}>Curso de React Native EAD</Text>
        <Text style={style.textFooter}>2025 - Meu App</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#021123',
    gap: 40,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448880',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    alignItems: 'center',
    gap: 32,
  },
  timer: {
    fontSize: 54,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStart: {
    padding: 24,
    backgroundColor: '#021123',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
  },
  textButton: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    gap: 8,
  },
  textFooter: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
