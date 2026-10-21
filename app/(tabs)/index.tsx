import { StyleSheet, ScrollView, Image } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <ThemedView style={styles.mainContent}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.whiteTitleText}>
            PORTAL DOS
          </ThemedText>

          <ThemedText style={styles.orangeTitle}>
            GATOS LARANJAS
          </ThemedText>

          <ThemedView style={styles.linhaLaranja} />

          <ThemedText style={styles.titleSubtitle}>
            🐾 Um mundo de fofura e bigodes 🐾
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/gatos.jpg')}
            style={styles.gatoImage}
            resizeMode="cover"
          />
        </ThemedView>

        <ThemedView style={styles.welcomeContainer}>
          <ThemedText type="subtitle" style={styles.welcomeText}>
            Seja Bem-vindo! <HelloWave />
          </ThemedText>

          <ThemedText style={styles.bodyTextTextCenter}>
            Explore o aplicativo para descobrir guias de cuidados,
            dicas e muito mais para o seu felino.
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
    justifyContent: 'center',
    paddingVertical: 50,
  },
  mainContent: {
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  titleContainer: {
    marginBottom: 30,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  whiteTitleText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 30,
    letterSpacing: 4,
    textAlign: 'center',
  },
  orangeTitle: {
    color: '#FF9547',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 4,
    textShadowColor: 'rgba(255, 149, 71, 0.35)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10,
  },
  linhaLaranja: {
    height: 4,
    backgroundColor: '#FF9547',
    marginTop: 12,
    borderRadius: 10,
    width: 100,
  },
  titleSubtitle: {
    color: '#A4A9B8',
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 12,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },
  gatoImage: {
    width: '100%',
    height: 500,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#FF9547',
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