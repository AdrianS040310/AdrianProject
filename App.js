import {useCallback, useMemo, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Registro from "./registro"
import Inicio from './Inicio';

export default function App() {

  const [num, setNum]= useState(2) //4 6

  useEffect(
    function(){

    },
    []
  )
  return (
    <Inicio />
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});