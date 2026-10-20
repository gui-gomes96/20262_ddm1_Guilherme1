
import { Image } from 'expo-image';
import { StyleSheet, ScrollView } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
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
          source={require('@/assets/images/gato4.jpg')}
          style={styles.fotoGato}
          contentFit="cover"
        />

        <ThemedView style={styles.imageBadge}>
          <ThemedText style={styles.imageBadgeText}>
            🐾 Amor e cuidado
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* Título */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.eyebrow}>
          GUIA FELINO
        </ThemedText>

        <ThemedText
          type="title"
          style={[
            styles.whiteTitleText,
            { fontFamily: Fonts.rounded },
          ]}
        >
          Guia de
          {'\n'}
          <ThemedText style={styles.orangeTitle}>
            Cuidados
          </ThemedText>
        </ThemedText>

        <ThemedView style={styles.linhaLaranja} />

        <ThemedText style={styles.subtitle}>
          Tudo para uma vida mais feliz e saudável
        </ThemedText>
      </ThemedView>

      {/* Introdução */}
      <ThemedView style={styles.introCard}>
        <ThemedText style={styles.introEmoji}>
          🧡
        </ThemedText>

        <ThemedText style={styles.introTitle}>
          Seu gato merece o melhor!
        </ThemedText>

        <ThemedText style={styles.introText}>
          Cuidar de um felino exige carinho, atenção e
          responsabilidade. Confira nossas dicas para manter
          seu companheiro saudável, feliz e cheio de energia.
        </ThemedText>
      </ThemedView>

      {/* Dicas de cuidados */}
      <ThemedView style={styles.sectionHeader}>
        <ThemedText style={styles.sectionTitle}>
          Cuidados essenciais
        </ThemedText>

        <ThemedText style={styles.sectionSubtitle}>
          Toque em cada tópico para ver as dicas.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.tipsContainer}>
        <ThemedView style={styles.tipIcon}>
          <ThemedText style={styles.tipEmoji}>🥣</ThemedText>
        </ThemedView>

        <ThemedView style={styles.tipContent}>
          <ThemedText style={styles.tipHeading}>
            Alimentação
          </ThemedText>

          <Collapsible title="Alimentação Balanceada">
            <ThemedText style={styles.bodyText}>
              Ofereça um alimento completo e adequado à idade,
              ao peso e às necessidades do seu gato. Mantenha
              horários regulares e evite oferecer alimentos
              humanos que possam fazer mal aos felinos.
            </ThemedText>
          </Collapsible>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.tipsContainer}>
        <ThemedView style={styles.tipIcon}>
          <ThemedText style={styles.tipEmoji}>💧</ThemedText>
        </ThemedView>

        <ThemedView style={styles.tipContent}>
          <ThemedText style={styles.tipHeading}>
            Hidratação
          </ThemedText>

          <Collapsible title="Hidratação Constante">
            <ThemedText style={styles.bodyText}>
              Deixe água fresca e limpa sempre disponível.
              Espalhe potes pela casa e experimente uma fonte
              de água para incentivar seu gato a beber mais.
              Alimentos úmidos também podem ajudar na hidratação.
            </ThemedText>
          </Collapsible>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.tipsContainer}>
        <ThemedView style={styles.tipIcon}>
          <ThemedText style={styles.tipEmoji}>🐾</ThemedText>
        </ThemedView>

        <ThemedView style={styles.tipContent}>
          <ThemedText style={styles.tipHeading}>
            Higiene
          </ThemedText>

          <Collapsible title="Caixa de Areia Limpa">
            <ThemedText style={styles.bodyText}>
              Retire os resíduos diariamente e mantenha a caixa
              em um local tranquilo, ventilado e longe da comida.
              Uma boa referência é ter uma caixa por gato,
              mais uma extra, quando possível.
            </ThemedText>
          </Collapsible>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.tipsContainer}>
        <ThemedView style={styles.tipIcon}>
          <ThemedText style={styles.tipEmoji}>🧶</ThemedText>
        </ThemedView>

        <ThemedView style={styles.tipContent}>
          <ThemedText style={styles.tipHeading}>
            Diversão
          </ThemedText>

          <Collapsible title="Estímulo e Brincadeiras">
            <ThemedText style={styles.bodyText}>
              Reserve momentos do dia para brincar com varinhas,
              bolinhas e brinquedos seguros. Arranhadores,
              esconderijos e lugares elevados ajudam a estimular
              os comportamentos naturais dos gatos.
            </ThemedText>
          </Collapsible>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.tipsContainer}>
        <ThemedView style={styles.tipIcon}>
          <ThemedText style={styles.tipEmoji}>🩺</ThemedText>
        </ThemedView>

        <ThemedView style={styles.tipContent}>
          <ThemedText style={styles.tipHeading}>
            Saúde
          </ThemedText>

          <Collapsible title="Consultas ao Veterinário">
            <ThemedText style={styles.bodyText}>
              Mantenha as vacinas e a prevenção contra parasitas
              em dia, seguindo a orientação veterinária.
              Consulte um profissional regularmente e procure
              atendimento se notar mudanças no apetite,
              no comportamento ou na disposição do seu gato.
            </ThemedText>
          </Collapsible>
        </ThemedView>
      </ThemedView>

      {/* Mensagem final */}
      <ThemedView style={styles.finalCard}>
        <ThemedText style={styles.finalEmoji}>
          ❤️🐈
        </ThemedText>

        <ThemedText style={styles.finalTitle}>
          Cuidar é uma forma de amar!
        </ThemedText>

        <ThemedText style={styles.finalText}>
          Pequenos cuidados diários fazem uma grande diferença.
          Ofereça carinho, segurança e atenção ao seu amigo
          de quatro patas.
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.footer}>
        PORTAL DOS GATOS • CUIDADO EM CADA PATINHA 🐾
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

  // Seção de dicas
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

  // Cartões de cuidados
  tipsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 13,
    padding: 14,
    marginBottom: 14,
    backgroundColor: '#17191E',
    borderWidth: 1,
    borderColor: '#292C35',
    borderRadius: 22,
  },
  tipIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,149,71,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,149,71,0.25)',
  },
  tipEmoji: {
    fontSize: 22,
  },
  tipContent: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  tipHeading: {
    color: '#FF9547',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 6,
    marginTop: 3,
  },
  bodyText: {
    color: '#C0C4D0',
    fontSize: 14,
    lineHeight: 23,
    paddingTop: 5,
    paddingBottom: 8,
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
