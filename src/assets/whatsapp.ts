export function encodeMessage(message: string) {
    const number = '584168062680';
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${number}?text=${encodedMessage}`;
}

