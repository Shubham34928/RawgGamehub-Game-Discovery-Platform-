import "../styles/ScreensSection.css";
function ScreensSection({ screenshot, setPreview, setPreviewtoggle }) {
  return (
        <div className="screenshots">
          {screenshot?.map((ele) => {
            return (
              <>
                {ele.id != -1 && (
                  <img
                    src={ele.image}
                    className="image"
                    key={ele.id}
                    onClick={() => {
                      (setPreview(ele.image), setPreviewtoggle(true));
                    }}
                  />
                )}
              </>
            );
          })}
        </div>
  );
}

export default ScreensSection;
