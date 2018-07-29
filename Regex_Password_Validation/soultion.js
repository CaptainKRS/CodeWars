function validate(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=\D*\d)[^ .;]{6,}$/.test(password);
  }
