import { Image } from 'expo-image';
import { StyleSheet, ScrollView } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      
      <ThemedView style={styles.headerContainer}>
        <IconSymbol
          size={180}
          color="#1D1E24"
          name="pawprint.fill"
          style={styles.headerIcon}
        />
        <Image 
          source={require('@/assets/images/gato4.jpg')} 
          style={styles.fotoGato} 
          contentFit="cover" 
        />
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={[styles.whiteTitleText, { fontFamily: Fonts.rounded }]}>
          Guia de Cuidados
        </ThemedText>
        <ThemedView style={styles.linhaLaranja} />
      </ThemedView>

      <ThemedText style={styles.introText}>
        Cuidar de um felino exige carinho, atenção e conhecimento. Veja abaixo as principais dicas para manter seu amigo saudável.
      </ThemedText>

      <Collapsible title="Alimentação Balanceada">
        <ThemedText style={styles.bodyText}>
          Ofereça ração de alta qualidade de acordo com a idade do seu gato. Gatos precisam de uma dieta rica em proteínas de origem animal.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Hidratação Constante">
        <ThemedText style={styles.bodyText}>
          Felinos têm tendência a beber pouca água. Utilize fontes de água correndo e espalhe vários potes pela casa para estimulá-los.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Caixa de Areia Limpa">
        <ThemedText style={styles.bodyText}>
          Mantenha a caixa em local calmo e longe da comida. A regra ideal é ter o número de caixas equivalente à quantidade de gatos mais uma extra.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Estímulo e Brincadeiras">
        <ThemedText style={styles.bodyText}>
          Gatos laranjas amam caçar! Reserve pelo menos 15 minutos do dia para brincar com varinhas, bolinhas de papel e enriquecer o ambiente com nichos.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Consultas ao Veterinário">
        <ThemedText style={styles.bodyText}>
          Mantenha as vacinas e a vermifugação em dia. Check-ups anuais são fundamentais para diagnosticar e prevenir problemas de saúde cedo.
        </ThemedText>
      </Collapsible>

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
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: 'transparent',
    position: 'relative',
    height: 180,
  },
  headerIcon: {
    position: 'absolute',
    opacity: 0.4,
    right: 10,
    top: -10,
  },
  fotoGato: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#FF9547',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  titleContainer: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
  },
  whiteTitleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 28,
    letterSpacing: 0.5,
  },
  linhaLaranja: {
    height: 3,
    backgroundColor: '#FF9547',
    marginTop: 6,
    borderRadius: 2,
    width: '100%',
  },
  introText: {
    color: '#A4A9B8',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 24,
  },
  bodyText: {
    color: '#C4C4CC',
    fontSize: 14,
    lineHeight: 22,
    paddingTop: 4,
    paddingBottom: 8,
  },
});
