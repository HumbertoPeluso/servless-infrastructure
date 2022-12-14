locals {
  namespaced_service_name = "${var.service_name}-${var.env}"

  lambdas_path = "${path.module}/lambdas"
  layers_path  = "${local.lambdas_path}/layers"

  lambdas = {
    /* get = {
      description = "Get todos"
      memory      = 256
      timeout     = 10
      http_type   = "GET"
    }
    delete = {
      description = "Delete given todo"
      memory      = 128
      timeout     = 5
      http_type   = "DELETE"
    }
    put = {
      description = "Update given todo"
      memory      = 128
      timeout     = 5
      http_type   = "PUT"
    }
    post = {
      description = "Create new todo"
      memory      = 128
      timeout     = 5
      http_type   = "POST"
    }
    test = {
      description = "Test own function"
      memory      = 128
      timeout     = 5
      http_type   = "GET"
    } */
    signup = {
      description = "Test own function"
      memory      = 128
      timeout     = 5
      http_type   = "GET"
    }
  }
}