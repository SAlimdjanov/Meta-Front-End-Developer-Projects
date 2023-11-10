export function validateName(name) {
    if (name.length < 3) {
        return false;
    }
    return true;
}

export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePhone(phone) {
    if (phone.length !== 10) {
        return false;
    }
    const cleanedNumber = phone.replace(/\D/g, "");
    return /^\d{10}$/.test(cleanedNumber);
}

export function validateGuests(guests) {
    if (guests <= 0) {
        return false;
    }
    return true;
}
