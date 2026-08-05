/**
 * The hero question card. Five real questions drawn from the boards the academy
 * actually teaches, each with the one-line reason behind the answer, because
 * "concept first, then the paper" is the thing being demonstrated.
 *
 * Every answer here has been checked. If you add a question, check it twice:
 * a wrong answer in the hero of a tuition website is the worst possible bug.
 */

export type Question = {
  meta: string;
  /** May contain entities for maths notation. Rendered as HTML. */
  prompt: string;
  options: string[];
  answer: number;
  /** Shown after answering. May contain <b> for emphasis. */
  why: string;
};

export const questions: Question[] = [
  {
    meta: "SSC Class X, Maths",
    prompt: "If 2x + 5 = 17, what is x?",
    options: ["4", "6", "11", "8.5"],
    answer: 1,
    why: "Take 5 off <b>both</b> sides to get 2x = 12, then halve it. The step students skip is doing the same thing to both sides.",
  },
  {
    meta: "SSC Class X, Physics",
    prompt: "A bus covers 150 m in 10 seconds. Its average speed is",
    options: ["1.5 m/s", "15 m/s", "150 m/s", "10 m/s"],
    answer: 1,
    why: "Average speed is total distance over total time. <b>150 &divide; 10 = 15 m/s.</b> Units first, arithmetic second.",
  },
  {
    meta: "Intermediate, Trigonometry",
    prompt: "sin&sup2;&theta; + cos&sup2;&theta; equals",
    options: ["0", "1", "2", "tan&theta;"],
    answer: 1,
    why: "The Pythagorean identity. It is <b>1 for every value of &theta;</b>, which is why it collapses whole questions into one line.",
  },
  {
    meta: "Intermediate MPC, Calculus",
    prompt: "The derivative of x&sup3; with respect to x is",
    options: ["3x&sup2;", "x&#8308;/4", "3x", "x&sup2;"],
    answer: 0,
    why: "Bring the power down in front, then reduce it by one. <b>x&sup3; becomes 3x&sup2;.</b> Same rule every time.",
  },
  {
    meta: "Diploma ECET, Progressions",
    prompt: "How many terms are in 3, 7, 11, &hellip;, 43?",
    options: ["10", "11", "12", "40"],
    answer: 1,
    why: "First term 3, common difference 4. <b>43 = 3 + (n&minus;1)4 gives n = 11.</b> You are counting terms, not reading the last value.",
  },
];
