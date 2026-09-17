import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FF9547', dark: '#1A1A1E' }}
      headerImage={
        <ThemedView style={styles.containerDoHeader}>
          {/* Ícone da patinha original ao fundo */}
          <IconSymbol
            size={260}
            color="#26262B"
            name="pawprint.fill"
            style={styles.headerIcon}
          />
          {/* A foto do gato fixada no canto superior esquerdo do cabeçalho */}
          <Image 
            source={require('@/assets/images/gato4.jpg')} 
            style={styles.fotoNoTopoEsquerdo} 
            contentFit="cover" 
          />
        </ThemedView>
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={[styles.orangeText, { fontFamily: Fonts.rounded }]}>
          Guia de Cuidados 📖
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.bodyText}>
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

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  containerDoHeader: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  headerIcon: {
    bottom: -40,
    alignSelf: 'center',
    position: 'absolute',
  },
  fotoNoTopoEsquerdo: {
    position: 'absolute',
    top: 30-0,
    left: 20,
    width: 210,
    height: 210,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: '#FF9547',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  bodyText: {
    color: '#C4C4CC',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 10,
  },
  orangeText: {
    color: '#FF9547',
    fontWeight: 'bold',
  },
});
