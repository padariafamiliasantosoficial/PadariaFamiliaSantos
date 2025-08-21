
<?php
// Configurações de conexão com o banco (substitua com suas credenciais reais)
$host = 'dpg-d2hnjkemcj7s73bsf840-a.oregon-postgres.render.com';  // Ou '127.0.0.1'
$port = '5432';
$dbname = 'admin_zcit';
$user = 'admin_zcit_user';  // Seu usuário do pgAdmin
$password = 'E6MwzDLjV4v9HfgQEL2XGi6j35YWm48X';  // Sua senha do pgAdmin

// Verifica se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pega os dados do POST (com validação básica)
    $nome = trim($_POST['nome'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $atualizacoes = isset($_POST['atualizacoes']) ? true : false;  // Checkbox, mas não estamos armazenando ainda

    // Validações simples (adicione mais se precisar)
    if (empty($nome) || empty($email) || !$atualizacoes) {
        echo "Por favor, preencha todos os campos obrigatórios.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email inválido.";
        exit;
    }

    try {
        // Conecta ao banco usando PDO
        $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepara a query de inserção (segura contra SQL Injection)
        $stmt = $pdo->prepare("INSERT INTO formulario (nome, email) VALUES (:nome, :email)");
        $stmt->execute([':nome' => $nome, ':email' => $email]);

        // Mensagem de sucesso e redirecionamento
        echo "Dados enviados com sucesso! Você será redirecionado.";
        header('Site.Index');  // Substitua pelo nome do seu arquivo HTML
        exit;
    } catch (PDOException $e) {
        // Tratamento de erros (ex: email duplicado por ser unique)
        if ($e->getCode() == '23505') {  // Erro de violação unique no PostgreSQL
            echo "Esse email já está cadastrado.";
        } else {
            echo "Erro ao conectar ou inserir dados: " . $e->getMessage();
        }
    }
} else {
    echo "Acesso inválido.";
}
$pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;sslmode=require", $user, $password);
?>