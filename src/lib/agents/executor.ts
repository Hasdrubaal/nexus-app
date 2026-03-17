import Anthropic from "@anthropic-ai/sdk";

export interface AgentConfig {
  model: string;
  systemPrompt: string;
  maxTokens?: number;
}

export interface AgentResult {
  content: string;
  tokenUsage: {
    input: number;
    output: number;
  };
}

export async function executeAgent(
  config: AgentConfig,
  userMessage: string
): Promise<AgentResult> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY environment variable is required");
  }

  const client = new Anthropic({ apiKey });

  const response = await client.messages.create({
    model: config.model,
    max_tokens: config.maxTokens ?? 4096,
    system: config.systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });

  const textContent = response.content.find((block) => block.type === "text");
  const content = textContent ? textContent.text : "";

  return {
    content,
    tokenUsage: {
      input: response.usage.input_tokens,
      output: response.usage.output_tokens,
    },
  };
}
