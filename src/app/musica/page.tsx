export const meta = {
  title: 'Música',
  description: 'Disco réplica de "ritual reunion"',
};

const styles: Record<'iframe', React.CSSProperties> = {
  iframe: {
    border: 0,
    width: '350px',
    height: '470px',
  },
};

export default function Música() {
  return (
    <div className="space-y-6">
      <h1 className="title">Música</h1>
      <p>
        Álbum{' '}
        <a
          className="text-link"
          href="https://ritualreunion.bandcamp.com/album/replica"
        >
          <i>replica</i>
        </a>{' '}
        de mi grupo <i>ritual reunion</i>
      </p>
      <iframe
        title="ritual reunion (bandcamp)"
        style={styles.iframe}
        src="https://bandcamp.com/EmbeddedPlayer/album=4109334869/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless
      ></iframe>
      <p className="mb-4"></p>
      --
      <p>
        También puedes encontrar otras cosas aleatorias en{' '}
        <a className="text-link" href="https://soundcloud.com/stringparser">
          soundcloud
        </a>
      </p>
    </div>
  );
}
