# Usa imagem oficial do PHP com Apache
FROM php:8.2-apache

# Instala dependências do sistema, incluindo as bibliotecas de desenvolvimento do PostgreSQL
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql \
    && apt-get clean

# Copia os arquivos do projeto para a pasta do Apache
COPY . /var/www/html/

# Expõe a porta padrão do Apache
EXPOSE 80

# Comando para iniciar o Apache
CMD ["apache2-foreground"]