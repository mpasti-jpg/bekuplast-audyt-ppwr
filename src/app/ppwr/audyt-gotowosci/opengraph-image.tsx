import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f5f1ea",
          color: "#0a1628",
          padding: 72,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ color: "#ff6b35", fontSize: 28, fontWeight: 700 }}>
          bekuplast
        </div>
        <div style={{ marginTop: 24, fontSize: 82, fontWeight: 800 }}>
          Audyt gotowosci PPWR
        </div>
        <div style={{ marginTop: 24, fontSize: 34, color: "#6c7a8c" }}>
          10 pytan. 5 wymiarow. Plan dzialania 90 dni.
        </div>
      </div>
    ),
    size,
  );
}
