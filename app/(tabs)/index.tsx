import { Image } from 'expo-image';
import { StyleSheet, ScrollView } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      
      <ThemedView style={styles.mainContent}>
        
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.whiteTitleText}>Portal dos Gatos</ThemedText>
          <ThemedView style={styles.linhaLaranja} />
        </ThemedView>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.galeriaScroll}
          style={styles.galeriaWrapper}
        >
          <Image source={require('@/assets/images/gato1.jpg')} style={styles.fotoPena} contentFit="cover" />
          <Image source={require('@/assets/images/gato2.jpg')} style={styles.fotoPena} contentFit="cover" />
          <Image source={require('@/assets/images/gato3.jpg')} style={styles.fotoPena} contentFit="cover" />
        </ScrollView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.badge}>
            <ThemedText type="subtitle" style={styles.cardTitle}>Adote um Amigo</ThemedText>
          </ThemedView>
          <ThemedText style={styles.bodyText}>
            Gatos laranjas são conhecidos por serem extremamente carinhosos, brincalhões e cheios de energia!
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.badge}>
            <ThemedText type="subtitle" style={styles.cardTitle}>Curiosidades Felinas</ThemedText>
          </ThemedView>
          <ThemedText style={styles.bodyText}>
            Você sabia que cerca de 80% dos gatos laranjas são machos? Isso acontece devido à genética da cor da pelagem!
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.badge}>
            <ThemedText type="subtitle" style={styles.cardTitle}>A Marca do {"\""}M{"\""}</ThemedText>
          </ThemedView>
          <ThemedText style={styles.bodyText}>
            Quase todos os gatos laranjas possuem uma marcação em formato da letra {"\""}M{"\""} bem clara na testa. Isso faz parte do padrão de pelagem chamado Tabby.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.badge}>
            <ThemedText type="subtitle" style={styles.cardTitle}>Sardinhas Charmosas</ThemedText>
          </ThemedView>
          <ThemedText style={styles.bodyText}>
            É muito comum que esses gatinhos desenvolvam pequenas sardas pretas no nariz e nas gengivas ao longo da vida, o que é totalmente inofensivo.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.badge}>
            <ThemedText type="subtitle" style={styles.cardTitle}>Fama nas Telas</ThemedText>
          </ThemedView>
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
    backgroundColor: '#0F1013',
  },
  contentContainer: {
    paddingVertical: 50,
  },
  mainContent: {
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  titleContainer: {
    marginBottom: 24,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    alignItems: 'center',
  },
  whiteTitleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 28,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  linhaLaranja: {
    height: 3,
    backgroundColor: '#FF9547',
    marginTop: 6,
    borderRadius: 2,
    width: '100%',
  },
  galeriaWrapper: {
    marginBottom: 28,
    marginHorizontal: -20,
  },
  galeriaScroll: {
    paddingHorizontal: 20,
    gap: 14,
  },
  fotoPena: {
    width: 160,
    height: 160,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#FF9547',
  },
  stepContainer: {
    gap: 10,
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#17191E',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#252831',
    elevation: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 149, 71, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
  },
  cardTitle: {
    color: '#FF9547',
    fontSize: 16,
    fontWeight: '700',
  },
  bodyText: {
    color: '#A4A9B8',
    fontSize: 14,
    lineHeight: 22,
  },
});
