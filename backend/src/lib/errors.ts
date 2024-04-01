import type { ValidationError } from "express-validator"

export abstract class CustomError extends Error {
  abstract statusCode: number

  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  abstract serializeErrors(): { message: string; field?: string; stack?: string | null | undefined }[]
}

export class InternalServerError extends CustomError {
  statusCode = 500

  constructor(message?: string) {
    super(message || "Internal server error")
    Object.setPrototypeOf(this, InternalServerError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
        stack: process.env.NODE_ENV === "production" ? null : this.stack,
      },
    ]
  }
}

export class BadRequestError extends CustomError {
  statusCode = 400

  constructor(message?: string) {
    super(message || "Something went wrong")
    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
        stack: process.env.NODE_ENV === "production" ? null : this.stack,
      },
    ]
  }
}

export class RequestValidationError extends CustomError {
  statusCode = 400

  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters")
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeErrors() {
    const stack = process.env.NODE_ENV === "production" ? null : this.stack
    return this.errors.map((error) => {
      if (error.type === "field") return { message: String(error.msg), field: error.path, stack }
      return { message: String(error.msg), stack }
    })
  }
}

export class DatabaseConnectionError extends CustomError {
  statusCode = 500

  constructor(message?: string) {
    super(message || "Database connection error")
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.message,
        stack: process.env.NODE_ENV === "production" ? null : this.stack,
      },
    ]
  }
}

export class NotAuthorizedError extends CustomError {
  statusCode = 401

  constructor(message?: string) {
    super(message || "Not authorized")
    Object.setPrototypeOf(this, NotAuthorizedError.prototype)
  }

  override serializeErrors() {
    return [
      {
        message: this.message,
        stack: process.env.NODE_ENV === "production" ? null : this.stack,
      },
    ]
  }
}

export class NotFoundError extends CustomError {
  statusCode = 404

  constructor(message: string) {
    super(message || "Resource not found")
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message, stack: process.env.NODE_ENV === "production" ? null : this.stack }]
  }
}
