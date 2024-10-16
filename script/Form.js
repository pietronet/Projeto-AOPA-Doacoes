const SUPABASE_URL = 'https://sqxtdhvblnaafiijcyjm.supabase.co' ;
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxeHRkaHZibG5hYWZpaWpjeWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwNDA4MzksImV4cCI6MjA0NDYxNjgzOX0.48eciKD_7UmAi7rrV8Cez-6lEQgi47lKg1zNvPTDfiA';
// Crie a instância do cliente Supabase
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('box').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const genero = document.getElementById('genero').value;
    const mensagem = document.getElementById('mensagem').value;

    if (editingProductId) {
        await updateData( nome, email, telefone, genero, mensagem );
    } else {
        // Use userId as needed, e.g., from a global variable or session
       console.log("erro")// 
        await createData(nome, email, telefone, genero, mensagem );
    }

    await getData();
    resetForm();
});

async function createData(nome, email, telefone, genero, mensagem) {
    try {
        const { data, error } = await _supabase
            .from('formulario')
            .insert([{ nome, email, telefone, genero, mensagem }]);

        if (error) throw error;
        console.log("Dados criados:", data);
    } catch (error) {
        console.error("Erro ao criar dados:", error);
    }
}


