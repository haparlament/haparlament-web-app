import './Tile.css';
import { useEffect, useRef } from 'react';
import { useMediaTrack } from '@daily-co/daily-react-hooks';
import Username from './Username';
import TileVideo from './TileVideo';

export default function Tile({ id, isScreenShare, isLocal, isAlone }: any) {
  let containerCssClasses = isScreenShare ? 'tile-screenshare' : 'tile-video';
  let audioTrack: any = null;
  let audioElement: any = null;
  
  if (isLocal) {
    containerCssClasses += ' self-view';
    if (isAlone) {
      containerCssClasses += ' alone';
    }
  } else {
    // Only create audio track and element if the participant is not local.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    audioTrack = useMediaTrack(id, isScreenShare ? 'screenAudio' : 'audio');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    audioElement = useRef(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (audioTrack?.state === 'playable') {
        if (audioElement?.current) {
          (audioElement.current.srcObject =
            audioTrack && new MediaStream([audioTrack.persistentTrack]));
        }
      }
    }, [audioTrack, audioElement]);
  }

  return (
    <div className={containerCssClasses}>
      <TileVideo id={id} isScreenShare={isScreenShare} />
      {!isLocal && audioTrack && <audio autoPlay playsInline ref={audioElement} />}
      <Username id={id} isLocal={isLocal} />
    </div>
  );
}