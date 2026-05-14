import type { IndustryCode } from "@/types/industry";
import { INDUSTRY_LABELS } from "@/types/industry";

type DimensionDataPoint = {
  dimension: string;
  code: string;
  score: number;
  benchmark: number;
};

const CENTER = 160;
const RADIUS = 112;

function getPoint(index: number, total: number, value: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  const radius = (Math.max(0, Math.min(100, value)) / 100) * RADIUS;

  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

function getPolygonPoints(data: DimensionDataPoint[], key: "score" | "benchmark") {
  return data
    .map((item, index) => {
      const point = getPoint(index, data.length, item[key]);
      return `${point.x},${point.y}`;
    })
    .join(" ");
}

export function DimensionRadar({
  data,
  industry,
}: {
  data: DimensionDataPoint[];
  industry: IndustryCode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-white p-6 md:p-8">
      <h2 className="text-2xl font-bold text-navy md:text-3xl">
        Profil gotowości - 5 wymiarów
      </h2>
      <p className="mt-2 text-navy/70">
        Porównanie Twojego wyniku ze średnią branży{" "}
        <strong>{INDUSTRY_LABELS[industry]}</strong>.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
        <div className="mx-auto w-full max-w-[420px]">
          <svg
            role="img"
            aria-label="Radar pięciu wymiarów gotowości PPWR"
            viewBox="0 0 320 320"
            className="h-auto w-full"
          >
            {[25, 50, 75, 100].map((level) => (
              <polygon
                key={level}
                points={data
                  .map((_, index) => {
                    const point = getPoint(index, data.length, level);
                    return `${point.x},${point.y}`;
                  })
                  .join(" ")}
                fill="none"
                stroke="#e2e0db"
                strokeWidth="1"
              />
            ))}
            {data.map((item, index) => {
              const outer = getPoint(index, data.length, 100);
              const label = getPoint(index, data.length, 118);

              return (
                <g key={item.code}>
                  <line
                    x1={CENTER}
                    y1={CENTER}
                    x2={outer.x}
                    y2={outer.y}
                    stroke="#e2e0db"
                    strokeWidth="1"
                  />
                  <text
                    x={label.x}
                    y={label.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-navy text-[11px] font-semibold"
                  >
                    {item.code}
                  </text>
                </g>
              );
            })}
            <polygon
              points={getPolygonPoints(data, "benchmark")}
              fill="#6c7a8c"
              fillOpacity="0.14"
              stroke="#6c7a8c"
              strokeWidth="2"
            />
            <polygon
              points={getPolygonPoints(data, "score")}
              fill="#ff6b35"
              fillOpacity="0.32"
              stroke="#ff6b35"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-navy">
            <span className="h-3 w-3 rounded-full bg-amber" />
            Twój wynik
          </div>
          <div className="flex items-center gap-2 text-sm text-navy/70">
            <span className="h-3 w-3 rounded-full bg-text-muted/40" />
            Średnia branży
          </div>
          <dl className="grid grid-cols-1 gap-2 pt-2 text-sm">
            {data.map((item) => (
              <div
                key={item.code}
                className="flex items-center justify-between gap-4 rounded-lg bg-paper px-3 py-2"
              >
                <dt className="font-medium text-navy">{item.dimension}</dt>
                <dd className="shrink-0 text-text-muted">
                  <span className="font-semibold text-amber">{item.score}</span>
                  {" / "}
                  {item.benchmark}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
