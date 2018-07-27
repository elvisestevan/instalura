Baixar api
https://github.com/alberto-alura/instalura-api/raw/master/instalura.jar

Para executar api:
java -Dspring.jpa.database-platform=org.hibernate.dialect.MySQLDialect -Dspring.datasource.url=jdbc:mysql://172.17.0.2/instalura?createDatabaseIfNotExist=true -jar instalura.jar