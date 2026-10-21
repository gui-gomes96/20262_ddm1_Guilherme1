import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

const curiosidades = [
  {
    nome: 'O sono dos gatos',
    emoji: '😴',
    descricao:
      'Os gatos dormem muitas horas por dia, e esse tempo varia conforme a idade e o nível de atividade.',
    dica:
      'Ofereça um local confortável e tranquilo para seu gato descansar. Os filhotes e os gatos idosos podem precisar de ainda mais sono.',
  },
  {
    nome: 'O ronronar',
    emoji: '💗',
    descricao:
      'O ronronar pode indicar relaxamento, mas também pode acontecer quando o gato sente estresse ou desconforto.',
    dica:
      'Observe a postura, as orelhas e o comportamento do seu gato para entender melhor como ele está se sentindo.',
  },
  {
    nome: 'Bigodes especiais',
    emoji: '🐱',
    descricao:
      'Os bigodes ajudam os gatos a perceber objetos próximos e mudanças no ambiente ao seu redor.',
    dica:
      'Nunca corte os bigodes do seu gato. Eles são importantes para sua percepção espacial e orientação.',
  },
  {
    nome: 'Visão noturna',
    emoji: '🌙',
    descricao:
      'Os gatos enxergam melhor que os humanos em ambientes com pouca luz, mas não enxergam na escuridão total.',
    dica:
      'Mantenha os caminhos livres de objetos perigosos, especialmente em locais com pouca iluminação.',
  },
  {
    nome: 'A linguagem da cauda',
    emoji: '🐈',
    descricao:
      'A posição e os movimentos da cauda podem revelar como o gato está se sentindo.',
    dica:
      'Uma cauda erguida pode indicar uma aproximação amigável. Movimentos fortes e rápidos podem indicar agitação. Observe também o restante do corpo.',
  },
  {
    nome: 'A paixão por caixas',
    emoji: '📦',
    descricao:
      'Muitos gatos gostam de caixas porque elas oferecem abrigo, segurança e um bom lugar para observar o ambiente.',
    dica:
      'Ofereça caixas limpas e seguras, sem grampos ou partes que possam machucar seu felino.',
  },
];

export default function CuriosidadesScreen() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
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
          contentFit="contain"
          transition={200}
        />

        <ThemedView style={styles.imageBadge}>
          <ThemedText style={styles.imageBadgeText}>
            🐾 Mundo Felino
          </ThemedText>
        </ThemedView>
      </ThemedView>

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
            sobre os Gatos
          </ThemedText>
        </ThemedText>

        <ThemedView style={styles.linhaLaranja} />

        <ThemedText style={styles.subtitle}>
          Descubra fatos incríveis sobre os felinos
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.introCard}>
        <ThemedText style={styles.introEmoji}>
          🧡
        </ThemedText>

        <ThemedText style={styles.introTitle}>
          O mundo dos gatos é incrível!
        </ThemedText>

        <ThemedText style={styles.introText}>
          Os gatos possuem sentidos especiais e comportamentos
          surpreendentes. Confira nossas curiosidades e conheça
          melhor esses companheiros tão especiais.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionHeader}>
        <ThemedText style={styles.sectionTitle}>
          Curiosidades felinas
        </ThemedText>

        <ThemedText style={styles.sectionSubtitle}>
          Toque em cada tópico para descobrir mais.
        </ThemedText>
      </ThemedView>

      {curiosidades.map((item, index) => (
        <ThemedView key={item.nome} style={styles.curiosidadeCard}>
          <ThemedView style={styles.curiosidadeIcon}>
            <ThemedText style={styles.curiosidadeEmoji}>
              {item.emoji}
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.curiosidadeContent}>
            <ThemedText style={styles.cardTitle}>
              {item.nome}
            </ThemedText>

            <ThemedText style={styles.bodyText}>
              {item.descricao}
            </ThemedText>

            {aberto === index && (
              <ThemedView style={styles.dicaCard}>
                <ThemedText style={styles.dicaTitulo}>
                  💡 Você sabia?
                </ThemedText>

                <ThemedText style={styles.dicaTexto}>
                  {item.dica}
                </ThemedText>
              </ThemedView>
            )}

            <Pressable
              style={styles.botao}
              onPress={() =>
                setAberto(aberto === index ? null : index)
              }
              accessibilityRole="button"
              accessibilityLabel={
                aberto === index
                  ? `Ocultar curiosidade sobre ${item.nome}`
                  : `Descobrir mais sobre ${item.nome}`
              }
            >
              <ThemedText style={styles.botaoTexto}>
                {aberto === index
                  ? 'Mostrar menos'
                  : 'Descobrir mais'}
              </ThemedText>

              <ThemedText style={styles.botaoIcone}>
                {aberto === index ? '−' : '+'}
              </ThemedText>
            </Pressable>
          </ThemedView>
        </ThemedView>
      ))}

      <ThemedView style={styles.finalCard}>
        <ThemedText style={styles.finalEmoji}>
          🧡🐈
        </ThemedText>

        <ThemedText style={styles.finalTitle}>
          Sempre há algo novo para aprender!
        </ThemedText>

        <ThemedText style={styles.finalText}>
          Conhecer os hábitos dos gatos ajuda a compreender
          melhor suas necessidades e a cuidar deles com carinho,
          atenção e responsabilidade.
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.footer}>
        PORTAL DOS GATOS • CURIOSIDADES FELINAS
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
    paddingTop: 25,
    paddingBottom: 35,
    paddingHorizontal: 20,
  },

  headerContainer: {
    height: 205,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
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
    width: 165,
    height: 165,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: '#FF9547',
    backgroundColor: '#202127',
  },

  imageBadge: {
    position: 'absolute',
    bottom: 0,
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
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 40,
    textAlign: 'center',
  },

  orangeTitle: {
    color: '#FF9547',
    fontSize: 32,
    fontWeight: '900',
  },

  linhaLaranja: {
    width: 72,
    height: 4,
    backgroundColor: '#FF9547',
    marginTop: 13,
    borderRadius: 10,
  },

  subtitle: {
    color: '#A4A9B8',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 20,
  },

  introCard: {
    padding: 20,
    marginBottom: 30,
    backgroundColor: '#211D1A',
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#573A28',
    gap: 8,
  },

  introEmoji: {
    fontSize: 27,
  },

  introTitle: {
    color: '#FF9547',
    fontSize: 18,
    fontWeight: '900',
  },

  introText: {
    color: '#C0C4D0',
    fontSize: 13,
    lineHeight: 22,
  },

  sectionHeader: {
    marginBottom: 17,
    gap: 5,
    backgroundColor: 'transparent',
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },

  sectionSubtitle: {
    color: '#A4A9B8',
    fontSize: 12,
    lineHeight: 19,
  },

  curiosidadeCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 14,
    marginBottom: 13,
    backgroundColor: '#17191E',
    borderWidth: 1,
    borderColor: '#292C35',
    borderRadius: 22,
    elevation: 2,
  },

  curiosidadeIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,149,71,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,149,71,0.25)',
  },

  curiosidadeEmoji: {
    fontSize: 21,
  },

  curiosidadeContent: {
    flex: 1,
    minWidth: 0,
    backgroundColor: 'transparent',
  },

  cardTitle: {
    color: '#FF9547',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 7,
  },

  bodyText: {
    color: '#C0C4D0',
    fontSize: 13,
    lineHeight: 21,
  },

  dicaCard: {
    marginTop: 12,
    padding: 12,
    gap: 7,
    backgroundColor: '#211D1A',
    borderLeftWidth: 3,
    borderLeftColor: '#FF9547',
    borderRadius: 10,
  },

  dicaTitulo: {
    color: '#FF9547',
    fontSize: 13,
    fontWeight: '900',
  },

  dicaTexto: {
    color: '#C0C4D0',
    fontSize: 12,
    lineHeight: 21,
  },

  botao: {
    marginTop: 12,
    minHeight: 40,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 12,
    backgroundColor: 'rgba(255,149,71,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,149,71,0.35)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  botaoTexto: {
    color: '#FF9547',
    fontSize: 12,
    fontWeight: '800',
  },

  botaoIcone: {
    color: '#FF9547',
    fontSize: 20,
    fontWeight: '800',
  },

  finalCard: {
    alignItems: 'center',
    padding: 22,
    marginTop: 12,
    marginBottom: 22,
    gap: 12,
    backgroundColor: '#211D1A',
    borderWidth: 1,
    borderColor: '#573A28',
    borderRadius: 24,
  },

  finalEmoji: {
    fontSize: 32,
  },

  finalTitle: {
    color: '#FF9547',
    fontSize: 19,
    fontWeight: '900',
    textAlign: 'center',
  },

  finalText: {
    color: '#C0C4D0',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
  },

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