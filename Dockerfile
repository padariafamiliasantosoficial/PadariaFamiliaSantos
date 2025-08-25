# Usa a imagem oficial do PHP com Apache
FROM php:8.2-apache

# Instala dependências do sistema, incluindo bibliotecas de desenvolvimento do PostgreSQL
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Habilita o módulo rewrite para suportar .htaccess
RUN a2enmod rewrite

# Configura o Apache para permitir o uso de .htaccess
RUN echo "<Directory /var/www/html>" >> /etc/apache2/apache2.conf \
    && echo "AllowOverride All" >> /etc/apache2/apache2.conf \
    && echo "</Directory>" >> /etc/apache2/apache2.conf

# Copia os arquivos do projeto para a pasta do Apache
COPY . /var/www/html/

# Define permissões adequadas para os arquivos
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expõe a porta padrão do Apache
EXPOSE 80

RUN sed -i 's/AllowOverride None/AllowOverride All/' /etc/apache2/sites-enabled/000-default.conf

# Comando para iniciar o Apache
CMD ["apache2-foreground"]

