function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf("password") !== -1) {
        return false;
    }

    let hasUppercase = false;
    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            hasUppercase = true;
            break;
        }
    }
    return hasUppercase;
}