class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  addError(code, description) {
    this.errors.set(code, description);
  }

  translate(code) {
    const description = this.errors.get(code);
    return description || 'Unknown error';
  }
}

export default ErrorRepository;
