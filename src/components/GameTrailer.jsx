import "../styles/GameTrailer.css"

function GameTrailer({ trailer }) {
  return (
    <div className="trailer">
      {trailer.length > 0 && (
        <>
          <video controls poster={trailer[0].preview}>
            <source src={trailer[0].data.max} type="video/mp4"></source>
          </video>
          <p className="trailername">{trailer[0].name}</p>
        </>
      )}
    </div>
  );
}

export default GameTrailer;
