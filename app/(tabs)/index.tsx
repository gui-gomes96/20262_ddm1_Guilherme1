import { Image } from 'expo-image';
import { StyleSheet, ScrollView } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
      <ThemedView style={styles.mainContent}>
        
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.orangeText}>Portal dos Gatos </ThemedText>
        </ThemedView>

        <ThemedView style={styles.galeriaContainer}>
          <Image source={require('@/assets/images/gato1.jpg')} style={styles.fotoPena} contentFit="cover" />
          <Image source={require('@/assets/images/gato2.jpg')} style={styles.fotoPena} contentFit="cover" />
          <Image source={require('@/assets/images/gato3.jpg')} style={styles.fotoPena} contentFit="cover" />
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Adote um Amigo</ThemedText>
          <ThemedText style={styles.bodyText}>
            Gatos laranjas são conhecidos por serem extremamente carinhosos, brincalhões e cheios de energia!
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Curiosidades Felinas</ThemedText>
          <ThemedText style={styles.bodyText}>
            Você sabia que cerca de 80% dos gatos laranjas são machos? Isso acontece devido à genética da cor da pelagem!
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle" style={styles.cardTitle}>A Marca do {"\""}M{"\""}</ThemedText>
          <ThemedText style={styles.bodyText}>
            Quase todos os gatos laranjas possuem uma marcação em formato da letra {"\""}M{"\""} bem clara na testa. Isso faz parte do padrão de pelagem chamado Tabby.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Sardinhas Charmosas</ThemedText>
          <ThemedText style={styles.bodyText}>
            É muito comum que esses gatinhos desenvolvam pequenas sardas pretas no nariz e nas gengivas ao longo da vida, o que é totalmente inofensivo.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Fama nas Telas</ThemedText>
          <ThemedText style={styles.bodyText}>
            Eles dominam a cultura pop! Personagens icônicos como o Garfield, o Gato de Botas e o Jonesy (do filme Alien) são inspirados na personalidade marcante dos felinos laranjas.
          </ThemedText>
        </ThemedView>

      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0E10',
  },
  contentContainer: {
    paddingVertical: 40,
  },
  mainContent: {
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 28,
    backgroundColor: 'transparent',
  },
  galeriaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    backgroundColor: 'transparent',
    width: '100%',
  },
  fotoPena: {
    width: 208,
    height: 208,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF9547',
    shadowColor: '#FF9547',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#16171B',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#22242B',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    color: '#FF9547',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  bodyText: {
    color: '#A0A5B5',
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0.2,
  },
  orangeText: {
    color: '#FF9547',
    fontWeight: 'bold',
    fontSize: 26,
    letterSpacing: 0.5,
  },
});
