/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "THRIVE EDU";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f0e8",
          color: "#1f4d3a",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            padding: 64,
          }}
        >
          <img
            src="https://thriveedu.org/thrive-edu-logo.png"
            width={180}
            height={180}
            alt=""
            style={{ display: "block" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1 }}>THRIVE EDU</div>
            <div style={{ fontSize: 30, fontWeight: 500, color: "#4b5e55", maxWidth: 700 }}>
              Education that helps students, families, teachers, and schools thrive.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
