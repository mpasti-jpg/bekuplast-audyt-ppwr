"use client";

import type { QuestionConfig } from "@/content/questions";
import { CardMultiQuestion } from "./questions/CardMultiQuestion";
import { CardSingleQuestion } from "./questions/CardSingleQuestion";
import { SingleQuestion } from "./questions/SingleQuestion";
import { SliderQuestion } from "./questions/SliderQuestion";

export function QuestionRouter({ question }: { question: QuestionConfig }) {
  switch (question.type) {
    case "cards_single":
      return <CardSingleQuestion question={question} />;
    case "cards_multi":
      return <CardMultiQuestion question={question} />;
    case "single":
      return <SingleQuestion question={question} />;
    case "slider":
      return <SliderQuestion question={question} />;
    default:
      return <div className="text-danger">Nieobsługiwany typ pytania.</div>;
  }
}
