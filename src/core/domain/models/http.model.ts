export interface HttpResponse {
    statusCode: number;
    body: any;
}

export interface HttpRequest {
    params: any;
    body: any;
}

export interface HttpMiddleware {
    params?: any; // nao necessario
    headers: any;
    body: any;
}
