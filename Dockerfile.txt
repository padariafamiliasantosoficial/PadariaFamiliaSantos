# Usa imagem oficial do PHP com Apache
FROM php:8.2-apache

# Instala extensões necessárias para PostgreSQL
RUN docker-php-ext-install pdo pdo_pgsql

# Copia os arquivos do projeto para a pasta do Apache
COPY . /var/www/html/

# Expõe a porta padrão do Apache
EXPOSE 80

# Comando para iniciar o Apache
CMD ["apache2-foreground"]
