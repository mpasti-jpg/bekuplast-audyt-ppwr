"use client";

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { IndustryCode } from "@/types/industry";
import { INDUSTRY_LABELS } from "@/types/industry";

type DimensionDataPoint = {
  dimension: string;
  code: string;
  score: number;
  benchmark: number;
};

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

      <div className="mt-6 h-[360px] md:h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#e2e0db" />
            <PolarAngleAxis
              dataKey="dimension"
              tick={{ fill: "#0a1628", fontSize: 13 }}
            />
            <PolarRadiusAxis
              domain={[0, 100]}
              tick={{ fill: "#6c7a8c", fontSize: 11 }}
            />
            <Radar
              name="Średnia branży"
              dataKey="benchmark"
              stroke="#6c7a8c"
              fill="#6c7a8c"
              fillOpacity={0.14}
              strokeWidth={2}
            />
            <Radar
              name="Twój wynik"
              dataKey="score"
              stroke="#ff6b35"
              fill="#ff6b35"
              fillOpacity={0.32}
              strokeWidth={3}
            />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
