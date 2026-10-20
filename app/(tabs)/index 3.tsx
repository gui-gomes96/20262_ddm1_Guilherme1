
import { Image } from 'expo-image';
import { StyleSheet, ScrollView } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Cabeçalho com imagem */}
      <ThemedView style={styles.headerContainer}>
        <IconSymbol
          size={190}
          color="#FF9547"
          name="pawprint.fill"
          style={styles.headerIcon}
        />

        <Image
          source={require('@/assets/images/gato6.png')}
          style={styles.fotoGato}
          contentFit="cover"
        />

        <ThemedView style={styles.imageBadge}>
          <ThemedText style={styles.imageBadgeText}>
            🐾 Mundo Felino
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Título */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.eyebrow}>
          VOCÊ SABIA?
        </ThemedText>

        <ThemedText
          type="title"
          style={[
            styles.whiteTitleText,
            { fontFamily: Fonts.rounded },
          ]}
        >
          Curiosidades
          {'\n'}
          <ThemedText style={styles.orangeTitle}>
            Felinas
          </ThemedText>
        </ThemedText>

        <ThemedView style={styles.linhaLaranja} />

        <ThemedText style={styles.subtitle}>
          Descubra os segredos dos gatos laranjas 🧡
        </ThemedText>
      </ThemedView>

      {/* Introdução */}
      <ThemedView style={styles.introCard}>
        <ThemedText style={styles.introEmoji}>
          🐱
        </ThemedText>

        <ThemedText style={styles.introTitle}>
          Os laranjinhas são especiais!
        </ThemedText>

        <ThemedText style={styles.introText}>
          Conhecidos por sua aparência marcante, os gatos
          laranjas conquistam muitas pessoas. Descubra fatos
          curiosos sobre sua genética, suas características
          e sua presença na cultura pop!
        </ThemedText>
      </ThemedView>

      {/* Título das curiosidades */}
      <ThemedView style={styles.sectionHeader}>
        <ThemedText style={styles.sectionTitle}>
          Curiosidades incríveis 🐾
        </ThemedText>

        <ThemedText style={styles.sectionSubtitle}>
          Conheça melhor esses companheiros de quatro patas.
        </ThemedText>
      </ThemedView>

      {/* Curiosidade 1 */}
      <ThemedView style={styles.curiosidadeCard}>
        <ThemedView style={styles.curiosidadeIcon}>
          <ThemedText style={styles.curiosidadeEmoji}>
            🧬
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.curiosidadeContent}>
          <ThemedText style={styles.cardTitle}>
            Curiosidades Felinas
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Aproximadamente quatro em cada cinco gatos
            laranjas são machos. Isso acontece por causa
            da genética: o gene responsável pela coloração
            laranja está relacionado ao cromossomo X.
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Curiosidade 2 */}
      <ThemedView style={styles.curiosidadeCard}>


        <ThemedView style={styles.curiosidadeContent}>
          <ThemedText style={styles.cardTitle}>
            🐾 A Marca do M
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Muitos gatos laranjas apresentam um desenho
            parecido com a letra M na testa. Essa marca faz
            parte do padrão de pelagem conhecido como tabby,
            que também aparece em gatos de outras cores.
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Curiosidade 3 */}
      <ThemedView style={styles.curiosidadeCard}>

        <ThemedView style={styles.curiosidadeContent}>
          <ThemedText style={styles.cardTitle}>
            🧡 Sardinhas Charmosas
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Alguns gatos, principalmente os de pelagem
            laranja, desenvolvem pequenas manchas escuras
            no nariz, nos lábios e nas gengivas. Elas podem
            ser causadas pela pigmentação natural chamada
            lentigo.
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Curiosidade 4 */}
      <ThemedView style={styles.curiosidadeCard}>

        <ThemedView style={styles.curiosidadeContent}>
          <ThemedText style={styles.cardTitle}>
            🎬 Fama nas Telas
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Os gatos laranjas também fazem sucesso na
            cultura pop! Garfield, o Gato de Botas e Jonesy,
            da franquia Alien, são exemplos de felinos
            famosos que conquistaram o público em filmes
            e animações.
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Curiosidade 5 */}
      <ThemedView style={styles.curiosidadeCard}>
        <ThemedView style={styles.curiosidadeIcon}>
          <ThemedText style={styles.curiosidadeEmoji}>
            🏡
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.curiosidadeContent}>
          <ThemedText style={styles.cardTitle}>
            Adote um Amigo
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Gatos laranjas podem ser carinhosos, brincalhões
            e cheios de energia. Porém, cada gato tem sua
            própria personalidade. A adoção responsável
            oferece a eles a oportunidade de ter um lar
            seguro, com carinho e proteção.
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Mensagem final */}
      <ThemedView style={styles.finalCard}>
        <ThemedText style={styles.finalEmoji}>
          🧡🐈
        </ThemedText>

        <ThemedText style={styles.finalTitle}>
          Cada gato é único!
        </ThemedText>

        <ThemedText style={styles.finalText}>
          A cor da pelagem não define completamente
          a personalidade de um gato. Cada felino tem
          seu próprio jeito de demonstrar carinho,
          brincar e explorar o mundo.
        </ThemedText>
      </ThemedView>

      {/* Rodapé */}
      <ThemedText style={styles.footer}>
        PORTAL DOS GATOS • CURIOSIDADES FELINAS 🐾
      </ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1013',
  },
  contentContainer: {
    paddingTop: 35,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  // Cabeçalho
  headerContainer: {
    height: 225,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  headerIcon: {
    position: 'absolute',
    opacity: 0.12,
    right: 0,
    top: 0,
  },
  fotoGato: {
    width: 175,
    height: 175,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#FF9547',
    backgroundColor: '#202127',
  },
  imageBadge: {
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
    backgroundColor: '#FF9547',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#0F1013',
  },
  imageBadgeText: {
    color: '#17191E',
    fontSize: 12,
    fontWeight: '900',
  },

  // Título
  titleContainer: {
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: 'transparent',
  },
  eyebrow: {
    color: '#FF9547',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 4,
    marginBottom: 8,
  },
  whiteTitleText: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: '900',
    lineHeight: 43,
    textAlign: 'center',
  },
  orangeTitle: {
    color: '#FF9547',
    fontSize: 35,
    fontWeight: '900',
  },
  linhaLaranja: {
    width: 75,
    height: 4,
    backgroundColor: '#FF9547',
    marginTop: 14,
    borderRadius: 10,
  },
  subtitle: {
    color: '#A4A9B8',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 20,
  },

  // Introdução
  introCard: {
    padding: 21,
    marginBottom: 30,
    backgroundColor: '#211D1A',
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#573A28',
    gap: 10,
  },
  introEmoji: {
    fontSize: 30,
  },
  introTitle: {
    color: '#FF9547',
    fontSize: 19,
    fontWeight: '900',
  },
  introText: {
    color: '#C0C4D0',
    fontSize: 14,
    lineHeight: 23,
  },

  // Seção
  sectionHeader: {
    marginBottom: 17,
    gap: 5,
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '900',
  },
  sectionSubtitle: {
    color: '#8E94A4',
    fontSize: 13,
    lineHeight: 20,
  },

  // Cartões de curiosidades
  curiosidadeCard: {
    flexDirection: 'column',
    gap: 12,
    padding: 15,
    marginBottom: 14,
    backgroundColor: '#17191E',
    borderWidth: 1,
    borderColor: '#292C35',
    borderRadius: 22,
    elevation: 2,
  },
  curiosidadeIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,149,71,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,149,71,0.25)',
  },
  curiosidadeEmoji: {
    fontSize: 22,
  },
  curiosidadeContent: {
    backgroundColor: 'transparent',
  },
  cardTitle: {
    color: '#FF9547',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 6,
  },
  bodyText: {
    color: '#C0C4D0',
    fontSize: 14,
    lineHeight: 23,
  },
  fotoCuriosidade: {
    width: '100%',
    height: 185,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#3A302A',
    backgroundColor: '#202127',
  },

  // Mensagem final
  finalCard: {
    alignItems: 'center',
    padding: 23,
    marginTop: 14,
    marginBottom: 22,
    gap: 12,
    backgroundColor: '#211D1A',
    borderWidth: 1,
    borderColor: '#FF9547',
    borderRadius: 24,
  },
  finalEmoji: {
    fontSize: 35,
  },
  finalTitle: {
    color: '#FF9547',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  finalText: {
    color: '#C0C4D0',
    fontSize: 14,
    lineHeight: 23,
    textAlign: 'center',
  },

  // Rodapé
  footer: {
    color: '#777D8C',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 5,
  },
});
