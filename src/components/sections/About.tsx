import { Reveal } from "@/components/Reveal";
import { Brain, Cpu, Cloud, Bot, BarChart3, Sparkles } from "lucide-react";

const highlights = [
  { icon: Brain, label: "LLM & Fine-Tuning Specialist" },
  { icon: Bot, label: "AI Bot & Voice Agent Development" },
  { icon: Cpu, label: "Deep Learning · PyTorch · TF" },
  { icon: Cloud, label: "AWS SageMaker · Azure ML · GCP" },
  { icon: BarChart3, label: "KPI Analytics & Data Pipelines" },
  { icon: Sparkles, label: "AI Art · Midjourney · SDXL" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="thread">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold">About <span className="text-gradient">Me</span></h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-brand" />
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Data scientist & AI engineer turning frontier research into production-grade systems that move metrics.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-5 gap-12 items-start">
          <Reveal variant="diamond" className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-glow p-8 bg-card">
              <div className="absolute -inset-1 bg-gradient-brand opacity-20 blur-2xl -z-10" />
              <div className="text-7xl font-bold text-gradient glow-text">7+</div>
              <div className="mt-2 text-sm tracking-[0.3em] uppercase text-cyan-glow">Years of Experience</div>
              <div className="mt-8 space-y-4">
                <Stat label="AI Models Deployed" value="50+" />
                <Stat label="CRM Integrations" value="30+" />
                <Stat label="LLM Fine-tunes" value="20+" />
                <Stat label="Languages" value="11" />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3 space-y-6">
            <Reveal variant="fade">
              <h3 className="text-2xl font-bold">Senior <span className="text-cyan-glow">Data Science & AI/ML</span> Engineer</h3>
            </Reveal>
            <Reveal variant="fade" delay={0.1}>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in Data Science and AI/ML, building production systems on AWS SageMaker, Google AI,
                and Azure ML. I design models in Python, R, and Julia with TensorFlow, PyTorch and Scikit-learn,
                and orchestrate data with Kafka, Airflow and NiFi.
              </p>
            </Reveal>
            <Reveal variant="fade" delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">
                My focus is Large Language Models — RAG, Agents, Graphs, optimization and fine-tuning with Hugging Face —
                and Voice AI agents on Vapi.ai, Retell, and Bland.ai. I bridge that into business with HubSpot, Salesforce,
                GHL and automation through Make.com and Zapier.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((h, i) => (
                <Reveal key={h.label} variant="fade" delay={0.05 * i}>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                    <div className="w-9 h-9 rounded-md bg-gradient-brand grid place-items-center text-primary-foreground">
                      <h.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{h.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border pb-2">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-xl font-bold text-cyan-glow tabular-nums">{value}</span>
    </div>
  );
}
