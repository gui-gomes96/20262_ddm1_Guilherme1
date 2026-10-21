
import { Image } from 'expo-image';
import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <ThemedView style={styles.mainContent}>
        <ThemedView style={styles.headerContainer}>
          <IconSymbol
            size={190}
            color="#FF9547"
            name="pawprint.fill"
            style={styles.headerIcon}
          />

          <Image
            source={require('@/assets/images/gato7.png')}
            style={styles.fotoGato}
            contentFit="cover"
          />

          <ThemedView style={styles.imageBadge}>
            <ThemedText style={styles.imageBadgeText}>
              🐾 Histórias com amor
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.titleContainer}>
          <ThemedText style={styles.eyebrow}>
            HISTÓRIAS FELINAS
          </ThemedText>

          <ThemedText
            type="title"
            style={styles.whiteTitleText}
          >
            Portal dos Gatos 🐱
          </ThemedText>

          <ThemedText style={styles.orangeTitle}>
            Histórias de amor e amizade
          </ThemedText>

          <ThemedView style={styles.linhaLaranja} />

          <ThemedText style={styles.subtitle}>
            Encontros inesperados que se transformam
            em amizades para a vida toda.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.introCard}>
          <ThemedText style={styles.emoji}>
            🐾
          </ThemedText>

          <ThemedText style={styles.introTitle}>
            Encontros que mudam vidas
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Algumas amizades começam de maneiras inesperadas.
            Um miado na rua, uma visita a um abrigo ou um gatinho
            que aparece na porta de casa podem mudar completamente
            a vida de alguém.
            {'\n\n'}
            Aqui você vai conhecer relatos em primeira pessoa
            de pessoas que encontraram seus companheiros felinos
            e descobrir como esses encontros se transformaram
            em histórias de carinho, companheirismo e amor.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>
            Histórias especiais 🧡
          </ThemedText>

          <ThemedText style={styles.sectionDescription}>
            Cada gatinho tem uma história para contar.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.cardTop}>
            <ThemedView style={styles.iconContainer}>
              <ThemedText style={styles.cardEmoji}>
                🧡
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.badge}>
              <ThemedText style={styles.cardTitle}>
                RELATO 01
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedText style={styles.storyTitle}>
            &quot;Encontrei meu melhor amigo na rua&quot;
          </ThemedText>

          <ThemedText style={styles.author}>
            — Mariana, 22 anos
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Eu estava voltando da faculdade em uma tarde chuvosa
            quando ouvi um miado vindo de perto de uma calçada.
            No começo, achei que fosse impressão minha, mas resolvi
            olhar melhor.
            {'\n\n'}
            Foi quando encontrei um gatinho laranja, todo molhado,
            escondido embaixo de um carro. Ele parecia assustado
            e muito pequenininho. Quando me aproximei, ele começou
            a miar ainda mais, como se estivesse pedindo ajuda.
            {'\n\n'}
            Não consegui simplesmente ir embora. Procurei ajuda,
            consegui levá-lo para um lugar seguro e, depois de
            verificar que precisava de cuidados, decidi adotá-lo.
            Dei a ele o nome de Caramelo.
            {'\n\n'}
            Hoje, ele dorme aos meus pés, me recebe na porta
            quando chego em casa e transforma até os dias mais
            difíceis em momentos felizes. Às vezes penso que fui
            eu quem o salvou, mas sinto que ele também me salvou
            de muitas maneiras.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.cardTop}>
            <ThemedView style={styles.iconContainer}>
              <ThemedText style={styles.cardEmoji}>
                🐈
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.badge}>
              <ThemedText style={styles.cardTitle}>
                RELATO 02
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedText style={styles.storyTitle}>
            &quot;Ele escolheu a nossa família&quot;
          </ThemedText>

          <ThemedText style={styles.author}>
            — Lucas, 30 anos
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Eu nunca tinha planejado ter um gato. Sempre achei
            que não teria tempo para cuidar de um animal, até
            que um dia um gatinho começou a aparecer no quintal
            da minha casa.
            {'\n\n'}
            No início, eu apenas deixava um potinho de água
            para ele. Depois, comecei a oferecer comida e percebi
            que ele voltava todos os dias, sempre no mesmo horário.
            Aos poucos, ele foi perdendo o medo e passou a ficar
            perto de mim.
            {'\n\n'}
            Conversei com a minha família e, depois de procurar
            saber se ele tinha tutor, decidimos acolhê-lo.
            Chamamos o gatinho de Tobias.
            {'\n\n'}
            O mais engraçado é que ele acabou escolhendo
            o lugar favorito de cada pessoa da casa. Hoje,
            não consigo imaginar chegar em casa sem encontrá-lo
            esperando por nós.
            {'\n\n'}
            Aprendi que nem sempre precisamos planejar um encontro
            especial. Às vezes, ele simplesmente acontece.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.cardTop}>
            <ThemedView style={styles.iconContainer}>
              <ThemedText style={styles.cardEmoji}>
                🌙
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.badge}>
              <ThemedText style={styles.cardTitle}>
                RELATO 03
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedText style={styles.storyTitle}>
            &quot;A gata que chegou no momento certo&quot;
          </ThemedText>

          <ThemedText style={styles.author}>
            — Beatriz, 25 anos
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Eu estava passando por uma fase muito complicada
            quando minha irmã me convidou para visitar um abrigo
            de animais. Não estava pensando em adotar naquele dia,
            mas aceitei o convite.
            {'\n\n'}
            Enquanto caminhava pelo abrigo, vi uma gatinha cinza
            sentada no canto de um espaço. Ela não fazia muito
            barulho, apenas me observava com seus olhos verdes.
            Quando me aproximei, ela veio devagar e encostou
            a cabeça na minha mão.
            {'\n\n'}
            Aquilo me emocionou de um jeito que eu não esperava.
            Conversei com os responsáveis, conheci melhor a história
            dela e decidi que queria dar a ela um lar.
            {'\n\n'}
            Dei o nome de Luna. Nos primeiros dias, ela era tímida,
            mas logo começou a dormir perto de mim e a me acompanhar
            pela casa.
            {'\n\n'}
            A Luna não resolveu todos os meus problemas, mas sua
            companhia trouxe mais leveza para a minha rotina.
            Foi naquele abrigo que encontrei uma amiga que nem
            sabia que estava procurando.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.cardTop}>
            <ThemedView style={styles.iconContainer}>
              <ThemedText style={styles.cardEmoji}>
                🐾
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.badge}>
              <ThemedText style={styles.cardTitle}>
                RELATO 04
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedText style={styles.storyTitle}>
            &quot;Um pequeno miado mudou meu caminho&quot;
          </ThemedText>

          <ThemedText style={styles.author}>
            — Rafael, 19 anos
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Eu estava indo para o trabalho quando ouvi um miado
            vindo de uma caixa de papelão perto de uma praça.
            Olhei ao redor para ver se alguém estava procurando
            um animal, mas não encontrei ninguém por perto.
            {'\n\n'}
            Dentro da caixa havia um filhote preto e branco,
            muito pequeno. Ele estava assustado e se encolhia
            toda vez que alguém passava.
            {'\n\n'}
            Pedi ajuda a uma pessoa que estava próxima e procurei
            orientação para cuidar dele corretamente. Depois de
            verificar se havia um tutor procurando por ele,
            comecei o processo de acolhimento.
            {'\n\n'}
            Chamei-o de Oreo. No começo, ele se escondia embaixo
            dos móveis, mas, com paciência e carinho, começou
            a confiar em mim.
            {'\n\n'}
            Hoje, ele é o dono da casa. Derruba brinquedos,
            corre pelos corredores e exige carinho justamente
            quando estou ocupado. Não foi uma adoção planejada,
            mas foi uma das melhores decisões que já tomei.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedView style={styles.cardTop}>
            <ThemedView style={styles.iconContainer}>
              <ThemedText style={styles.cardEmoji}>
                ❤️
              </ThemedText>
            </ThemedView>

            <ThemedView style={styles.badge}>
              <ThemedText style={styles.cardTitle}>
                RELATO 05
              </ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedText style={styles.storyTitle}>
            &quot;Adotei um gato adulto e ganhei um companheiro&quot;
          </ThemedText>

          <ThemedText style={styles.author}>
            — Fernanda, 35 anos
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Quando decidi adotar um gato, muitas pessoas me
            sugeriram que eu escolhesse um filhote. Mas, durante
            uma visita a uma ONG, conheci um gato adulto chamado
            Fred.
            {'\n\n'}
            Ele estava deitado tranquilamente em sua caminha.
            Enquanto os outros gatos brincavam, Fred apenas
            levantou a cabeça e me observou. Quando me sentei
            perto dele, começou a ronronar.
            {'\n\n'}
            Descobri que ele esperava por uma família havia
            bastante tempo. Aquilo ficou na minha cabeça durante
            todo o caminho de volta para casa.
            {'\n\n'}
            Voltei alguns dias depois e decidi adotá-lo. No início,
            ele precisava de tempo para se acostumar ao ambiente,
            mas respeitei seu espaço e deixei que se aproximasse
            no ritmo dele.
            {'\n\n'}
            Hoje, Fred passa as tardes dormindo perto da minha
            mesa e gosta de me acompanhar enquanto leio.
            Adotar um gato adulto me ensinou que todo animal
            merece uma oportunidade, independentemente da idade.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.finalCard}>
          <ThemedText style={styles.finalEmoji}>
            🧡🐈
          </ThemedText>

          <ThemedText style={styles.finalTitle}>
            Sua história também pode começar aqui!
          </ThemedText>

          <ThemedText style={styles.bodyText}>
            Cada gato tem uma história antes de encontrar
            sua família. Alguns são resgatados das ruas,
            outros chegam por meio de abrigos, ONGs ou encontros
            inesperados.
            {'\n\n'}
            Adotar é assumir um compromisso com a vida de um
            animal. Com cuidado, paciência e responsabilidade,
            um encontro pode se transformar em uma amizade
            para muitos anos.
            {'\n\n'}
            Quem sabe o próximo relato não seja o seu?
          </ThemedText>
        </ThemedView>

        <ThemedText style={styles.footer}>
          PORTAL DOS GATOS • TODA HISTÓRIA MERECE SER CONTADA 🐾
        </ThemedText>
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
    paddingTop: 35,
    paddingBottom: 40,
  },
  mainContent: {
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
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
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  eyebrow: {
    color: '#FF9547',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 4,
    marginBottom: 9,
  },
  whiteTitleText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  orangeTitle: {
    color: '#FF9547',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 8,
  },
  linhaLaranja: {
    width: 85,
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
    lineHeight: 21,
  },
  introCard: {
    padding: 22,
    marginBottom: 30,
    backgroundColor: '#211D1A',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#573A28',
    gap: 12,
  },
  emoji: {
    fontSize: 32,
  },
  introTitle: {
    color: '#FF9547',
    fontSize: 21,
    fontWeight: '900',
    lineHeight: 28,
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
  sectionDescription: {
    color: '#8E94A4',
    fontSize: 13,
    lineHeight: 20,
  },
  stepContainer: {
    gap: 13,
    marginBottom: 18,
    padding: 20,
    backgroundColor: '#17191E',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#2A2D35',
    elevation: 3,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: 'transparent',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,149,71,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,149,71,0.25)',
  },
  cardEmoji: {
    fontSize: 22,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,149,71,0.12)',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
  },
  cardTitle: {
    color: '#FF9547',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  storyTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
    lineHeight: 28,
  },
  author: {
    color: '#FF9547',
    fontSize: 13,
    fontStyle: 'italic',
  },
  bodyText: {
    color: '#B5BAC8',
    fontSize: 14,
    lineHeight: 24,
  },
  finalCard: {
    padding: 23,
    marginTop: 5,
    marginBottom: 24,
    backgroundColor: '#211D1A',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#FF9547',
    gap: 13,
  },
  finalEmoji: {
    fontSize: 35,
    textAlign: 'center',
  },
  finalTitle: {
    color: '#FF9547',
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 28,
    textAlign: 'center',
  },
  footer: {
    color: '#777D8C',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.7,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
});
