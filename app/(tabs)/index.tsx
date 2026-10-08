import { StyleSheet, ScrollView } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      
      <ThemedView style={styles.mainContent}>
        

        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.whiteTitleText}>Portal dos Gatos Laranjas</ThemedText>
          <ThemedView style={styles.linhaLaranja} />
        </ThemedView>


        <ThemedView style={styles.welcomeContainer}>
          <ThemedText type="subtitle" style={styles.welcomeText}>
            Seja Bem-vindo! <HelloWave />
          </ThemedText>
          <ThemedText style={styles.bodyTextTextCenter}>
            Explore o aplicativo para descobrir guias de cuidados, dicas e muito mais para o seu felino.
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
    flexGrow: 1,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente na tela
    paddingVertical: 50,
  },
  mainContent: {
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  titleContainer: {
    marginBottom: 40,
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
    width: 120, // Tamanho fixo para a linha ficar harmônica centralizada
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17191E',
    borderRadius: 24,
    padding: 30,
    borderWidth: 1,
    borderColor: '#252831',
    gap: 12,
  },
  welcomeText: {
    color: '#FF9547',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bodyTextTextCenter: {
    color: '#A4A9B8',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
