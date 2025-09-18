import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import {useEffect, useState} from "react";

export default function Index() {
  const valorInicial = 25*60;
  const [timeLeft, setTimeLeft ] = useState(valorInicial);
  const [inRunning, setIsRunisg] = useState(false);
  const [timeLabel, setTimeLabel] = useState("Start");

  function atualiza(){
    setTimeLeft(valor => valor -1);
  }

  useEffect(() => {
    let interval = null;
    if (inRunning && timeLeft > 0) {
      interval = setInterval(atualiza, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [inRunning, timeLeft]);
  

  function startTime(){
    if(!inRunning){
      setIsRunisg(true);
      setTimeLabel("Stop")
    }else{
      setIsRunisg(false);
      setTimeLabel("Start")
    }
  }

  return (
    <View style={style.container}>
      <Image source={require('../relogio.png')} style={style.image} />
      <View style={style.actions}>
        <Text style={style.timer}>{timeLeft}</Text>
        <Pressable style={!inRunning?style.buttonStart:style.buttonStop}onPress={startTime}>
          <Text style={style.textButton}>{timeLabel}</Text>
        </Pressable>
      </View>
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
  buttonStop: {
    padding: 24,
    backgroundColor: '#FF0000', 
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
