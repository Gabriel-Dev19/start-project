export default function formattedURL(text) {
    return String(text)
    .replace(/[-]/g, '')
    .replace(/[áàãâÀÁÃÂÄ]/g, 'a')
    .replace(/[éèêëÉÈÊË]/g, 'e')
    .replace(/[íìîïÍÌÎÏ]/g, 'i')
    .replace(/[óòõôöÒÓÔÖÕ]/g, 'o')
    .replace(/[úùûüÙÚÛÜ]/g, 'u')
    .replace(/[çÇ]/g, 'c')
    .replace(/[\s :]/g, '-')
    .replace(/[./,']/g, '')
    .replace(/--/g, '-')
    .toLowerCase()
}