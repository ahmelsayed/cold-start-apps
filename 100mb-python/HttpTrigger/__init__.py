import logging
import azure.functions as func

first = True
def main(req: func.HttpRequest) -> func.HttpResponse:
    global first
    if first:
        first = False
        return func.HttpResponse("first")
    else:
        return func.HttpResponse("not first", status_code=400)
