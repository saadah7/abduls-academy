"use client";

import { useState } from "react";
import { questions } from "@/content/quiz";

/**
 * The hero's interactive moment: a real exam question from a board the academy
 * teaches. Answering reveals the reason behind the answer, which is the whole
 * pitch ("concept first, then the paper") demonstrated rather than claimed.
 */
export function QuestionCard() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [replayScore, setReplayScore] = useState<number | null>(null);

  const q = questions[index];
  const answered = picked !== null;
  const isLast = index === questions.length - 1;
  const gotItRight = picked === q.answer;

  function choose(i: number) {
    if (answered) return;
    setPicked(i);
    if (i === q.answer) setCorrect((c) => c + 1);
  }

  function advance() {
    if (isLast) {
      setReplayScore(correct);
      setIndex(0);
      setCorrect(0);
    } else {
      setIndex((i) => i + 1);
      setReplayScore(null);
    }
    setPicked(null);
  }

  function optionClass(i: number) {
    if (!answered) return "q-opt";
    if (i === q.answer) return "q-opt right";
    if (i === picked) return "q-opt wrong";
    return "q-opt";
  }

  const score = answered
    ? `${correct} of ${index + 1} right so far`
    : replayScore !== null
      ? `You got ${replayScore} of ${questions.length}. Going again`
      : `Question ${index + 1} of ${questions.length}`;

  return (
    <div className="quiz">
      <div className="q-top">
        <span className="q-lab">
          Try one <em>{q.meta}</em>
        </span>
        <span className="q-dots" aria-hidden>
          {questions.map((_, i) => (
            <i key={i} className={i < index ? "done" : i === index ? "now" : ""} />
          ))}
        </span>
      </div>

      <p className="q-text" dangerouslySetInnerHTML={{ __html: q.prompt }} />

      <div className="q-opts">
        {q.options.map((opt, i) => (
          <button
            key={i}
            type="button"
            className={optionClass(i)}
            disabled={answered}
            onClick={() => choose(i)}
          >
            <span className="k">{["A", "B", "C", "D"][i]}</span>
            <span dangerouslySetInnerHTML={{ __html: opt }} />
          </button>
        ))}
      </div>

      {answered && (
        <div
          className="q-why"
          dangerouslySetInnerHTML={{
            __html: `${gotItRight ? "<b>Correct.</b>" : "<b>Not quite.</b>"} ${q.why}`,
          }}
        />
      )}

      <div className="q-bot">
        <span className="q-score" role="status">
          {score}
        </span>
        {answered && (
          <button className="q-next" type="button" onClick={advance}>
            {isLast ? "Start again" : "Next question"} <span aria-hidden>&rarr;</span>
          </button>
        )}
      </div>
    </div>
  );
}
