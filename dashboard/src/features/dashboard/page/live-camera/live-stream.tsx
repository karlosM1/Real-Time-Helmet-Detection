export default function LiveStream() {
  const backendUrl = ""; // adjust for production endpoint

  return (
    <div className="w-full mt-4">
      <div className="flex justify-center">
        <div className="border rounded overflow-hidden w-full max-w-xl h-[500px]">
          <img
            src={`${backendUrl}/video_feed`}
            alt="Live Detection Stream"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
