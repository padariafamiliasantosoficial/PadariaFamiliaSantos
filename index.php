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

        // Exibe mensagem com contagem regressiva
        echo '<!DOCTYPE html>
<html>
<head>
    <title>Enviado</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        #countdown { font-size: 24px; color: #E38417; }
    </style>
</head>
<body>
    <p>Dados enviados com sucesso!</p>
    <p>Você será redirecionado em <span id="countdown">3</span> segundos...</p>
    <script>
        let timeLeft = 3;
        const countdownElement = document.getElementById("countdown");
        const timer = setInterval(() => {
            timeLeft--;
            countdownElement.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                window.location.href = "https://padariafamiliasantos.onrender.com/";
            }
        }, 1000);
    </script>
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

// tirar .html da URL
$host = getenv('DB_HOST');
$port = getenv('DB_PORT');
$dbname = getenv('DB_NAME');
$user = getenv('DB_USER');
$password = getenv('DB_PASSWORD');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Seu código de tratamento do formulário permanece igual...
    // (omitido por brevidade, mas mantenha como está)
} else {
    // Código para roteamento de URLs (remover .html)
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = trim($uri, '/');

    // Tratamento especial para a raiz (/)
    if ($uri === '') {
        $html_file = 'index.html';
    } else {
        $html_file = $uri . '.html';
    }

    // Se não terminar com extensão e o arquivo .html existir, serve-o
    if (!preg_match('/\.[a-zA-Z0-9]+$/', $uri) && file_exists($html_file)) {
        readfile($html_file);
        exit;
    }

    // Para outros arquivos (CSS, JS, imagens, PHP), deixa o servidor processar
    if (file_exists($uri)) {
        return false;
    }

    // Caso contrário, 404
    http_response_code(404);
    echo 'Página não encontrada';
}
?>