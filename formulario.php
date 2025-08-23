<?php
$host = getenv('DB_HOST');
$port = getenv('DB_PORT');
$dbname = getenv('DB_NAME');
$user = getenv('DB_USER');
$password = getenv('DB_PASSWORD');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $atualizacoes = isset($_POST['atualizacoes']);

    if (empty($nome) || empty($email) || !$atualizacoes) {
        echo "Por favor, preencha todos os campos obrigatórios.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email inválido.";
        exit;
    }

    try {
        $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->prepare("INSERT INTO formulario (nome, email) VALUES (:nome, :email)");
        $stmt->execute([':nome' => $nome, ':email' => $email]);

        // Exibe mensagem de sucesso com redirecionamento após 3 segundos
        echo '<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="3;url=https://padariafamiliasantos.onrender.com/">
    <title>Sucesso</title>
</head>
<body>
    <p>Dados enviados com sucesso! Você será redirecionado em 3 segundos...</p>
</body>
</html>';
        exit;
    } catch (PDOException $e) {
        if ($e->getCode() == '23505') {
            echo "Esse email já está cadastrado.";
        } else {
            echo "Erro ao conectar ou inserir dados: " . $e->getMessage();
        }
        exit;
    }
} else {
    echo "Acesso inválido.";
    exit;
}
?>