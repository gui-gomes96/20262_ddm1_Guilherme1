import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, ScrollView, Pressable, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

const cuidados = [
  {
    titulo: 'Alimentação',
    subtitulo: 'Alimentação Balanceada',
    emoji: '🥣',
    descricao:
      'Ofereça um alimento completo e adequado à idade, ao peso e às necessidades do seu gato. Mantenha horários regulares e evite oferecer alimentos humanos que possam fazer mal aos felinos.',
  },
  {
    titulo: 'Hidratação',
    subtitulo: 'Hidratação Constante',
    emoji: '💧',
    descricao:
      'Deixe água fresca e limpa sempre disponível. Espalhe potes pela casa e experimente uma fonte de água para incentivar seu gato a beber mais. Alimentos úmidos também podem ajudar na hidratação.',
  },
  {
    titulo: 'Higiene',
    subtitulo: 'Caixa de Areia Limpa',
    emoji: '🐾',
    descricao:
      'Retire os resíduos diariamente e mantenha a caixa em um local tranquilo, ventilado e longe da comida. Uma boa referência é ter uma caixa por gato, mais uma extra, quando possível.',
  },
  {
    titulo: 'Diversão',
    subtitulo: 'Estímulo e Brincadeiras',
    emoji: '🧶',
    descricao:
      'Reserve momentos do dia para brincar com varinhas, bolinhas e brinquedos seguros. Arranhadores, esconderijos e lugares elevados ajudam a estimular os comportamentos naturais dos gatos.',
  },
  {
    titulo: 'Saúde',
    subtitulo: 'Consultas ao Veterinário',
    emoji: '🩺',
    descricao:
      'Mantenha as vacinas e a prevenção contra parasitas em dia, seguindo a orientação veterinária. Consulte um profissional regularmente e procure atendimento se notar mudanças no apetite, no comportamento ou na disposição do seu gato.',
  },
];

export default function TabTwoScreen() {
  const [abertos, setAbertos] = useState<number[]>([]);

  function alternarCuidado(index: number) {
    setAbertos((anteriores) =>
      anteriores.includes(index)
        ? anteriores.filter((item) => item !== index)
        : [...anteriores, index]
    );
  }

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
          source={require('@/assets/images/gato4.jpg')}
          style={styles.fotoGato}
          contentFit="cover"
          transition={200}
        />

        <ThemedView style={styles.imageBadge}>
          <ThemedText style={styles.imageBadgeText}>
            🐾 Amor e cuidado
          </ThemedText>
        </ThemedView>
      </ThemedView>

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

      <ThemedView style={styles.sectionHeader}>
        <ThemedText style={styles.sectionTitle}>
          Cuidados essenciais
        </ThemedText>

        <ThemedText style={styles.sectionSubtitle}>
          Toque em cada tópico para ver as dicas.
        </ThemedText>
      </ThemedView>

      {cuidados.map((item, index) => {
        const aberto = abertos.includes(index);

        return (
          <View key={item.titulo} style={styles.tipsContainer}>
            <View style={styles.tipIcon}>
              <ThemedText style={styles.tipEmoji}>
                {item.emoji}
              </ThemedText>
            </View>

            <View style={styles.tipContent}>
              <ThemedText style={styles.tipHeading}>
                {item.titulo}
              </ThemedText>

              <Pressable
                style={styles.botao}
                onPress={() => alternarCuidado(index)}
                accessibilityRole="button"
                accessibilityLabel={`${aberto ? 'Ocultar' : 'Mostrar'} dicas: ${item.subtitulo}`}
                accessibilityState={{ expanded: aberto }}
              >
                <ThemedText style={styles.seta}>
                  {aberto ? '⌄' : '›'}
                </ThemedText>

                <ThemedText style={styles.botaoTexto}>
                  {item.subtitulo}
                </ThemedText>
              </Pressable>

              {aberto && (
                <View style={styles.detalhe}>
                  <ThemedText style={styles.bodyText}>
                    {item.descricao}
                  </ThemedText>
                </View>
              )}
            </View>
          </View>
        );
      })}

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

  tipsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
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
    minWidth: 0,
    backgroundColor: 'transparent',
  },

  tipHeading: {
    color: '#FF9547',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 7,
    marginTop: 3,
  },

  botao: {
    minHeight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#141619',
  },

  seta: {
    color: '#C0C4D0',
    fontSize: 21,
    lineHeight: 23,
    width: 12,
    textAlign: 'center',
  },

  botaoTexto: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 20,
  },

  detalhe: {
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 9,
    backgroundColor: '#141619',
    borderRadius: 5,
  },

  bodyText: {
    color: '#C0C4D0',
    fontSize: 12,
    lineHeight: 21,
  },

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