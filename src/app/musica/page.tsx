import { Divider } from '@/components/Divider';

const styles: Record<'iframe', React.CSSProperties> = {
  iframe: {
    border: 0,
    width: '350px',
    height: '470px',
  },
};

export default function Musica() {
  return (
    <>
      <h1>Música</h1>

      <p>
        Album{' '}
        <a href="https://ritualreunion.bandcamp.com/album/replica">
          <i>replica</i>
        </a>{' '}
        de mi grupo <i>ritual reunion</i>
      </p>

      <iframe
        style={styles.iframe}
        src="https://bandcamp.com/EmbeddedPlayer/album=4109334869/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless
      ></iframe>

      <Divider />

      <p>
        Otras cosas aleatorias en{' '}
        <a href="https://soundcloud.com/stringparser">soundcloud</a>
      </p>
    </>
  );
}
