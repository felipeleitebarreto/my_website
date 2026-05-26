import { Reveal } from "@/components/Reveal";
import { Brain, Code2, Database, Cloud, Bot, Workflow } from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "AI / ML & LLM",
    skills: [
      { name: "PyTorch / TensorFlow", level: 95 },
      { name: "LLM Fine-Tuning (HF)", level: 95 },
      { name: "RAG / Agents / Graph", level: 92 },
      { name: "NLP · Spacy · Transformers", level: 90 },
      { name: "Computer Vision", level: 85 },
      { name: "Scikit-learn / Pandas", level: 95 },
    ],
  },
  {
    icon: Bot,
    title: "AI Bots & Voice",
    skills: [
      { name: "Vapi.ai / Retell / Bland", level: 95 },
      { name: "Dialogflow / Rasa", level: 88 },
      { name: "GPT-4 / Claude / Gemini", level: 95 },
      { name: "Microsoft Bot Framework", level: 82 },
      { name: "IBM Watson Assistant", level: 80 },
      { name: "Conversational Design", level: 90 },
    ],
  },
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "Python", level: 98 },
      { name: "TypeScript / JavaScript", level: 92 },
      { name: "R / Julia", level: 85 },
      { name: "Go / Rust", level: 75 },
      { name: "SQL", level: 90 },
      { name: "C++ / Java", level: 78 },
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: [
      { name: "Apache Kafka", level: 88 },
      { name: "Apache Airflow", level: 90 },
      { name: "Apache NiFi", level: 82 },
      { name: "ETL / Pipelines", level: 92 },
      { name: "PostgreSQL / Mongo", level: 88 },
      { name: "Big Data (Spark)", level: 80 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS SageMaker", level: 92 },
      { name: "Google AI Platform", level: 88 },
      { name: "Azure ML", level: 85 },
      { name: "Docker / Kubernetes", level: 88 },
      { name: "Lambda / EC2 / S3", level: 90 },
      { name: "CI/CD", level: 85 },
    ],
  },
  {
    icon: Workflow,
    title: "CRM & Automation",
    skills: [
      { name: "GHL / HubSpot / Salesforce", level: 95 },
      { name: "Make.com / Zapier", level: 95 },
      { name: "Airtable / Monday", level: 88 },
      { name: "Power Automate", level: 82 },
      { name: "REST / GraphQL APIs", level: 92 },
      { name: "Hootsuite / Buffer", level: 85 },
    ],
  },
];

const tools = [
  "OpenAI", "Anthropic", "Hugging Face", "LangChain", "LlamaIndex", "Pinecone",
  "Weaviate", "Vapi.ai", "Retell", "Bland.ai", "Midjourney", "Stable Diffusion",
  "DALL·E", "AWS SageMaker", "Azure ML", "Google Vertex AI", "TensorFlow", "PyTorch",
  "Kafka", "Airflow", "Docker", "Kubernetes", "GHL", "HubSpot",
  "Salesforce", "Make.com", "Zapier", "n8n", "Tableau", "Power BI",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="thread">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold">My <span className="text-gradient">Skills</span></h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-brand" />
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              A full-spectrum toolkit covering the entire AI lifecycle — from data pipelines and model training
              to deployment, automation, and conversational agents.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Reveal key={cat.title} variant="diamond" delay={idx * 0.08}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center text-cyan-glow group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-all">
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm">{s.name}</span>
                        <span className="text-xs text-cyan-glow tabular-nums">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-brand shadow-glow" style={{ width: `${s.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tools rows */}
        <Reveal variant="fade">
          <div className="mt-20">
            <h3 className="text-center text-2xl font-bold mb-2">AI Tools & Platforms I Use</h3>
            <p className="text-center text-muted-foreground text-sm mb-10">Day-to-day stack across the AI/ML and automation lifecycle</p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((t, i) => (
                <Reveal key={t} variant="spinner" delay={i * 0.02}>
                  <span className="px-4 py-2 rounded-full border border-primary/30 bg-card text-sm text-foreground/90 hover:border-cyan-glow hover:text-cyan-glow hover:shadow-glow transition-all cursor-default">
                    {t}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
