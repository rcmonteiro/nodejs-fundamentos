# Simple node.js API
- Criar usuários
- Listagem usuários
- Edição de usuários
- Remoção de usuários

# Methods and purposes
- GET => Buscar um recurso do back-end
- POST => Criar um recurso no back-end
- PUT => Atualizar um recurso no back-end
- PATCH => Atualizar uma informação específica de um recurso no back-end
- DELETE => Deletar um recurso do back-end

# HTTP Status Codes
- Informational responses (100 – 199)
- Successful responses (200 – 299)
  - 201: Entity created
- Redirection messages (300 – 399)
- Client error responses (400 – 499)
- Server error responses (500 – 599)

# Req Content
- Query Parameters: URL Stateful => Filtros, paginação, itens não obrigatórios para a requisição funcionar
- Route Parameters: Identificam um recurso (ex: /api/book/1)
- Request Body: Envio de informações, como um form, ou outras interfaces