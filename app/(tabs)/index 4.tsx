
import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, ScrollView, Pressable, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

const personalidades = [
  {
    nome: 'Brincalhão',
    imagem: require('@/assets/images/gato_brincalhão.png'),
    descricao:
      'Gosta de perseguir brinquedos, correr pela casa e explorar o ambiente.',
    detalhe:
      'Ofereça brinquedos variados e reserve momentos para brincar com seu gato. Isso ajuda a estimular seus instintos naturais.',
    icone: '🎾',
  },
  {
    nome: 'Tranquilo',
    imagem: require('@/assets/images/gato_tranquilo.png'),
    descricao:
      'Prefere descansar, observar o ambiente e ficar em lugares confortáveis.',
    detalhe:
      'Prepare um cantinho silencioso e confortável para ele descansar sem ser incomodado.',
    icone: '😴',
  },
  {
    nome: 'Curioso',
    imagem: require('@/assets/images/gato_curioso.png'),
    descricao:
      'Adora explorar caixas, observar janelas e investigar novidades.',
    detalhe:
      'Ofereça caixas, brinquedos interativos e locais seguros para explorar. Apresente mudanças aos poucos.',
    icone: '🔎',
  },
];

export default function PersonalidadeScreen() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >
        <ThemedView style={styles.headerContainer}>
          <IconSymbol
            size={190}
            color="#FF9547"
            name="pawprint.fill"
            style={styles.headerIcon}
          />

          <Image
            source={require('@/assets/images/gato3.jpg')}
            style={styles.fotoGato}
            contentFit="contain"
            transition={200}
          />

          <ThemedView style={styles.imageBadge}>
            <ThemedText style={styles.imageBadgeText}>
              🐾 Amor e cuidado
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <View style={styles.cabecalho}>
          <ThemedText style={styles.subtitulo}>
            CONHEÇA SEU GATO
          </ThemedText>

          <ThemedText
            type="title"
            style={[
              styles.titulo,
              { fontFamily: Fonts.rounded },
            ]}
          >
            Personalidade
            {'\n'}
            <ThemedText style={styles.tituloLaranja}>
              dos Gatos
            </ThemedText>
          </ThemedText>

          <View style={styles.linhaLaranja} />

          <ThemedText style={styles.introducao}>
            Descubra o jeito único do seu companheiro
          </ThemedText>
        </View>

        <View style={styles.aviso}>
          <ThemedText style={styles.avisoIcone}>
            🧡
          </ThemedText>

          <View style={styles.avisoTexto}>
            <ThemedText style={styles.avisoTitulo}>
              Cada gato é único!
            </ThemedText>

            <ThemedText style={styles.avisoDescricao}>
              Cada felino tem seu próprio jeito de ser.
              Conhecer seus comportamentos ajuda a entender
              suas necessidades e a cuidar melhor dele.
            </ThemedText>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>
            Personalidades felinas
          </ThemedText>

          <ThemedText style={styles.sectionSubtitle}>
            Toque em cada tópico para descobrir dicas.
          </ThemedText>
        </View>

        {personalidades.map((item, index) => (
          <View key={item.nome} style={styles.card}>
            <Image
              source={item.imagem}
              style={styles.imagem}
              contentFit="contain"
              transition={200}
            />

            <View style={styles.cardConteudo}>
              <ThemedText style={styles.cardNumero}>
                PERSONALIDADE 0{index + 1}
              </ThemedText>

              <ThemedText style={styles.cardTitulo}>
                {item.icone} {item.nome}
              </ThemedText>

              <ThemedText style={styles.cardDescricao}>
                {item.descricao}
              </ThemedText>

              {aberto === index && (
                <View style={styles.detalhe}>
                  <ThemedText style={styles.detalheTitulo}>
                    💡 Dica para cuidar
                  </ThemedText>

                  <ThemedText style={styles.detalheTexto}>
                    {item.detalhe}
                  </ThemedText>
                </View>
              )}

              <Pressable
                style={styles.botao}
                onPress={() =>
                  setAberto(aberto === index ? null : index)
                }
                accessibilityRole="button"
                accessibilityLabel={`${
                  aberto === index ? 'Ocultar' : 'Ver'
                } dica para gato ${item.nome}`}
              >
                <ThemedText style={styles.botaoTexto}>
                  {aberto === index
                    ? 'Mostrar menos'
                    : 'Descobrir mais'}
                </ThemedText>

                <ThemedText style={styles.botaoSeta}>
                  {aberto === index ? '−' : '+'}
                </ThemedText>
              </Pressable>
            </View>
          </View>
        ))}

        <View style={styles.final}>
          <ThemedText style={styles.finalEmoji}>
            🐈
          </ThemedText>

          <ThemedText style={styles.finalTitulo}>
            Aprenda a linguagem do seu gato
          </ThemedText>

          <ThemedText style={styles.finalTexto}>
            Observe os hábitos, os sons e a linguagem corporal
            dele. Com paciência e respeito, você pode conhecer
            cada vez melhor seu companheiro.
          </ThemedText>
        </View>

        <ThemedText style={styles.rodape}>
          PORTAL DOS GATOS • FEITO COM CARINHO
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1013',
  },

  conteudo: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 35,
  },

  headerContainer: {
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
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

  cabecalho: {
    alignItems: 'center',
    marginBottom: 25,
  },

  subtitulo: {
    color: '#FF9547',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 3,
    marginBottom: 8,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 40,
    textAlign: 'center',
  },

  tituloLaranja: {
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

  introducao: {
    color: '#A4A9B8',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 12,
  },

  aviso: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#211D1A',
    borderColor: '#573A28',
    borderWidth: 1,
    borderRadius: 22,
    padding: 18,
    marginBottom: 28,
    gap: 12,
  },

  avisoIcone: {
    fontSize: 27,
  },

  avisoTexto: {
    flex: 1,
  },

  avisoTitulo: {
    color: '#FF9547',
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 7,
  },

  avisoDescricao: {
    color: '#C2C3CA',
    fontSize: 13,
    lineHeight: 21,
  },

  sectionHeader: {
    marginBottom: 16,
    gap: 5,
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

  card: {
    backgroundColor: '#191A1F',
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#303138',
    marginBottom: 16,
  },

  imagem: {
    width: '100%',
    height: 250,
    backgroundColor: '#202127',
  },

  cardConteudo: {
    padding: 16,
  },

  cardNumero: {
    color: '#FF9547',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.8,
    marginBottom: 8,
  },

  cardTitulo: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },

  cardDescricao: {
    color: '#B8BAC3',
    fontSize: 13,
    lineHeight: 21,
  },

  detalhe: {
    backgroundColor: '#242127',
    borderLeftWidth: 3,
    borderLeftColor: '#FF9547',
    borderRadius: 10,
    padding: 13,
    marginTop: 14,
  },

  detalheTitulo: {
    color: '#FF9547',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 6,
  },

  detalheTexto: {
    color: '#D1D1D7',
    fontSize: 12,
    lineHeight: 21,
  },

  botao: {
    marginTop: 14,
    minHeight: 42,
    backgroundColor: 'rgba(255,149,71,0.12)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,149,71,0.35)',
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  botaoTexto: {
    color: '#FF9547',
    fontSize: 13,
    fontWeight: '800',
  },

  botaoSeta: {
    color: '#FF9547',
    fontSize: 22,
    fontWeight: '600',
  },

  final: {
    backgroundColor: '#211D1A',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#573A28',
    alignItems: 'center',
    padding: 22,
    marginTop: 8,
  },

  finalEmoji: {
    fontSize: 34,
    marginBottom: 10,
  },

  finalTitulo: {
    color: '#FF9547',
    fontSize: 19,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },

  finalTexto: {
    color: '#B8BAC3',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
  },

  rodape: {
    color: '#777983',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    textAlign: 'center',
    marginTop: 25,
  },
});
