import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, history = [] } = await req.json();
    
    const groqApiKey = Deno.env.get('GROQ_API_KEY');
    if (!groqApiKey) {
      throw new Error('GROQ_API_KEY not configured');
    }

    const messages = [
      {
        role: 'system',
        content: `Você é a INOVAPRO AI, a assistente inteligente da INOVAPRO TECHNOLOGY - uma empresa brasileira focada em inovação digital, automação e soluções inteligentes para negócios modernos.

Seu propósito é:
- Apresentar a empresa e seus projetos (INOVABANK, INOVAHUB, ISA)
- Tirar dúvidas sobre os serviços e soluções
- Ajudar visitantes a entender como a Inovapro pode ajudá-los
- Ser amigável, profissional e demonstrar expertise em tecnologia

Projetos da Inovapro:
1. INOVABANK - Plataforma de organização financeira inteligente
2. INOVAHUB - Ecossistema digital que conecta empreendedores e clientes
3. ISA - Intelligent Service Assistant para automatizar atendimentos

Responda sempre em português brasileiro, de forma clara e profissional.`
      },
      ...history,
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Groq API error: ${error}`);
    }

    const data = await response.json();
    const aiMessage = data.choices[0]?.message?.content || 'Desculpe, não consegui processar sua mensagem.';

    return new Response(
      JSON.stringify({ message: aiMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
