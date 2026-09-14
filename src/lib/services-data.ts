export interface Service {
  id: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "hyperparameter-model-tuning",
    title: "Hyperparameter model tuning",
    description:
      "Our AI experts handle your hyperparameter tuning, optimizing your unique machine-learning model optimization requirements. We identify the hyperparameters relevant to your algorithm and tune the values to yield the best performance of the machine learning model.",
  },
  {
    id: "ai-consultation",
    title: "AI Consultation",
    description:
      "We assess your business goals and data readiness to recommend the right AI strategy, tools, and roadmap for measurable outcomes.",
  },
  {
    id: "nlp-solutions",
    title: "NLP Solutions",
    description:
      "From chatbots to document intelligence, we build natural language processing solutions that understand and act on human language.",
  },
  {
    id: "custom-ai-model-development",
    title: "Custom AI Model Development",
    description:
      "We design, train, and deploy bespoke AI models tailored to your data and use case, from prototype to production.",
  },
];
